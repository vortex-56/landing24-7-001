
import React from 'react';

const Offer: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-8">
          Estás a un Paso de Impulsar tu Carrera Profesional
        </h2>
        <div className="max-w-2xl mx-auto bg-white text-black p-8 rounded-lg shadow-2xl space-y-6">
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-md">
            <ul className="space-y-3 text-left text-lg">
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Curso Completo de Asistente Administrativo y Contable <span className="ml-auto font-bold">(Valor S/1000)</span></li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> <span className="font-bold text-red-600">BONO 1:</span> Pack de Plantillas de Excel Automatizadas <span className="ml-auto font-bold">(Valor S/150)</span></li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> <span className="font-bold text-red-600">BONO 2:</span> Acceso al Grupo Privado de Alumnos <span className="ml-auto font-bold">(Valor S/200)</span></li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✔</span> Certificado a nombre de [Tu Institución]</li>
            </ul>
          </div>
          <div>
            <p className="text-xl text-gray-500">Valor Total: <span className="line-through">S/1350</span></p>
            <p className="text-4xl lg:text-5xl font-black text-red-600 my-2">
              Inscríbete Hoy por un único pago de S/299
            </p>
          </div>
          <button type="submit" className="w-full bg-yellow-400 text-black py-4 px-6 rounded-md text-xl font-bold uppercase hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            ¡Sí, Quiero Inscribirme Ahora!
          </button>
          <div className="text-center text-gray-600 mt-4">
            <p className="font-bold">Garantía de Satisfacción de 7 Días.</p>
            <p>Tu inversión es 100% segura.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
