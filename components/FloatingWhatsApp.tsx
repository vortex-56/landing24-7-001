
import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/TUNUMERO"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white flex items-center p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50"
    >
      <WhatsAppIcon className="h-8 w-8" />
      <span className="ml-3 font-bold hidden md:inline">¿Tienes dudas? ¡Conversemos!</span>
    </a>
  );
};

export default FloatingWhatsApp;
