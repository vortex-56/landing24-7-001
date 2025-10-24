
import React from 'react';
import { CVIcon } from './icons/CVIcon';
import { DoubtIcon } from './icons/DoubtIcon';
import { MoneyIcon } from './icons/MoneyIcon';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <CVIcon className="h-16 w-16 text-red-600" />,
      text: '¿Envías tu CV y no te llaman?',
    },
    {
      icon: <DoubtIcon className="h-16 w-16 text-red-600" />,
      text: '¿Te asustan los trámites con SUNAT y sientes que no estás calificado?',
    },
    {
      icon: <MoneyIcon className="h-16 w-16 text-red-600" />,
      text: '¿Ves ofertas de empleo bien pagadas pero no tienes las habilidades prácticas que piden?',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-black mb-12">
          ¿Te sientes estancado o inseguro en tu búsqueda laboral?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="flex flex-col items-center p-6 space-y-4">
              <div className="mb-4">{problem.icon}</div>
              <p className="text-xl font-semibold text-gray-700">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
