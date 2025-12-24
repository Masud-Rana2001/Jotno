import Banner from "@/components/home/Banner";
import CallToAction from "@/components/home/CallToAction";
import HowItWorks from "@/components/home/HowItWorks";
import Products from "@/components/home/Products";
import ServicesSectionHome from "@/components/home/ServiceSectionHome";

import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/services/ServicesSection";
// import Test from "@/components/Test";
import { authOptions } from "@/lib/authOptions";
// import { getServerSession } from "next-auth";
import Image from "next/image";


export default async function Home() {
  
  return (
    <div className="space-y-20">
      <section>
        <Banner></Banner>
        <StatsSection />
        <ServicesSectionHome />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
     
      </section>
    </div>
  );
}
