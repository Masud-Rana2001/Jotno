const stats = [
  { value: "500+", label: "Verified Caregivers" },
  { value: "1200+", label: "Happy Families" },
  { value: "24/7", label: "Customer Support" },
  { value: "100%", label: "Trusted Service" },
];

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full ">
        {stats.map((stat, i) => (
          <div key={i} className="stat text-center bg-sky-200">
            <div className="mx-1">

            <div className="stat-value text-primary">{stat.value}</div>
            <div className="stat-title">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
