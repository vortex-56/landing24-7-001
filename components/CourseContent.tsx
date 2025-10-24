
import React, { useState } from 'react';
import { CheckIcon } from './icons/CheckIcon';

interface AccordionItemProps {
  title: string;
  content: string[];
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 px-6 text-left text-xl font-bold"
      >
        <span>{title}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 bg-gray-50">
          <ul className="space-y-4">
            {content.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CourseContent: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules = [
    {
      title: 'Módulo 1: Dominio Total de SUNAT',
      content: [
        'Domina el T-Registro y PLAME sin errores.',
        'Aprende a realizar declaraciones de forma correcta y puntual.',
      ],
    },
    {
      title: 'Módulo 2: Gestión Bancaria y Conciliaciones',
      content: [
        'Realiza conciliaciones bancarias como un experto.',
        'Entiende y gestiona los principales productos bancarios para empresas.',
      ],
    },
    {
      title: 'Módulo 3: Fundamentos Contables Prácticos',
      content: [
        'Aplica los principios contables esenciales en el día a día.',
        'Prepara a la empresa para auditorías y fiscalizaciones.',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black">
            El Camino Exacto para ser un Profesional Indispensable
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {modules.map((module, index) => (
            <AccordionItem
              key={index}
              title={module.title}
              content={module.content}
              isOpen={openModule === index}
              onClick={() => setOpenModule(openModule === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
