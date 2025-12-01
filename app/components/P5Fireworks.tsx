'use client';

import { useEffect, useRef } from 'react';

interface P5FireworksProps {
  active: boolean;
  onComplete: () => void;
}

export default function P5Fireworks({ active, onComplete }: P5FireworksProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fireworksRef = useRef<any>(null);

  useEffect(() => {
    if (!active || !containerRef.current) return;

    const initFireworks = async () => {
      const { Fireworks } = await import('fireworks-js');
      
      // สร้าง fireworks instance ด้วยการตั้งค่าที่สมจริง
      const fireworks = new Fireworks(containerRef.current!, {
        autoresize: true,
        opacity: 0.6,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 120,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 6,
        intensity: 35,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 0,
          max: 360
        },
        delay: {
          min: 20,
          max: 40
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 5
          },
          trace: {
            min: 1,
            max: 3
          }
        },
        brightness: {
          min: 50,
          max: 80
        },
        decay: {
          min: 0.015,
          max: 0.03
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
      });

      fireworks.start();
      fireworksRef.current = fireworks;

      // หยุดอัตโนมัติหลัง 60 วินาที (1 นาที)
      const timer = setTimeout(() => {
        fireworks.stop();
        onComplete();
      }, 60000);

      return () => {
        clearTimeout(timer);
        if (fireworksRef.current) {
          fireworksRef.current.stop();
        }
      };
    };

    const cleanup = initFireworks();
    
    return () => {
      cleanup.then(fn => fn && fn());
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
}
