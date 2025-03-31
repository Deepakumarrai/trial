
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface IndustryProps {
  name: string;
  image: string;
  description: string;
}

const Industry: React.FC<IndustryProps> = ({ name, image, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="relative overflow-hidden rounded-xl group cursor-pointer h-80"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/industries")}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-undergrads-blue/90 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className={`text-white/80 transform transition-all duration-500 ${isHovered ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Industries: React.FC = () => {
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
    
    const currentElement = document.getElementById("industries-section");
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const industries = [
    {
      name: "Technology & IT",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=600",
      description: "Cutting-edge solutions for tech companies facing digital evolution and market disruption."
    },
    {
      name: "Healthcare",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600",
      description: "Strategic guidance for healthcare providers to optimize patient care while managing costs."
    },
    {
      name: "Finance",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b2a0b5?auto=format&fit=crop&q=80&w=600",
      description: "Expert financial consulting for banks, investment firms, and fintech innovators."
    },
    {
      name: "Education",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
      description: "Transformative strategies for educational institutions to enhance learning outcomes."
    },
    {
      name: "Retail",
      image: "https://images.unsplash.com/photo-1610374792793-f016b77ca51a?auto=format&fit=crop&q=80&w=600",
      description: "Customer-centric approaches to help retailers thrive in the evolving marketplace."
    },
    {
      name: "Manufacturing",
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=600",
      description: "Operational excellence and supply chain optimization for manufacturing businesses."
    },
    {
      name: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
      description: "Strategic property development and investment advice for the real estate sector."
    },
    {
      name: "Automotive",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600",
      description: "Innovative solutions for automotive companies navigating industry transformation."
    },
    {
      name: "Energy",
      image: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?auto=format&fit=crop&q=80&w=600",
      description: "Sustainable and efficient energy strategies for a changing global landscape."
    },
    {
      name: "Media & Entertainment",
      image: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&q=80&w=600",
      description: "Creative solutions for media companies in the digital content revolution."
    }
  ];

  return (
    <section id="industries-section" className="py-20 bg-gradient-to-b from-white to-undergrads-lightgrey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-undergrads-blue mb-4 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}>
            Industries We Serve
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto opacity-0 ${isInView ? 'animate-fade-in animate-delay-200' : ''}`}>
            We provide specialized consulting services across diverse industries, delivering tailored solutions to meet specific challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`${index >= 5 ? 'hidden xl:block' : ''} opacity-0 ${isInView ? `animate-fade-in animate-delay-${(index % 5) * 100 + 300}` : ''}`}
            >
              <Industry {...industry} />
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 opacity-0 ${isInView ? 'animate-fade-in animate-delay-500' : ''}`}>
          <Button 
            className="bg-undergrads-blue hover:bg-undergrads-lightblue text-white px-8 py-6"
            onClick={() => navigate("/industries")}
          >
            Explore All Industries
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
