"use client";

import { useEffect } from "react";

interface SparklesProps {
  active: boolean;
  onComplete: () => void;
}

export default function Sparkles({ active, onComplete }: SparklesProps) {
  useEffect(() => {
    if (!active) return;

    const runConfetti = async () => {
      const confetti = (await import("canvas-confetti")).default;

      // สร้าง confetti แบบ sparkles หลายครั้ง
      const duration = 60000; // 60 วินาที (1 นาที)
      const animationEnd = Date.now() + duration;
      const defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 50,
        colors: ['#FFD700', '#FFC700', '#FFB700', '#FFA700']
      };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          onComplete();
          return;
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // ยิงจาก 2 จุด
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);

      return () => clearInterval(interval);
    };

    runConfetti();
  }, [active, onComplete]);

  if (!active) return null;

  return null;
}
