import { useEffect, useState } from "react";

interface UseAutoEffectsProps {
  isNewYear: boolean;
  targetDate: string;
}

interface UseAutoEffectsReturn {
  activeEffects: string[];
  setActiveEffect: (effect: string | null) => void;
  hasTriggeredAuto: boolean;
}

export function useAutoEffects({ isNewYear }: UseAutoEffectsProps): UseAutoEffectsReturn {
  const [activeEffects, setActiveEffects] = useState<string[]>([]);
  const [hasTriggeredAuto, setHasTriggeredAuto] = useState(false);

  // เริ่มเอฟเฟกต์อัตโนมัติเมื่อถึงปีใหม่ - แสดงพร้อมกันทั้งหมด
  useEffect(() => {
    if (isNewYear && !hasTriggeredAuto) {
      // ใช้ setTimeout เพื่อหลีกเลี่ยง cascading renders
      const timer = setTimeout(() => {
        setHasTriggeredAuto(true);
        // แสดงทั้ง 4 เอฟเฟคพร้อมกัน
        setActiveEffects(["p5fireworks", "confetti", "sparkles", "balloons"]);
      }, 0);

      // ปิดเอฟเฟคหลังจาก 60 วินาที (1 นาที) สำหรับเอฟเฟคปีใหม่
      const clearTimer = setTimeout(() => {
        setActiveEffects([]);
      }, 60000);

      return () => {
        clearTimeout(timer);
        clearTimeout(clearTimer);
      };
    }
  }, [isNewYear, hasTriggeredAuto]);

  const setActiveEffect = (effect: string | null) => {
    if (effect) {
      setActiveEffects([effect]);
      
      // ปิดเอฟเฟคหลังจาก 30 วินาที สำหรับการคลิกปุ่ม
      setTimeout(() => {
        setActiveEffects([]);
      }, 30000);
    } else {
      setActiveEffects([]);
    }
  };

  return {
    activeEffects,
    setActiveEffect,
    hasTriggeredAuto,
  };
}
