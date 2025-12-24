"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleServices } from "@/actions/server/services";
import BookingForm from "@/components/booking/BookingForm";

export default function BookingPage() {
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const data = await getSingleServices(id);

        if (!data) {
          setError("Service not found");
        } else {
          setService(data);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load service");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchService();
  }, [id]);

  /* ---------- UI STATES ---------- */

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-error">{error}</h2>
        <p className="mt-2 text-gray-500">
          Please try again later or go back.
        </p>
      </div>
    );
  }

  /* ---------- SUCCESS ---------- */
  return <BookingForm service={service} />;
}
