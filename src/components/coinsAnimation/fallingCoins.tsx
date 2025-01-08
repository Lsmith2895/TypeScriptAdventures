import React from "react";

interface FallingCoinsProps {
  onAnimationEnd?: () => void;
  numCoins?: number;
}

export const FallingCoins: React.FC<FallingCoinsProps> = ({
  onAnimationEnd,
  numCoins = 60,
}) => {
  // Create an array [0..numCoins-1]
  const coinsArray = Array.from({ length: numCoins }, (_, i) => i);

  return (
    <div className="falling-coins" onAnimationEnd={onAnimationEnd}>
      {coinsArray.map((index) => {
        const left = Math.random() * 100; // random horizontal start [0..100%]
        const delay = Math.random(); // random animation delay [0..1s]
        const duration = 2 + Math.random() * 2; // random fall duration [2..4s]

        // Random amplitude for sideways drift (e.g. -30..30px)
        const waveAmplitude = (Math.random() - 0.5) * 60;

        return (
          <div
            className="coin"
            key={index}
            style={
              {
                // The coin container starts at some horizontal %
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                // Pass the random amplitude into a CSS variable
                // so the keyframe can read it.
                "--waveAmplitude": `${waveAmplitude}px`,
              } as React.CSSProperties
            }
          >
            <div className="coin-spin" />
          </div>
        );
      })}
    </div>
  );
};
