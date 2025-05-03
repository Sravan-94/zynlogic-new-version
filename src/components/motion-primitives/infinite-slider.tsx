import React, { useRef, useEffect } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode[];
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover = 20,
  gap = 40,
  className = '',
}: InfiniteSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const inner = innerRef.current;
    
    if (!slider || !inner) return;
    
    let animationId: number;
    let xPos = 0;
    const baseSpeed = speed * 0.05;
    let currentSpeed = baseSpeed;
    let lastTimestamp: number;
    
    const updateAnimation = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Ensure smooth animation by using deltaTime
      const delta = currentSpeed * (deltaTime / 16.67); // 16.67ms is roughly 60fps
      xPos += delta;
      
      // Reset position when we've scrolled the width of the content
      if (xPos >= inner.clientWidth / 2) {
        xPos = 0;
      }
      
      inner.style.transform = `translateX(-${xPos}px)`;
      animationId = requestAnimationFrame(updateAnimation);
    };
    
    const handleMouseEnter = () => {
      currentSpeed = speedOnHover * 0.05;
    };
    
    const handleMouseLeave = () => {
      currentSpeed = baseSpeed;
    };
    
    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);
    
    animationId = requestAnimationFrame(updateAnimation);
    
    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed, speedOnHover]);

  return (
    <div ref={sliderRef} className={`overflow-hidden ${className}`}>
      <div
        ref={innerRef}
        className="flex w-max will-change-transform"
        style={{ gap: `${gap}px` }}
      >
        {/* Original set of items */}
        {children}
        {/* Duplicated set of items for seamless looping */}
        {children}
      </div>
    </div>
  );
}
