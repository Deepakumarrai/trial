
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, image, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4 flex justify-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="md:w-3/4">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <blockquote className="mb-6 text-gray-600 italic">
          "{quote}"
        </blockquote>
        <div>
          <p className="font-bold text-undergrads-blue">{author}</p>
          <p className="text-gray-500">
            {position}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    
    const currentElement = document.getElementById("testimonials-section");
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "UnderGrads transformed our business strategy, resulting in a 35% growth in revenue within just six months. Their team's expertise and dedication exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechNova Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      quote: "The digital transformation roadmap provided by UnderGrads was exactly what our company needed. Their insights helped us navigate complex challenges and emerge stronger than ever.",
      author: "Michael Chen",
      position: "CTO",
      company: "GlobalHealth Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      rating: 5
    },
    {
      quote: "Working with UnderGrads was a game-changer for our financial strategy. Their team delivered actionable insights that helped us optimize our investment portfolio and increase returns.",
      author: "Emily Rodriguez",
      position: "CFO",
      company: "Atlas Financial Group",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      rating: 4
    }
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials-section" className="py-20 bg-undergrads-lightgrey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-undergrads-blue mb-4 opacity-0 ${isInView ? 'animate-fade-in' : ''}`}>
            Client Success Stories
          </h2>
          <p className={`text-lg text-gray-600 max-w-3xl mx-auto opacity-0 ${isInView ? 'animate-fade-in animate-delay-200' : ''}`}>
            Hear from our clients about how UnderGrads consulting services have transformed their businesses.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className={`opacity-0 ${isInView ? 'animate-fade-in animate-delay-300' : ''}`}>
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <Testimonial {...testimonials[currentIndex]} />
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white hover:bg-undergrads-blue hover:text-white border border-undergrads-blue text-undergrads-blue rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-undergrads-blue' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white hover:bg-undergrads-blue hover:text-white border border-undergrads-blue text-undergrads-blue rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>
        
        <div className={`text-center mt-12 opacity-0 ${isInView ? 'animate-fade-in animate-delay-400' : ''}`}>
          <Button 
            className="bg-undergrads-blue hover:bg-undergrads-lightblue text-white px-8 py-6"
            onClick={() => navigate("/case-studies")}
          >
            View Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
