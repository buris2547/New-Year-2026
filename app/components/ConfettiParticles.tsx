"use client";

import { useEffect } from "react";

interface ConfettiParticlesProps {
  active: boolean;
  onComplete: () => void;
}

export default function ConfettiParticles({ active, onComplete }: ConfettiParticlesProps) {
  useEffect(() => {
    if (!active) return;

    const runConfetti = async () => {
      const confetti = (await import("canvas-confetti")).default;

      const duration = 60000; // 60 วินาที (1 นาที)
      const animationEnd = Date.now() + duration;

      // ยิง confetti แบบต่อเนื่อง
      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          onComplete();
          return;
        }

        const particleCount = 50 * (timeLeft / duration);

        // ยิงจากซ้าย
        confetti({
          particleCount,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.6 },
          colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'],
          zIndex: 50,
        });

        // ยิงจากขวา
        confetti({
          particleCount,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.6 },
          colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'],
          zIndex: 50,
        });
      }, 250);

      // ยิง confetti burst ครั้งแรก
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'],
        zIndex: 50,
      });

      return () => clearInterval(interval);
    };

    runConfetti();
  }, [active, onComplete]);

  if (!active) return null;

  return null;
}
