import { getAllPaymentHistory } from "@/actions/server/paymenthistory";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function MyPaymentsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const payments = await getAllPaymentHistory();

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        💳 Payment History
      </h1>

      {payments.length === 0 ? (
        <p className="text-gray-500">No payment records found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-2xl shadow border">
          <table className="table w-full">
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
                <th>Date</th>
                
              </tr>
            </thead>

            <tbody>
              {payments.map((p, index) => (
                <tr key={p._id} className="hover">
                  <td>{index + 1}</td>

                  <td>
                    <p className="font-semibold">{p.serviceTitle}</p>
                    <p className="text-xs text-gray-500">
                      {p.notifyEmail}
                    </p>
                  </td>

                  <td className="font-bold text-primary">
                    ৳ {p.amount.toLocaleString()}
                  </td>

                  <td className="capitalize">
                    {p.method === "card" && "💳 Card"}
                    {p.method === "bank" && "🏦 Bank"}
                    {p.method === "mobile" && "📱 Mobile"}
                  </td>

                  <td>
                    <span className="badge badge-success">
                      {p.status}
                    </span>
                  </td>

                  <td className="text-sm">
                    {new Date(p.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
