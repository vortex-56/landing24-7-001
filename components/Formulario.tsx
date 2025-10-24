import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const Formulario: React.FC = () => {
  return (
  <div className="bg-white text-black p-4 sm:p-6 ring-1 ring-gray-100 w-full max-w-[500px] min-h-[340px] sm:min-h-[381.8px] mx-auto lg:-translate-y-14 lg:mt-0" style={{ boxShadow: '0 0 16px rgba(0,0,0,0.4)', borderRadius: '32px' }}>
      <h2 className="text-lg sm:text-xl font-extrabold text-left text-red-600 mb-2 sm:mb-3 leading-tight">
  Consigue tus Primeros <AnimatedCounter start={100000} end={1000000} delay={3000} duration={1000} className="inline-block text-red-600" /> de los Bancos <span className="text-black">sin Pagar Intereses.</span>
      </h2>
      <div className="text-xs text-gray-600 text-left mb-4 sm:mb-6">
        Domina la estrategia financiera para apalancarte del dinero de los bancos. Aprende a reducir tus impuestos a CERO, de forma 100% legal y práctica, mientras obtienes financiamiento sin intereses.
      </div>
      <form className="space-y-2 sm:space-y-3">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-2 rounded-full bg-[#e8ecef] placeholder-gray-600 focus:outline-none text-sm" />
          <input type="email" placeholder="Correo Electrónico" className="w-full px-4 py-2 rounded-full bg-[#e8ecef] placeholder-gray-600 focus:outline-none text-sm" />
          <input type="text" placeholder="WhatsApp" className="w-full px-4 py-2 rounded-full bg-[#e8ecef] placeholder-gray-600 focus:outline-none text-sm" />
        <button type="submit" className="w-full bg-red-600 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-extrabold uppercase hover:bg-red-700 transition-all duration-300">
          ¡ACCEDE A ESTE DESCUENTO HOY!
        </button>
      </form>
    </div>
  );
};

export default Formulario;