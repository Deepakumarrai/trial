
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-undergrads-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">UnderGrads</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses with innovative consulting solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-undergrads-lightblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-undergrads-lightblue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-undergrads-lightblue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-undergrads-lightblue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                <Link to="/what-we-do">IT Consulting</Link>
              </li>
              <li className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                <Link to="/what-we-do">Business Strategy</Link>
              </li>
              <li className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                <Link to="/what-we-do">Digital Transformation</Link>
              </li>
              <li className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                <Link to="/what-we-do">Market Research</Link>
              </li>
              <li className="text-gray-300 hover:text-undergrads-lightblue transition-colors">
                <Link to="/what-we-do">Financial Advisory</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business Avenue, Suite 500<br />New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-gray-300">info@undergrads.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} UnderGrads Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
