import AllInvestmentSection from "@/components/sections/AllInvestmentSection";
import BecomeAuthorizedSection from "@/components/sections/BecomeAuthorizedSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhyChoose from "@/components/sections/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
   <div className="h-[200vh]">
    <HeroSection />
    <WhyChoose />
    <AllInvestmentSection />
    <BecomeAuthorizedSection />
    <TestimonialSection />
   </div>
  );
}
