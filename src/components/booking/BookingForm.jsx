"use client";
import { useRouter } from "next/navigation";

import { handleCart } from "@/actions/server/bookings";
import { regionData } from "@/data/regionData";
import { useState } from "react";
import Swal from "sweetalert2";

const BookingForm = ({ service }) => {
  const router = useRouter();

  const [duration, setDuration] = useState(1);
  const [filteredDistricts, setFilteredDistricts] = useState([]);
  const [location, setLocation] = useState({
    division: "",
    district: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  if (!service) return null;

  const totalCost = service.price * duration;

  const handleDivisionChange = (e) => {
    const division = e.target.value;

    setLocation((prev) => ({
      ...prev,
      division,
      district: "",
    }));

    setFilteredDistricts(regionData[division] || []);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookingInfo = {
      serviceId: service._id,
      serviceTitle: service.title,
      duration,
      location,
      totalCost,
    };

    try {
      const result = await handleCart(bookingInfo);

      if (result.success) {
        Swal.fire({
          title: "Booking Confirmed",
          text: "Your booking is successful",
          icon: "success",
        });
         router.push("/mybookings");

      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Server error occurred",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Book {service.title}
      </h2>

      <form
        onSubmit={handleBooking}
        className="p-6 bg-white shadow-lg rounded-2xl border"
      >
        {/* Duration */}
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="form-control flex-1">
            <label className="label font-semibold">
              Duration ({service.service_duration})
            </label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Division */}
          <div className="form-control flex-1">
            <label className="label font-semibold">Division</label>
            <select
              className="select select-bordered w-full"
              onChange={handleDivisionChange}
              required
            >
              <option value="">Select Division</option>
              {Object.keys(regionData).map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* District & Address */}
        <div className="flex flex-col sm:flex-row gap-10 my-6">
          <div className="form-control flex-1">
            <label className="label font-semibold">District</label>
            <select
              className="select select-bordered w-full"
              disabled={!location.division}
              onChange={(e) =>
                setLocation((prev) => ({
                  ...prev,
                  district: e.target.value,
                }))
              }
              required
            >
              <option value="">Select District</option>
              {filteredDistricts.map((dist) => (
                <option key={dist} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control flex-1">
            <label className="label font-semibold">Detailed Address</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="House, Road, Area"
              onChange={(e) =>
                setLocation((prev) => ({
                  ...prev,
                  address: e.target.value,
                }))
              }
              required
            />
          </div>
        </div>

        {/* Price Summary */}
        <div className="bg-primary/5 p-6 rounded-xl border-2 border-dashed border-primary">
          <div className="flex justify-between text-lg">
            <span>
              ৳{service.price} × {duration}
            </span>
            <span className="font-bold">৳{totalCost}</span>
          </div>

          <div className="divider"></div>

          <div className="flex justify-between text-2xl font-black text-primary">
            <span>Grand Total</span>
            <span>৳{totalCost}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full mt-6"
        >
          {loading ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
