interface EffectButtonsProps {
  onEffectClick: (effect: string) => void;
}

export default function EffectButtons({ onEffectClick }: EffectButtonsProps) {
  return (
    <div className="mt-16 space-y-4 animate-fade-in-up">
      <p className="text-2xl md:text-3xl text-yellow-200 font-bold animate-bounce">
        ✨ ขอให้มีความสุขมากๆ ในปีใหม่ ✨
      </p>
      <p className="text-base md:text-lg text-gray-300 mb-4">
        คลิกที่ไอคอนเพื่อดูเอฟเฟกต์พิเศษ! 👇
      </p>
      <div className="flex justify-center gap-4 md:gap-6">
        <button
          onClick={() => onEffectClick("p5fireworks")}
          className="text-4xl md:text-5xl hover:scale-125 transition-transform duration-300 cursor-pointer animate-wiggle animation-delay-0 hover:drop-shadow-2xl"
          title="ดอกพลุ (p5.js)"
        >
          🎇
        </button>
        <button
          onClick={() => onEffectClick("confetti")}
          className="text-4xl md:text-5xl hover:scale-125 transition-transform duration-300 cursor-pointer animate-wiggle animation-delay-200 hover:drop-shadow-2xl"
          title="Confetti"
        >
          🎉
        </button>
        <button
          onClick={() => onEffectClick("sparkles")}
          className="text-4xl md:text-5xl hover:scale-125 transition-transform duration-300 cursor-pointer animate-wiggle animation-delay-400 hover:drop-shadow-2xl"
          title="ดาวระยิบระยับ"
        >
          🎊
        </button>
        <button
          onClick={() => onEffectClick("balloons")}
          className="text-4xl md:text-5xl hover:scale-125 transition-transform duration-300 cursor-pointer animate-wiggle animation-delay-600 hover:drop-shadow-2xl"
          title="ลูกโป่ง"
        >
          🎈
        </button>
      </div>
    </div>
  );
}
