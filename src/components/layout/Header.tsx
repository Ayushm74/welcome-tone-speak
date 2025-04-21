
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.svg" 
              alt="Nile Wellness" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-semibold text-nile-600">Nile Wellness</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/doctors" className="text-gray-700 hover:text-nile-600 transition-colors">
            Doctors
          </Link>
          <Link to="/hospitals" className="text-gray-700 hover:text-nile-600 transition-colors">
            Hospitals
          </Link>
          <Link to="/treatments" className="text-gray-700 hover:text-nile-600 transition-colors">
            Treatments
          </Link>
          <Link to="/free-opinion" className="text-gray-700 hover:text-nile-600 transition-colors">
            Free Opinion
          </Link>
          <Link to="/patient-stories" className="text-gray-700 hover:text-nile-600 transition-colors">
            Patient Stories
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-nile-600 transition-colors">
            About Us
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            Call Us
          </Button>
          <Button className="bg-nile-600 hover:bg-nile-700 flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
