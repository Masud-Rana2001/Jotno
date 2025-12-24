const steps = [
  {
    title: "Choose Service",
    desc: "Select the care service you need.",
  },
  {
    title: "Book Easily",
    desc: "Choose duration and location.",
  },
  {
    title: "Relax",
    desc: "Verified caregiver arrives at your home.",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="card border text-center">
            <div className="card-body">
              <div className="text-4xl font-bold text-primary mb-2">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
