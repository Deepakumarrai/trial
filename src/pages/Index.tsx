
import React, { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

const Index = () => {
  // Smooth scroll to top when page loads
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-undergrads-blue/20 to-transparent z-10"></div>
        <Services />
        <Industries />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
};

export default Index;
