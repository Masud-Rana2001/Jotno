"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { cache } from "react";
const { dbConnect, collections } = require("@/lib/dbConnect");

const bookingsCollection = dbConnect(collections.BOOKINGS);





export const handleCart = async (bookingInfo) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return { success: false };
  }

  if (
    !bookingInfo?.serviceId ||
    !bookingInfo?.duration ||
    !bookingInfo?.location?.division
  ) {
    return { success: false };
  }

  const newBooking = {
    userEmail: session.user.email,
    serviceId: bookingInfo.serviceId,
    title: bookingInfo.serviceTitle,
    duration: bookingInfo.duration,
    location: bookingInfo.location,
    totalCost: bookingInfo.totalCost,
    status: "pending",
    createdAt: new Date(),
  };

  const result = await bookingsCollection.insertOne(newBooking);

  return { success: result.acknowledged };
};

// Get all bookings of logged-in user
export const getMyBookings = cache(async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return [];

  return await bookingsCollection
    .find({ userEmail: session.user.email })
    .sort({ createdAt: -1 })
    .toArray();
} 
) 



export const cancelBooking = async (bookingId) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return { success: false };

  const result = await bookingsCollection.updateOne(
    {
      _id: new ObjectId(bookingId),
      userEmail: session.user.email,
      status: "pending",
    },
    { $set: { status: "cancelled" } }
  );
  revalidatePath("/mybookings")
  return { success: result.modifiedCount === 1 };
};


export const updateBookingStatus = async (bookingId) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return { success: false };

  const result = await bookingsCollection.updateOne(
    {
      _id: new ObjectId(bookingId),
      userEmail: session.user.email,
      status: "pending",
    },
    { $set: { status: "paid" } }
  );
  // revalidatePath("/mybookings")
  return { success: result.modifiedCount === 1 };
};


export const getSingleBooking = async (bookingId) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return {};
  const result = await bookingsCollection.findOne(
    {
      _id: new ObjectId(bookingId),
      status: "paid",
    }
  );
  return result
};
