
import { forwardRef } from 'react';
import { PlayIcon } from './icons/PlayIcon';

const VideoSection = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section ref={ref} className="pt-24 pb-12 lg:py-12 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-extrabold text-white mb-2">
            Descubre en 2 Minutos Cómo Transformarás tu Futuro Profesional
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto aspect-video bg-black rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden cursor-pointer group">
          <img 
            src="https://picsum.photos/seed/video-thumb/1280/720" 
            alt="Video thumbnail" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-red-900 bg-opacity-30"></div>
          <div className="absolute">
            <PlayIcon className="h-20 w-20 text-yellow-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-125" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 max-w-3xl mx-auto">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-red-700 transition-all duration-300 shadow-lg">
            VER VIDEO COMPLETO
          </button>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-yellow-500 transition-all duration-300 shadow-lg">
            EXPLORAR MÁS
          </button>
        </div>
      </div>
    </section>
  );
});

VideoSection.displayName = "VideoSection";

export default VideoSection;
