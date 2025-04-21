
import React from "react";
import { Helmet } from "react-helmet";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const SpineBrainSurgery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Spine & Brain Surgery in India – Cost, Best Neurosurgeons & Hospitals</title>
        <meta name="description" content="Get affordable spine and brain surgeries in India. Compare costs, top neurosurgeons, and best hospitals. Free consultation and visa support." />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Spine & Brain Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Advanced neurosurgical procedures by top specialists at affordable costs
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Now
                  </Button>
                  <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:text-indigo-700">
                    <Calendar className="mr-2 h-5 w-5" /> Request Callback
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://placehold.co/800x600/eef2ff/4f46e5/?text=Neurosurgery"
                  alt="Advanced neurosurgery procedure"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold">Neurosurgical Procedures</h2>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Spine and Brain surgeries encompass a wide range of complex procedures to treat conditions affecting the central and peripheral nervous system. These include brain tumors, spinal disorders, cerebrovascular diseases, and neurological trauma.
                </p>
                <p className="text-gray-700 mb-4">
                  India has established itself as a global destination for neurosurgery with cutting-edge technology including neuronavigation, intraoperative MRI, and minimally invasive techniques that result in better outcomes and faster recovery.
                </p>
                <div className="mt-8">
                  <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Learn More About Neurosurgical Procedures</Button>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold">Why Choose India for Neurosurgery?</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  India's neurosurgical excellence is recognized globally, offering advanced treatments for complex neurological conditions at significantly lower costs.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Internationally trained neurosurgeons with extensive expertise</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>State-of-the-art neuro-diagnostic and surgical technology</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Minimally invasive techniques for faster recovery times</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <p>Cost savings of 70-80% compared to Western countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-indigo-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Expert Neurosurgical Opinion</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our neurosurgeons can review your medical reports and recommend the most appropriate treatment options for your condition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Share Your Medical Reports
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg py-6">
                <Calendar className="mr-2 h-5 w-5" /> Schedule a Free Consultation
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

export default SpineBrainSurgery;
