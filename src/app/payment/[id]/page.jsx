"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { sendPaymentEmail } from "@/actions/server/payment";
import { useParams } from "next/navigation";
import { updateBookingStatus } from "@/actions/server/bookings";
import { createPaymentHistory } from "@/actions/server/paymenthistory";


export default function PaymentPage({ params }) {
  const { id } = useParams();
  const { bookingId } = params;
  const router = useRouter();

  const [method, setMethod] = useState("card");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("bookingId",id)
  const handlePayment = async () => {
    if (!email) {
      Swal.fire("Email required", "Please enter your email", "warning");
      return;
    }
    setLoading(true);
    await updateBookingStatus(id)

   await createPaymentHistory({
  bookingId: id,
  method,
  email,
});


    const res = await sendPaymentEmail({
      email,
      bookingId:id,
      method,
    });

    setLoading(false);

    if (res.success) {
      Swal.fire({
        title: "Payment Successful 🎉",
        text: "Confirmation email sent successfully",
        icon: "success",
        confirmButtonText: "Go to My Bookings",
      }).then(() => {
        router.push("/mybookings");
      });
    } else {
      Swal.fire("Error", "Email sending failed", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Secure Checkout
      </h1>

      {/* Payment Method Selector */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        {[
          { id: "card", label: "💳 Card" },
          { id: "bank", label: "🏦 Bank" },
          { id: "mobile", label: "📱 Mobile" },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setMethod(m.id)}
            className={`p-4 rounded-xl border text-lg font-semibold transition ${
              method === m.id
                ? "bg-primary text-white border-primary"
                : "bg-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Payment Box */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border space-y-6">
        {/* EMAIL (COMMON) */}
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {method === "card" && (
          <>
            <input className="input input-bordered w-full" placeholder="Card Number" />
            <div className="flex gap-4">
              <input className="input input-bordered w-full" placeholder="MM/YY" />
              <input className="input input-bordered w-full" placeholder="CVV" />
            </div>
            <input className="input input-bordered w-full" placeholder="Card Holder Name" />
          </>
        )}

        {method === "bank" && (
          <>
            <select className="select select-bordered w-full">
              <option>Select Bank</option>
              <option>DBBL</option>
              <option>Brac Bank</option>
              <option>City Bank</option>
              <option>Islami Bank</option>
            </select>
            <input className="input input-bordered w-full" placeholder="Account Number" />
            <input className="input input-bordered w-full" placeholder="Account Holder Name" />
          </>
        )}

        {method === "mobile" && (
          <>
            <select className="select select-bordered w-full">
              <option>Select Provider</option>
              <option>bKash</option>
              <option>Nagad</option>
              <option>Rocket</option>
            </select>
            <input className="input input-bordered w-full" placeholder="Mobile Number" />
            <input className="input input-bordered w-full" placeholder="Transaction ID" />
          </>
        )}

        <button
          onClick={handlePayment}
          disabled={loading}
          className="btn btn-primary w-full text-lg"
        >
          {loading ? "Processing..." : "Confirm Payment"}
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-4">
        Booking ID: {bookingId} • Dummy Payment System
      </p>
    </div>
  );
}
