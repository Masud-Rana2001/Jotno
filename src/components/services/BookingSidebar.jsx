"use client";

import BookServiceBtn from "@/components/buttons/BookServiceBtn";

const BookingSidebar = ({ service }) => {
  return (
    <div className="lg:col-span-1">
      <div className="card bg-base-100 shadow-xl border sticky top-24">
        <div className="card-body">
          <h3 className="text-xl font-bold border-b pb-4">
            Booking Summary
          </h3>

          <div className="flex justify-between items-center py-4">
            <span className="text-gray-500">Service Charge</span>
            <span className="text-2xl font-bold text-primary">
              ৳{service.price}
            </span>
          </div>

          <div className="space-y-3 mb-6 text-sm">
            <div className="flex justify-between">
              <span>Rating:</span>
              <span className="font-semibold text-yellow-600">
                ⭐ {service.rating} / 5.0
              </span>
            </div>

            <div className="flex justify-between">
              <span>Availability:</span>
              <span className="font-semibold text-green-600">
                Available Now
              </span>
            </div>

            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="font-semibold">
                {service.service_duration}
              </span>
            </div>
          </div>

          <BookServiceBtn service={service} />

          <p className="text-xs text-center text-gray-400 mt-4">
            * Taxes and additional costs calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingSidebar;
