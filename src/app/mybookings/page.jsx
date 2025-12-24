import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
// import { getMyBookings } from "@/actions/server/bookings";
import Link from "next/link";
import { getMyBookings } from "@/actions/server/bookings";
import CancelBookingButton from "@/components/buttons/CancelBookingButton";


const statusStyle = {
  pending: "badge-warning",
  confirmed: "badge-info",
  completed: "badge-success",
  cancelled: "badge-error",
};

export default async function MyBookingsPage() {
  // 🔐 Auth Guard (PRIVATE ROUTE)
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const bookings = (await getMyBookings()) || [];
  console.log(bookings[0])
  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          You have no bookings yet.
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* HEADER */}
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{b.title}</h2>
                  <p className="text-sm text-gray-600">
                    Duration: <span className="font-medium">{b.duration}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Location:{" "}
                    <span className="font-medium">
                      {b.location?.division}, {b.location?.district}
                    </span>
                  </p>
                  <p className="mt-2 text-lg font-bold text-primary">
                    ৳{b.totalCost}
                  </p>
                </div>

                {/* STATUS */}
                <div className="flex sm:items-start">
                  <span
                    className={`badge ${statusStyle[b.status] || "badge-neutral"}`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href={`/services/${b.serviceId}`}
                  className="btn btn-outline btn-sm"
                >
                  View Details
                </Link>

                {/* PAY BUTTON */}
                {(b.status === "pending" || b.status === "confirmed") && (
                  <Link
                    href={`/payment/${b._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Pay Now
                  </Link>
                )}

                {/* FUTURE: Cancel button can be added here */}
                {b.status !== "cancelled" && b.status !== "completed"  && b.status !== "paid" && (

                <div>
                  <CancelBookingButton bookingId={ b._id.toString()} />
                </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
