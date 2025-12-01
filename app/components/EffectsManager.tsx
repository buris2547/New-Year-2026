import P5Fireworks from "./P5Fireworks";
import ConfettiParticles from "./ConfettiParticles";
import Balloons from "./Balloons";
import Sparkles from "./Sparkles";

interface EffectsManagerProps {
  activeEffects: string[];
  hasTriggeredAuto: boolean;
}

export default function EffectsManager({
  activeEffects,
  hasTriggeredAuto,
}: EffectsManagerProps) {
  const noop = () => {};

  return (
    <>
      <ConfettiParticles 
        active={activeEffects.includes("confetti")} 
        onComplete={noop} 
      />
      
      <P5Fireworks 
        active={activeEffects.includes("p5fireworks")} 
        onComplete={noop} 
      />
      
      <Balloons 
        active={activeEffects.includes("balloons")} 
        onComplete={noop} 
      />
      
      <Sparkles 
        active={activeEffects.includes("sparkles")} 
        onComplete={noop} 
      />
    </>
  );
}
