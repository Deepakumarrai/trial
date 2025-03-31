
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Futuristic background with overlay */}
      <div
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-undergrads-blue/90 via-undergrads-blue/80 to-black/70 z-0"></div>
      
      {/* Animated tech patterns */}
      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1545987796-200677ee1011?auto=format&fit=crop&q=80&w=1920')] bg-no-repeat bg-cover"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className={`opacity-0 ${loaded ? 'animate-fade-in' : ''}`}>
              <h2 className="text-white text-xl md:text-2xl font-medium mb-4">
                Professional Consulting Services
              </h2>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0 ${loaded ? 'animate-pop-up' : ''}`}>
              <span className="block">Transforming</span>
              <span className="text-undergrads-lightblue">Industries</span>
              <span className="block">Through Innovation</span>
            </h1>
            <p className={`text-lg md:text-xl text-white/80 mb-8 max-w-xl opacity-0 ${loaded ? 'animate-fade-in animate-delay-300' : ''}`}>
              UnderGrads provides cutting-edge strategic solutions to help businesses thrive in today's rapidly evolving markets. We combine deep expertise with innovative thinking.
            </p>
            <div className={`flex space-x-4 opacity-0 ${loaded ? 'animate-fade-in animate-delay-400' : ''}`}>
              <div className="flex gap-2">
                <span 
                  className="px-4 py-2 bg-undergrads-lightblue text-white rounded-full text-sm font-medium cursor-pointer hover:bg-white hover:text-undergrads-blue transition-colors"
                  onClick={() => navigate("/what-we-do")}
                >
                  What We Do
                </span>
                <span
                  className="px-4 py-2 bg-undergrads-lightblue text-white rounded-full text-sm font-medium cursor-pointer hover:bg-white hover:text-undergrads-blue transition-colors"
                  onClick={() => navigate("/industries")}
                >
                  Industries
                </span>
                <span 
                  className="px-4 py-2 bg-undergrads-lightblue text-white rounded-full text-sm font-medium cursor-pointer hover:bg-white hover:text-undergrads-blue transition-colors"
                  onClick={() => navigate("/case-studies")}
                >
                  Case Studies
                </span>
                <span 
                  className="px-4 py-2 bg-undergrads-lightblue text-white rounded-full text-sm font-medium cursor-pointer hover:bg-white hover:text-undergrads-blue transition-colors"
                  onClick={() => navigate("/careers")}
                >
                  Careers
                </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className={`relative rounded-xl overflow-hidden shadow-2xl opacity-0 ${loaded ? 'animate-slide-left' : ''}`}>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                alt="Business Consulting" 
                className="w-full h-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-undergrads-blue/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-undergrads-lightblue text-white p-4 rounded-lg shadow-lg opacity-0 animate-pop-up animate-delay-500">
              <p className="font-medium">Trusted by 500+ companies worldwide</p>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center opacity-0 animate-fade-in animate-delay-600">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
            <p className="text-white/80">Clients Served</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-white">98%</p>
            <p className="text-white/80">Client Satisfaction</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-white">10+</p>
            <p className="text-white/80">Industries Served</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-white">15+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
