const reasons = [
  "Verified & Background Checked Caregivers",
  "Transparent Pricing",
  "Easy & Fast Booking",
  "Secure Platform",
  "24/7 Customer Support",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Jotno
        </h2>

        <ul className="max-w-2xl mx-auto space-y-4">
          {reasons.map((reason, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="badge badge-primary badge-lg">✓</span>
              <span className="text-lg">{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
