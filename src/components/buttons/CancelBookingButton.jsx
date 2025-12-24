"use client";

import { cancelBooking } from "@/actions/server/bookings";
import Swal from "sweetalert2";

const CancelBookingButton = ({ bookingId }) => {
  const handleCancel = async () => {
    const confirm = await Swal.fire({
      title: "Cancel Booking?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it",
    });

    if (!confirm.isConfirmed) return;

    const res = await cancelBooking(bookingId);

    if (res.success) {
      Swal.fire("Cancelled!", "Booking has been cancelled", "success")
    } else {
      Swal.fire("Error", "Unable to cancel booking", "error");
    }
  };

  return (
    <button onClick={handleCancel} className="btn btn-error btn-sm text-white">
      Cancel Booking
    </button>
  );
};

export default CancelBookingButton;
