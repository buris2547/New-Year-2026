"use client";

import { useState, useEffect } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [isNewYear, setIsNewYear] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    const checkNewYear = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      if (now >= target && !isNewYear) {
        setIsNewYear(true);
        setShowCelebration(true);
        // Play celebration sound if available
        try {
          const audio = new Audio('/celebration.mp3');
          audio.play().catch(() => console.log('Audio playback failed'));
        } catch {
          console.log('Audio not available');
        }
      }
    };

    const interval = setInterval(checkNewYear, 1000);
    return () => clearInterval(interval);
  }, [targetDate, isNewYear]);

  if (isNewYear && showCelebration) {
    return (
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 mb-4">
            🎊 สวัสดีปีใหม่ 2026! 🎊
          </h2>
          <p className="text-3xl md:text-4xl text-white mt-4">
            ขอให้มีความสุขมากๆ ตลอดปีเลยนะคะ!
          </p>
        </div>
        <div className="flex justify-center gap-4 text-7xl animate-pulse">
          <span>🎆</span>
          <span>🎉</span>
          <span>🎊</span>
          <span>🎈</span>
          <span>✨</span>
        </div>
        <button
          onClick={() => setShowCelebration(false)}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300 shadow-lg"
        >
          ดูนาฬิกานับถอยหลัง
        </button>
      </div>
    );
  }
  
  return (
    <div className="flex justify-center">
      <FlipCountdown
        hideYear
        hideMonth
        theme="dark"
        size="large"
        titlePosition="bottom"
        endAt={targetDate}
        dayTitle="วัน"
        hourTitle="ชั่วโมง"
        minuteTitle="นาที"
        secondTitle="วินาที"
      />
    </div>
  );
}
