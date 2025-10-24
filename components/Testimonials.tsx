
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Gracias al curso, conseguí mi primer trabajo en el área administrativa en menos de un mes.',
      name: 'Maria Rojas',
      title: 'Asistente Contable en Empresa XYZ',
      image: 'https://picsum.photos/seed/person1/200/200',
    },
    {
      quote: 'El contenido es 100% práctico y aplicable. Lo que aprendí el lunes, lo usé en la oficina el martes. ¡Increíble!',
      name: 'Carlos Mendoza',
      title: 'Analista Administrativo Junior',
      image: 'https://picsum.photos/seed/person2/200/200',
    },
    {
      quote: 'Perdí el miedo a la SUNAT. Ahora entiendo los procesos y me siento seguro en mi trabajo. Lo recomiendo totalmente.',
      name: 'Ana García',
      title: 'Emprendedora',
      image: 'https://picsum.photos/seed/person3/200/200',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-black">
            Nuestros Alumnos ya Están Consiguiendo Resultados
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 border-4 border-yellow-400" />
              <p className="text-gray-600 italic text-lg mb-6">"{testimonial.quote}"</p>
              <h3 className="font-bold text-xl text-black">{testimonial.name}</h3>
              <p className="text-red-600 font-semibold">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
