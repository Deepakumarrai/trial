
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Code, 
  TrendingUp, 
  Search, 
  ShieldCheck, 
  Globe,
  Brain,
  Building,
  Car,
  Lightbulb,
  Smartphone,
  HeartPulse,
  LineChart,
  Landmark,
  Factory
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, delay }) => {
  const [isInView, setIsInView] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentElement = document.getElementById(`service-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [title]);

  return (
    <div 
      id={`service-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-gray-100 opacity-0 ${
        isInView ? `animate-fade-in ${delay}` : ''
      }`}
    >
      <div className="bg-undergrads-lightgrey p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-undergrads-blue">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-undergrads-blue">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button 
        variant="link" 
        className="text-undergrads-lightblue p-0 hover:text-undergrads-blue"
        onClick={() => navigate("/what-we-do")}
      >
        Learn More →
      </Button>
    </div>
  );
};

const Services: React.FC = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions designed to address your unique business challenges and operational needs.",
      icon: <Code size={28} />,
      delay: "animate-delay-100"
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
      icon: <Brain size={28} />,
      delay: "animate-delay-200"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security strategies and advanced threat detection.",
      icon: <ShieldCheck size={28} />,
      delay: "animate-delay-300"
    },
    {
      title: "FinTech Solutions",
      description: "Innovative financial technology solutions to streamline operations and enhance customer experiences.",
      icon: <Landmark size={28} />,
      delay: "animate-delay-400"
    },
    {
      title: "Digital Health",
      description: "Technology-driven healthcare solutions that improve patient outcomes and operational efficiency.",
      icon: <HeartPulse size={28} />,
      delay: "animate-delay-500"
    },
    {
      title: "Market Analysis",
      description: "Data-driven market insights to identify opportunities, understand competitors, and drive strategic decisions.",
      icon: <LineChart size={28} />,
      delay: "animate-delay-600"
    },
    {
      title: "Smart Infrastructure",
      description: "Intelligent infrastructure solutions that optimize resources and enhance urban living experiences.",
      icon: <Building size={28} />,
      delay: "animate-delay-100"
    },
    {
      title: "EV Consulting",
      description: "Strategic guidance for businesses navigating the electric vehicle revolution and sustainable transportation.",
      icon: <Car size={28} />,
      delay: "animate-delay-200"
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies to revolutionize your business operations and customer engagement.",
      icon: <Globe size={28} />,
      delay: "animate-delay-300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-undergrads-lightgrey to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-undergrads-blue mb-4">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive consulting services tailored to meet your business needs and drive innovation across various sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-undergrads-blue hover:bg-undergrads-lightblue text-white px-8 py-6"
            onClick={() => navigate("/what-we-do")}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
