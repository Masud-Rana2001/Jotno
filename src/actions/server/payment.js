"use server";



import nodemailer from "nodemailer";
import { getSingleBooking } from "./bookings";



export const sendPaymentEmail = async ({ email, bookingId, method }) => {
  try {
    const booking = await getSingleBooking(bookingId);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTemplate = `
      <div style="max-width:600px;margin:auto;font-family:Arial,Helvetica,sans-serif;
                  background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">

        <!-- Header -->
        <div style="background:#4f46e5;color:white;padding:20px;text-align:center">
          <h1 style="margin:0;font-size:26px">Jotno</h1>
          <p style="margin:4px 0 0;font-size:14px">Payment Confirmation</p>
        </div>

        <!-- Body -->
        <div style="padding:24px;color:#374151">
          <h2 style="color:#16a34a;margin-bottom:8px">Payment Successful 🎉</h2>
          <p style="font-size:14px;margin-bottom:20px">
            Thank you for your payment. Below are your booking details.
          </p>

          <!-- Booking Info -->
          <table width="100%" cellpadding="8" cellspacing="0"
                 style="border-collapse:collapse;font-size:14px">
            <tr style="background:#f9fafb">
              <td><strong>Booking ID</strong></td>
              <td>${booking._id}</td>
            </tr>
            <tr>
              <td><strong>Service</strong></td>
              <td>${booking.title}</td>
            </tr>
            <tr style="background:#f9fafb">
              <td><strong>Duration</strong></td>
              <td>${booking.duration} Days</td>
            </tr>
            <tr>
              <td><strong>Location</strong></td>
              <td>${booking.location?.address || "N/A"}</td>
            </tr>
            <tr style="background:#f9fafb">
              <td><strong>Payment Method</strong></td>
              <td>${method}</td>
            </tr>
            <tr>
              <td><strong>Total Amount</strong></td>
              <td style="font-weight:bold;color:#4f46e5">
                ৳ ${booking.totalCost.toLocaleString()}
              </td>
            </tr>
            <tr style="background:#f9fafb">
              <td><strong>Status</strong></td>
              <td style="color:#16a34a;font-weight:bold">
                Paid
              </td>
            </tr>
          </table>

          <!-- CTA -->
          <div style="margin-top:24px;text-align:center">
            <a href="https://jotno.vercel.app/mybookings"
               style="display:inline-block;padding:12px 20px;
                      background:#4f46e5;color:white;text-decoration:none;
                      border-radius:8px;font-weight:bold">
              View My Bookings
            </a>
          </div>

          <p style="margin-top:24px;font-size:13px;color:#6b7280">
            If you have any questions, feel free to contact our support team.
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#f9fafb;text-align:center;padding:14px;
                    font-size:12px;color:#9ca3af">
          © ${new Date().getFullYear()} Jotno • All rights reserved
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Jotno" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: " – Payment Successful",
      html: htmlTemplate,
    });

    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false };
  }
};


