import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  start: number;
  end: number;
  delay: number;
  duration: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  start, 
  end, 
  delay, 
  duration, 
  className = '' 
}) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
      
      const increment = (end - start) / (duration / 50); // 50ms intervals
      let current = start;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);
      
      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [start, end, delay, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString('es-PE', { 
      style: 'currency', 
      currency: 'PEN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  return (
    <span className={className}>
      {formatNumber(count)}
    </span>
  );
};

export default AnimatedCounter;