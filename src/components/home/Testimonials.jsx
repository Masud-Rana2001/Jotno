const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Parent",
    comment:
      "Care.IO helped me find a trusted babysitter quickly. Highly recommended!",
  },
  {
    name: "Sadia Khan",
    role: "Daughter",
    comment:
      "Excellent elderly care service. Very professional and reliable.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="card shadow bg-base-100">
            <div className="card-body">
              <p>{t.comment}</p>
              <div className="mt-4">
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
