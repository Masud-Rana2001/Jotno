"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getSingleServices } from "@/actions/server/services";
import BookingForm from "@/components/booking/BookingForm";

const BookingPage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadService = async () => {
      const data = await getSingleServices(id);
      setService(data);
      setLoading(false);
    };
    loadService();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!service) return <div>Service not found</div>;

  return <BookingForm service={service} />;
};

export default BookingPage;
