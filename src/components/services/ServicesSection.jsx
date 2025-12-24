import { getServices } from "@/actions/server/services";
import ServiceCard from "./ServiceCard";


const ServicesSection =async () => {
  const services =await getServices()
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Services
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Choose from our trusted care services designed to support your
          family’s needs.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
