
import React, { useRef } from 'react';
import Contador from './components/Contador';
import Portada from './components/Portada';
import VideoSection from './components/VideoSection';
import ProblemSection from './components/ProblemSection';
import CourseContent from './components/CourseContent';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

const App: React.FC = () => {
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const scrollToVideo = () => {
    if (videoSectionRef.current) {
      const isMobileOrTablet = window.innerWidth < 1024; // lg breakpoint es 1024px
      
      if (isMobileOrTablet) {
        // Para móvil y tablet, scroll 48px más arriba (32px + 16px adicionales)
        const elementPosition = videoSectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 48;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // Para desktop, comportamiento normal
        videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Contador />
      <Portada onScrollToVideo={scrollToVideo} />
      <main>
        <VideoSection ref={videoSectionRef} />
        <ProblemSection />
        <CourseContent />
        <Testimonials />
        <Offer />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
