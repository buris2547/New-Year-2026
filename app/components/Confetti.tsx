"use client";

import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  color: string;
  shape: string;
  rotation: number;
}

interface ConfettiProps {
  show: boolean;
}

export default function Confetti({ show }: ConfettiProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!show) return;

    // ใช้ setTimeout เพื่อหลีกเลี่ยง cascading renders
    const timer = setTimeout(() => {
      const colors = [
      "#FFD700", // Gold
      "#FF69B4", // Hot Pink
      "#00CED1", // Dark Turquoise
      "#FF6347", // Tomato
      "#9370DB", // Medium Purple
      "#32CD32", // Lime Green
      "#FF1493", // Deep Pink
      "#00BFFF", // Deep Sky Blue
    ];

    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 2 + Math.random() * 3,
        animationDelay: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.5 ? "circle" : "square",
        rotation: Math.random() * 360,
      });
    }
      setConfetti(pieces);
    }, 0);

    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          style={{
            position: "absolute",
            left: `${piece.left}%`,
            top: "-10px",
            width: "10px",
            height: "10px",
            backgroundColor: piece.color,
            animation: `confetti-fall ${piece.animationDuration}s linear ${piece.animationDelay}s infinite`,
            borderRadius: piece.shape === "circle" ? "50%" : "0",
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
