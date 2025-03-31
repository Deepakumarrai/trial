
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA: React.FC = () => {
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
    
    const currentElement = document.getElementById("cta-section");
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section 
      id="cta-section" 
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-undergrads-blue opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"
        style={{ opacity: 0.1 }}
      ></div>
      
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 tech-pattern z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 opacity-0 ${isInView ? 'animate-pop-up' : ''}`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`text-lg md:text-xl text-white/80 mb-10 opacity-0 ${isInView ? 'animate-fade-in animate-delay-300' : ''}`}>
              Partner with UnderGrads to unlock your business's full potential. Our expert team is ready to develop customized solutions for your unique challenges.
            </p>
          </div>
          
          <div className={`glass p-8 rounded-2xl max-w-2xl mx-auto opacity-0 ${isInView ? 'animate-fade-in animate-delay-400' : ''}`}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60"
                  />
                </div>
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/60 appearance-none">
                  <option value="" className="bg-undergrads-blue text-white">Select Service Type</option>
                  <option value="tech" className="bg-undergrads-blue text-white">Technology & IT</option>
                  <option value="finance" className="bg-undergrads-blue text-white">Finance</option>
                  <option value="healthcare" className="bg-undergrads-blue text-white">Healthcare</option>
                  <option value="education" className="bg-undergrads-blue text-white">Education</option>
                  <option value="other" className="bg-undergrads-blue text-white">Other</option>
                </select>
              </div>
              <div className="flex justify-center">
                <Button 
                  className="bg-white text-undergrads-blue hover:bg-undergrads-lightgrey px-8 py-6 text-lg flex items-center"
                  onClick={() => navigate("/contact")}
                >
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mt-10 opacity-0 ${isInView ? 'animate-fade-in animate-delay-600' : ''}`}>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-6 py-2"
              onClick={() => navigate("/case-studies")}
            >
              View Success Stories
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 px-6 py-2 flex items-center"
              onClick={() => navigate("/contact")}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with an Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
