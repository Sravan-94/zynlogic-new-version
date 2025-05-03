import React from 'react';

type ProgressiveBlurProps = {
  className?: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
  blurIntensity?: number;
};

export function ProgressiveBlur({
  className = '',
  direction,
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  // Determine the gradient direction based on the direction prop
  const gradientDirection = {
    left: 'to right',
    right: 'to left',
    top: 'to bottom',
    bottom: 'to top',
  }[direction];

  // Calculate the blur amount based on intensity
  const blurAmount = 10 * blurIntensity;

  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(${gradientDirection}, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%)`,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
    />
  );
}
