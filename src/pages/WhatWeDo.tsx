
import React, { useEffect, useState } from "react";
import { 
  BarChart3, 
  Code, 
  ShieldCheck, 
  Brain,
  Building,
  Car,
  HeartPulse,
  LineChart,
  Landmark
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  detailedDescription: string[];
}

const WhatWeDo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services: ServiceProps[] = [
    {
      title: "Software Development",
      description: "Custom software solutions designed to address your unique business challenges and operational needs.",
      icon: <Code size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Custom Application Development",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "Legacy System Modernization",
        "Cloud Application Development",
        "API Development & Integration"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.",
      icon: <Brain size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Predictive Analytics Solutions",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Machine Learning Model Development",
        "AI Strategy Consulting",
        "Intelligent Automation Solutions"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security strategies and advanced threat detection.",
      icon: <ShieldCheck size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Security Risk Assessment",
        "Penetration Testing",
        "Security Architecture Design",
        "Compliance & Governance",
        "Incident Response Planning",
        "Security Awareness Training"
      ]
    },
    {
      title: "FinTech Solutions",
      description: "Innovative financial technology solutions to streamline operations and enhance customer experiences.",
      icon: <Landmark size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Digital Banking Solutions",
        "Payment Processing Systems",
        "Wealth Management Platforms",
        "Blockchain Implementation",
        "RegTech Solutions",
        "Fraud Detection Systems"
      ]
    },
    {
      title: "Digital Health",
      description: "Technology-driven healthcare solutions that improve patient outcomes and operational efficiency.",
      icon: <HeartPulse size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Telehealth Platforms",
        "Electronic Health Records",
        "Healthcare Analytics",
        "Medical Device Integration",
        "Patient Engagement Solutions",
        "Health Information Exchange"
      ]
    },
    {
      title: "Market Analysis",
      description: "Data-driven market insights to identify opportunities, understand competitors, and drive strategic decisions.",
      icon: <LineChart size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Market Opportunity Assessment",
        "Competitive Intelligence",
        "Customer Behavior Analysis",
        "Pricing Strategy",
        "Market Entry Strategy",
        "Trend Analysis & Forecasting"
      ]
    },
    {
      title: "Smart Infrastructure",
      description: "Intelligent infrastructure solutions that optimize resources and enhance urban living experiences.",
      icon: <Building size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Smart City Planning",
        "IoT Implementation",
        "Energy Management Systems",
        "Connected Building Solutions",
        "Transportation Optimization",
        "Environmental Monitoring Systems"
      ]
    },
    {
      title: "EV Consulting",
      description: "Strategic guidance for businesses navigating the electric vehicle revolution and sustainable transportation.",
      icon: <Car size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "EV Market Entry Strategy",
        "Charging Infrastructure Planning",
        "Fleet Electrification",
        "Regulatory Compliance",
        "Sustainable Supply Chain",
        "EV Technology Assessment"
      ]
    },
    {
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies to revolutionize your business operations and customer engagement.",
      icon: <BarChart3 size={28} />,
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      detailedDescription: [
        "Digital Strategy Development",
        "Process Reengineering",
        "Technology Stack Assessment",
        "Change Management",
        "Digital Culture Development",
        "Innovation Labs & Workshops"
      ]
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-white to-undergrads-lightgrey/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold text-undergrads-blue mb-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            What We Do
          </h1>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto ${isLoaded ? 'animate-fade-in animate-delay-100' : 'opacity-0'}`}>
            Our comprehensive consulting services are designed to help your business overcome challenges and achieve sustainable growth across a wide range of industries and technological domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 ${
                isLoaded ? `animate-fade-in animate-delay-${(index % 9) * 100}` : 'opacity-0'
              }`}
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={service.imageSrc} 
                    alt={service.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute top-4 left-4 bg-undergrads-blue p-3 rounded-full text-white">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-undergrads-blue">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.detailedDescription.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-undergrads-lightblue mr-2"></span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
