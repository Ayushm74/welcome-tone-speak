
import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Phone, FileCheck, Hospital, Plane, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import StepLayout from "@/components/common/StepLayout";

// Journey steps for homepage
const journeySteps = [
  {
    number: "01",
    title: "Free Medical Opinion",
    description: "Share your medical reports with us. Our expert doctors will review and provide personalized treatment options within 24 hours.",
    icon: FileCheck
  },
  {
    number: "02",
    title: "Customized Treatment Plan",
    description: "Receive a detailed treatment plan with hospital options, cost estimates, and duration. We ensure transparency at every step.",
    icon: Hospital
  },
  {
    number: "03",
    title: "Travel & Accommodation",
    description: "Let us handle your travel arrangements, visa processing, and comfortable accommodation options based on your preferences.",
    icon: Plane
  },
  {
    number: "04",
    title: "Complete Medical Support",
    description: "Experience seamless healthcare with our team by your side throughout your medical journey in India.",
    icon: Calendar
  }
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Nile Wellness - Medical Tourism in India</title>
        <meta name="description" content="Get free medical opinions from India's top doctors. Fast, affordable, and trusted medical care for international patients with government-verified support." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-nile-50 to-medical-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Quality Healthcare in India at <span className="text-nile-600">Affordable Prices</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Get free medical opinions from India's top doctors. We provide complete assistance for international patients seeking quality and affordable medical treatment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-nile-600 hover:bg-nile-700 text-white py-6 px-8 text-lg">
                    Get Free Opinion <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-nile-600 text-nile-600 py-6 px-8 text-lg">
                    Contact Us <Phone className="ml-2" />
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://placehold.co/600x400/eef8f7/0d9488/?text=Healthcare+in+India"
                  alt="Healthcare services in India"
                  className="rounded-lg shadow-lg animate-float w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nile Wellness?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-nile-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <CheckCircle className="text-nile-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Free Medical Opinion</h3>
                <p className="text-gray-600">
                  Get free opinions from India's top doctors within 48 hours. Just share your medical reports.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-nile-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Globe className="text-nile-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Government Verified</h3>
                <p className="text-gray-600">
                  We are an official medical facilitator recognized by the Indian government for international patients.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="bg-nile-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Phone className="text-nile-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Our multilingual team is available round the clock to assist international patients.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Journey Steps Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">
                Your Medical Journey with Us
              </h2>
              <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                We provide end-to-end assistance for your medical treatment in India, ensuring a smooth and hassle-free experience.
              </p>
              <StepLayout steps={journeySteps} />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-nile-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your Medical Journey Today</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and let us help you find the best medical solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-nile-600 hover:bg-gray-100 text-lg">
                Get Free Medical Opinion
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg">
                Call Us Now
              </Button>
            </div>
          </div>
        </section>

        {/* Link to Plan Your Trip */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-semibold mb-6">Want to Learn More About Planning Your Trip?</h3>
            <Link to="/plan-your-trip">
              <Button className="bg-nile-600 hover:bg-nile-700 text-white">
                Plan Your Medical Trip <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
