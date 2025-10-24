import React from 'react';
import { PlayIcon } from './icons/PlayIcon';

interface PerfilProps {
  onScrollToVideo?: () => void;
}

const Perfil: React.FC<PerfilProps> = ({ onScrollToVideo }) => {
  return (
  <div className="flex flex-col items-center justify-center text-center h-full w-[350px] -translate-y-14">
      <div className="mb-2 relative z-10 translate-y-8">
        <div style={{ display: 'inline-block' }}>
          <div className="overflow-hidden w-[280px] lg:w-[320px]" style={{ height: '381.8px', borderTopRightRadius: '32px', borderBottomLeftRadius: '32px', boxShadow: '0 0 16px rgba(0,0,0,0.4)' }}>
            <img src="perfilportada.webp" alt="Perfil portada" className="w-full h-full object-cover block transform scale-[1.05] transition-transform duration-500" />
          </div>
        </div>
      </div>
  <div className="mt-2 relative z-20 translate-y-8 scale-95">
        <button
          onClick={onScrollToVideo}
          className="flex items-center space-x-3 bg-transparent border-2 border-black text-black px-[36px] py-2 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-100"
        >
          <PlayIcon className="h-5 w-5" />
          <span>Ver Video Explicativo (2 min)</span>
        </button>
      </div>
    </div>
  );
};

export default Perfil;