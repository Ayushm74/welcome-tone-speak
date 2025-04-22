
import React from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, MessageCircle, FileCheck, Plane, Hospital, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import StepLayout from "@/components/common/StepLayout";

const steps = [
  {
    number: "01",
    title: "Share Medical Reports",
    description: "Send us your medical reports and requirements. Our team will review them within 24 hours to provide personalized recommendations.",
    icon: FileCheck
  },
  {
    number: "02",
    title: "Receive Treatment Plan",
    description: "Get a detailed treatment plan including hospital options, estimated costs, and duration of stay. Ask any questions you have.",
    icon: Hospital
  },
  {
    number: "03",
    title: "Travel Arrangements",
    description: "Once you're ready, we'll help arrange your travel, accommodation, and hospital appointments. We handle all the logistics.",
    icon: Plane
  },
  {
    number: "04",
    title: "Begin Treatment",
    description: "Arrive in India and begin your treatment with full support from our team throughout your medical journey.",
    icon: Calendar
  }
];

const PlanYourTrip = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Plan Your Medical Trip to India - Nile Wellness</title>
        <meta name="description" content="Plan your medical treatment in India with our step-by-step guidance. We help with hospital selection, travel arrangements, and provide complete support." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-nile-50 to-medical-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Plan Your Medical Trip to India
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                We make your medical journey simple and stress-free with our comprehensive support at every step
              </p>
              <Button className="bg-nile-600 hover:bg-nile-700 text-white">
                Start Planning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16">
                Your Journey to Better Health
              </h2>
              <StepLayout steps={steps} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with us today. Our team is ready to guide you through every step of your medical journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-nile-600 hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" /> Contact Us Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PlanYourTrip;
