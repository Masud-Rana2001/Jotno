"use server";

import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { cache } from "react";

const { dbConnect, collections } = require("@/lib/dbConnect");

const paymentsCollection = dbConnect(collections.PAYMENTS);
const bookingsCollection = dbConnect(collections.BOOKINGS);

/**
 * Create payment history after successful payment
 */
export const createPaymentHistory = async ({
  bookingId,
  method,
  email,
}) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return { success: false };
  }

  if (!bookingId || !method || !email) {
    return { success: false };
  }

  const booking = await bookingsCollection.findOne({
    _id: new ObjectId(bookingId),
    userEmail: session.user.email,
  });

  if (!booking) {
    return { success: false };
  }

  const paymentDoc = {
    bookingId: booking._id,
    userEmail: session.user.email,
    notifyEmail: email,
    serviceId: booking.serviceId,
    serviceTitle: booking.title,
    amount: booking.totalCost,
    method, // card | bank | mobile
    status: "paid",
    createdAt: new Date(),
  };

  const result = await paymentsCollection.insertOne(paymentDoc);

  // optional: revalidate payment & booking pages
  revalidatePath("/mybookings");
  revalidatePath("/my-payments");

  return {
    success: result.acknowledged === true,
  };
};

/**
 * Get all payment history of logged-in user
 */
export const getAllPaymentHistory = cache(async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return [];

  return await paymentsCollection
    .find({ userEmail: session.user.email })
    .sort({ createdAt: -1 })
    .toArray();
});

/**
 * Get single payment (optional – future use)
 */
export const getSinglePayment = async (paymentId) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;

  return await paymentsCollection.findOne({
    _id: new ObjectId(paymentId),
    userEmail: session.user.email,
  });
};
