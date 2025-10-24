import React from 'react';
import useCountdown from '../hooks/useCountdown';

const Contador: React.FC = () => {
  // Crear una fecha objetivo de 3 días desde ahora
  const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <div className="bg-black text-white py-1.5 px-4 text-center relative z-50 sticky top-0 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Layout para desktop - todo en una línea */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          {/* Nuevo mensaje promocional */}
          <div className="text-lg font-bold whitespace-nowrap">
            ¡Aprovecha esta oportunidad ahora!
          </div>
          {/* Separator */}
          <div className="text-white/70">|</div>
          {/* Texto "La oferta de este curso termina en" */}
          <div className="text-base font-medium whitespace-nowrap">
            La oferta de este curso termina en
          </div>
          
          {/* Contador inline */}
          <div className="flex items-center gap-2">
            <CountdownUnit value={days} label="Días" size="desktop" />
            <CountdownUnit value={hours} label="Horas" size="desktop" />
            <CountdownUnit value={minutes} label="Min" size="desktop" />
            <CountdownUnit value={seconds} label="Seg" size="desktop" />
          </div>
        </div>

        {/* Layout para tablet - todo en una línea pero 24% más pequeño */}
        <div className="hidden sm:flex lg:hidden items-center justify-center gap-3 scale-[0.76]">
          {/* Nuevo mensaje promocional */}
          <div className="text-lg font-bold whitespace-nowrap">
            ¡Aprovecha esta oportunidad ahora!
          </div>
          {/* Separator */}
          <div className="text-white/70">|</div>
          {/* Texto "La oferta de este curso termina en" */}
          <div className="text-base font-medium whitespace-nowrap">
            La oferta de este curso termina en
          </div>
          
          {/* Contador inline */}
          <div className="flex items-center gap-2">
            <CountdownUnit value={days} label="Días" size="tablet" />
            <CountdownUnit value={hours} label="Horas" size="tablet" />
            <CountdownUnit value={minutes} label="Min" size="tablet" />
            <CountdownUnit value={seconds} label="Seg" size="tablet" />
          </div>
        </div>

        {/* Layout para móvil - múltiples líneas */}
        <div className="sm:hidden">
          <div className="flex flex-col items-center gap-2">
            {/* Nuevo mensaje promocional (móvil) */}
            <div className="text-lg font-bold">
              ¡Aprovecha esta oportunidad ahora!
            </div>
            {/* Texto "La oferta de este curso termina en" */}
            <div className="text-sm font-medium">
              La oferta de este curso termina en
            </div>
            
            {/* Contador */}
            <div className="flex items-center gap-2">
              <CountdownUnit value={days} label="Días" size="mobile" />
              <CountdownUnit value={hours} label="Horas" size="mobile" />
              <CountdownUnit value={minutes} label="Min" size="mobile" />
              <CountdownUnit value={seconds} label="Seg" size="mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CountdownUnitProps {
  value: string;
  label: string;
  size: 'desktop' | 'tablet' | 'mobile';
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label, size }) => {
  const sizeClasses = {
    desktop: {
      number: "text-base font-bold px-1.5 py-0.5 min-w-[30px]",
    },
    tablet: {
      number: "text-base font-bold px-1.5 py-0.5 min-w-[30px]",
    },
    mobile: {
      number: "text-sm font-bold px-1.5 py-0.5 min-w-[26px]",
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Número con fondo amarillo y texto negro */}
      <div className={`bg-yellow-400 text-black rounded text-center shadow-sm ${sizeClasses[size].number}`}>
        {value}
      </div>
    </div>
  );
};

export default Contador;