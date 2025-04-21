
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bone, ShieldCheck, Phone, MessageCircle } from "lucide-react";
import WhatsAppButton from "@/components/common/WhatsAppButton";

const HipReplacement = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Hip Replacement Surgery in India
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Advanced joint care by India's best orthopedic surgeons
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:text-blue-700">
                    <Phone className="mr-2 h-5 w-5" /> Request Callback
                  </Button>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://placehold.co/800x600/nile-600/white/?text=Hip+Replacement"
                  alt="Hip Replacement Surgery"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview and Why India */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <Bone className="text-nile-600 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">What is Hip Replacement Surgery?</h2>
                </div>
                <p className="text-gray-700">
                  Hip Replacement Surgery involves removing the damaged parts of the hip joint and replacing them with artificial implants made of metal, ceramic, or plastic. It is commonly performed to treat severe arthritis, fractures, or degeneration that causes chronic pain and mobility issues. The surgery can be Total Hip Replacement or Partial Hip Replacement, depending on the extent of damage. Minimally invasive and robotic-assisted procedures are also available for quicker recovery and lower complications.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-6">
                  <ShieldCheck className="text-green-600 mr-3 h-8 w-8" />
                  <h2 className="text-2xl font-bold">Why Choose India?</h2>
                </div>
                <p className="text-gray-700">
                  India is a global hub for orthopedic surgeries like hip replacement. The country offers world-class surgeons, modern hospitals with robotic assistance, globally certified implants, and comprehensive post-op physiotherapy. With up to 80% lower cost compared to the US or UK and zero waiting time, international patients from Africa, GCC, and CIS countries choose India for safe, effective, and affordable hip care. End-to-end support including visa, stay, translator, and local transport ensures a stress-free experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Cost Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-nile-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Procedure</th>
                    <th className="py-4 px-6 text-center">India</th>
                    <th className="py-4 px-6 text-center">USA</th>
                    <th className="py-4 px-6 text-center">UK</th>
                    <th className="py-4 px-6 text-center">Thailand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Total Hip Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$4,500–$6,500</td>
                    <td className="py-4 px-6 text-center">$60,000–$90,000</td>
                    <td className="py-4 px-6 text-center">$30,000–$45,000</td>
                    <td className="py-4 px-6 text-center">$14,000–$18,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Partial Hip Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$3,500–$5,000</td>
                    <td className="py-4 px-6 text-center">$45,000–$65,000</td>
                    <td className="py-4 px-6 text-center">$25,000–$35,000</td>
                    <td className="py-4 px-6 text-center">$12,000–$14,000</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Bilateral Hip Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$8,000–$10,000</td>
                    <td className="py-4 px-6 text-center">$100,000+</td>
                    <td className="py-4 px-6 text-center">$60,000+</td>
                    <td className="py-4 px-6 text-center">$20,000–$25,000</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Robotic Hip Replacement</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$6,000–$8,000</td>
                    <td className="py-4 px-6 text-center">$85,000+</td>
                    <td className="py-4 px-6 text-center">$45,000+</td>
                    <td className="py-4 px-6 text-center">$18,000+</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="py-4 px-6 font-medium">Ceramic/Cementless Implants</td>
                    <td className="py-4 px-6 text-center text-green-700 font-bold">$5,000+</td>
                    <td className="py-4 px-6 text-center">$70,000+</td>
                    <td className="py-4 px-6 text-center">$40,000+</td>
                    <td className="py-4 px-6 text-center">$15,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Top Orthopedic Doctors */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Orthopedic Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Doctor 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Shah"
                      alt="Dr. Vikram Shah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Vikram Shah</h3>
                  <p className="text-center text-nile-600 mb-2">Hip Replacement Specialist</p>
                  <p className="text-center text-gray-600 mb-4">30+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Shalby Hospitals</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Ahmedabad</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-nile-600 text-nile-600 hover:text-nile-700 w-full">
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Rajgopal"
                      alt="Dr. Ashok Rajgopal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Ashok Rajgopal</h3>
                  <p className="text-center text-nile-600 mb-2">Robotic Joint Replacement Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">35+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Medanta Hospital</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">Gurgaon</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-nile-600 text-nile-600 hover:text-nile-700 w-full">
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Doctor 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src="https://placehold.co/300x300/nile-600/white/?text=Dr.+Sharma"
                      alt="Dr. Hemant Sharma"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">Dr. Hemant Sharma</h3>
                  <p className="text-center text-nile-600 mb-2">Orthopedic Surgeon</p>
                  <p className="text-center text-gray-600 mb-4">28+ Years Experience</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-gray-600 font-medium">Fortis Hospital</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">New Delhi</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                    </Button>
                    <Button variant="outline" className="border-nile-600 text-nile-600 hover:text-nile-700 w-full">
                      Request Appointment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Hospitals */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Top Hospitals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hospital 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Shalby"
                    alt="Shalby Hospitals, Ahmedabad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Shalby Hospitals, Ahmedabad</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited | Specializes in Joint Replacement</span>
                  </div>
                  <p className="text-gray-600 mb-4">Ahmedabad</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Medanta"
                    alt="Medanta - The Medicity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Medanta - The Medicity</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH & JCI Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">Gurgaon</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>

              {/* Hospital 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://placehold.co/800x600/nile-600/white/?text=Fortis"
                    alt="Fortis Escorts, Delhi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fortis Escorts, Delhi</h3>
                  <div className="flex items-center mb-4">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">NABH Accredited</span>
                  </div>
                  <p className="text-gray-600 mb-4">New Delhi</p>
                  <Button className="w-full">View Hospital</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="tab1">Treatment</TabsTrigger>
                  <TabsTrigger value="tab2">Recovery</TabsTrigger>
                  <TabsTrigger value="tab3">Logistics</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">How long will I need to stay after hip surgery?</h3>
                    <p className="text-gray-700">Typically 10–14 days including physiotherapy and rehab.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Is robotic hip replacement available in India?</h3>
                    <p className="text-gray-700">Yes, many leading hospitals offer robotic-assisted or minimally invasive procedures.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I choose between cemented or uncemented implants?</h3>
                    <p className="text-gray-700">Yes, based on your age, bone condition, and mobility goals, our doctors will advise the right type.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Will physiotherapy be included?</h3>
                    <p className="text-gray-700">Yes, in-hospital physiotherapy starts the day after surgery and continues until discharge.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can I travel back home after 2 weeks?</h3>
                    <p className="text-gray-700">Most patients can travel home 10–14 days after surgery with doctor approval.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Do I need a medical visa?</h3>
                    <p className="text-gray-700">Yes, we assist in issuing a medical visa invitation and guiding you through the application.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">Can a family member stay with me?</h3>
                    <p className="text-gray-700">Yes, most hospitals allow one attendant and we help book nearby hotel stays too.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nile-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Get expert advice on your hip condition</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button className="bg-green-600 hover:bg-green-700 text-lg py-6">
                <MessageCircle className="mr-2 h-5 w-5" /> Send Reports on WhatsApp
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nile-600 text-lg py-6">
                <Phone className="mr-2 h-5 w-5" /> Speak to a Medical Expert Now
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

export default HipReplacement;
