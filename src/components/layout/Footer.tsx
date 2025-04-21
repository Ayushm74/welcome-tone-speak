
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Nile Wellness</h3>
            <p className="text-gray-300 mb-4">
              Making quality healthcare accessible for international patients in India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-gray-300 hover:text-white">Partner Hospitals</Link>
              </li>
              <li>
                <Link to="/patient-stories" className="text-gray-300 hover:text-white">Patient Stories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Treatments */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Treatments</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/treatments/knee-hip-replacement" className="text-gray-300 hover:text-white">
                  Knee & Hip Replacement
                </Link>
              </li>
              <li>
                <Link to="/treatments/kidney-liver-transplant" className="text-gray-300 hover:text-white">
                  Kidney & Liver Transplant
                </Link>
              </li>
              <li>
                <Link to="/treatments/spine-brain-surgery" className="text-gray-300 hover:text-white">
                  Spine & Brain Surgery
                </Link>
              </li>
              <li>
                <Link to="/treatments/cancer-treatment" className="text-gray-300 hover:text-white">
                  Cancer Treatment
                </Link>
              </li>
              <li>
                <Link to="/treatments/all" className="text-gray-300 hover:text-white">
                  All Treatments
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-nile-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-nile-500" />
                <span className="text-gray-300">info@nilewellness.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Nile Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
