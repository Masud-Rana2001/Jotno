export default function Banner() {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Trusted Care for Your Loved Ones
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Book verified babysitters, elderly caregivers, and home care services
          easily and securely.
        </p>

        <div className="flex justify-center gap-4">
          <button className="btn btn-primary">Book a Service</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </section>
  );
}
