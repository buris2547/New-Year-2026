declare module '@rumess/react-flip-countdown' {
  import { ComponentType } from 'react';

  interface FlipCountdownProps {
    theme?: 'dark' | 'light';
    size?: 'small' | 'medium' | 'large' | 'extra-small';
    titlePosition?: 'top' | 'bottom';
    endAt?: string;
    endAtZero?: boolean;
    hideYear?: boolean;
    hideMonth?: boolean;
    hideDay?: boolean;
    hideHour?: boolean;
    hideMinute?: boolean;
    hideSecond?: boolean;
    dayTitle?: string;
    hourTitle?: string;
    minuteTitle?: string;
    secondTitle?: string;
    onTimeUp?: () => void;
  }

  const FlipCountdown: ComponentType<FlipCountdownProps>;
  export default FlipCountdown;
}
