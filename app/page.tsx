"use client";

import { useEffect, useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import Confetti from "./components/Confetti";
import BackgroundEffects from "./components/BackgroundEffects";
import EffectButtons from "./components/EffectButtons";
import EffectsManager from "./components/EffectsManager";
import { useNewYearCountdown } from "./hooks/useNewYearCountdown";
import { useAutoEffects } from "./hooks/useAutoEffects";
import "./styles/stars.css";

const Homepage = () => {
  const { targetDate, year } = useNewYearCountdown();
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const checkNewYear = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      if (now >= target) {
        setIsNewYear(true);
      }
    };

    checkNewYear();
    const interval = setInterval(checkNewYear, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const {
    activeEffects,
    setActiveEffect,
    hasTriggeredAuto,
  } = useAutoEffects({ isNewYear, targetDate });

  const handleEffectClick = (effect: string) => {
    setActiveEffect(effect);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <BackgroundEffects />

      {/* เนื้อหาหลัก */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* หัวข้อหลัก */}
        <div className="mb-8 animate-fade-in-down">
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 mb-2 tracking-wider animate-gradient-x drop-shadow-2xl">
              🎊 ปีใหม่ {year} 🎊
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>

        <p className="text-2xl md:text-3xl text-gray-100 mb-16 tracking-wide font-light animate-fade-in">
          นับถอยหลังสู่ปีใหม่
        </p>

        {/* การ์ดนาฬิกานับถอยหลัง */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 animate-scale-in">
          <CountdownTimer targetDate={targetDate} />
        </div>

        <EffectButtons onEffectClick={handleEffectClick} />
      </div>

      {/* Confetti - แสดงเฉพาะเมื่อถึงปีใหม่ */}
      <Confetti show={isNewYear} />

      <EffectsManager
        activeEffects={activeEffects}
        hasTriggeredAuto={hasTriggeredAuto}
      />
    </div>
  );
};

export default Homepage;
