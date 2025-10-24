import React from 'react';
import Perfil from './Perfil.tsx';
import Formulario from './Formulario.tsx';
import { PlayIcon } from './icons/PlayIcon';

interface PortadaProps {
  onScrollToVideo: () => void;
}

const Portada: React.FC<PortadaProps> = ({ onScrollToVideo }) => {
  return (
    <header className="relative min-h-0 lg:min-h-screen flex items-start lg:items-center justify-center text-black overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        {/* Fondo blanco puro */}
        <div className="w-full h-full bg-white"></div>
      </div>
      <div className="container mx-auto px-6 py-12 lg:py-20 pt-2 relative z-10 text-center">
        {/* Layout Desktop: 2 columnas (Perfil | Formulario) */}
        <div className="hidden lg:inline-grid lg:grid-cols-[auto_auto] gap-2 lg:gap-x-[56px] items-center justify-items-center transform mx-auto">
          {/* Columna Izquierda: Perfil (imagen + botón) */}
          <Perfil onScrollToVideo={onScrollToVideo} />

          {/* Columna Derecha: Formulario (componente separado) */}
          <Formulario />
        </div>

        {/* Layout Móvil/Tablet: Orden personalizado */}
  <div className="lg:hidden flex flex-col items-center gap-6 mt-4">
          {/* 1. Imagen circular y Botón Ver Video en la misma fila */}
          <div className="flex items-center gap-3 sm:gap-4 justify-center max-w-full px-2">
            {/* Imagen circular */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <img 
                src="perfilportada.webp" 
                alt="Perfil" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Botón Ver Video */}
            <button
              onClick={onScrollToVideo}
              className="flex items-center gap-2 sm:gap-3 bg-transparent border-2 border-black text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 flex-shrink min-w-0"
            >
              <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">Ver Video Explicativo (2 min)</span>
            </button>
          </div>

          {/* 2. Formulario */}
          <Formulario />
        </div>
      </div>
    </header>
  );
};

export default Portada;