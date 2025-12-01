"use client";

import { useEffect } from "react";

interface BalloonsProps {
  active: boolean;
  onComplete: () => void;
}

export default function Balloons({ active, onComplete }: BalloonsProps) {
  useEffect(() => {
    if (!active) return;

    const initBalloons = async () => {
      const { balloons } = await import("balloons-js");
      
      // เรียกใช้ balloons effect แบบไม่ await เพื่อให้ทำงานพร้อมกับเอฟเฟคอื่น
      balloons();
    };

    // เรียกใช้ทันทีโดยไม่รอ
    initBalloons();

    // Cleanup: ถ้ายังไม่เสร็จแต่ component ถูก unmount
    return () => {
      // balloons-js จะลบ elements เองเมื่อ animation เสร็จ
      const balloonsContainer = document.querySelector("balloons");
      if (balloonsContainer) {
        balloonsContainer.remove();
      }
    };
  }, [active, onComplete]);

  if (!active) return null;

  return null;
}
