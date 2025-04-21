
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "+919876543210"; // Replace with actual WhatsApp number
  const message = encodeURIComponent("Hello, I'd like to inquire about medical services.");
  
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={24} />
    </button>
  );
};

export default WhatsAppButton;
