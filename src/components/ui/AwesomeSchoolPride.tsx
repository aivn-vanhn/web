"use client";

import { useEffect, useRef, useCallback } from "react";
import confetti from "canvas-confetti";

interface AwesomeSchoolPrideProps {
  duration?: number;
  colors?: string[];
  particleCount?: number;
  angleLeft?: number;
  angleRight?: number;
  spread?: number;
  zIndex?: number;
  isPlaying?: boolean;
  className?: string;
  scale?: number;
}

export const AwesomeSchoolPride = ({
  duration = 15000,
  colors = ["#bb0000", "#ffffff"],
  particleCount = 2,
  angleLeft = 60,
  angleRight = 120,
  spread = 55,
  zIndex = 9999,
  isPlaying = false,
  className = "",
  scale = 1,
}: AwesomeSchoolPrideProps) => {
  const frameRef = useRef<number | undefined>(undefined);
  const endTimeRef = useRef<number | undefined>(undefined);

  const stopAnimation = useCallback(() => {
    if (frameRef.current !== undefined) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
    }
  }, []);

  const startAnimation = useCallback(() => {
    endTimeRef.current = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount,
        angle: angleLeft,
        spread,
        origin: { x: 0 },
        colors,
        zIndex,
        scalar: scale,
      });

      confetti({
        particleCount,
        angle: angleRight,
        spread,
        origin: { x: 1 },
        colors,
        zIndex,
        scalar: scale,
      });

      if (endTimeRef.current && Date.now() < endTimeRef.current) {
        frameRef.current = requestAnimationFrame(frame);
      }
    };

    frame();
  }, [
    duration,
    particleCount,
    angleLeft,
    angleRight,
    spread,
    colors,
    zIndex,
    scale,
  ]);

  useEffect(() => {
    if (isPlaying) {
      startAnimation();
    } else {
      stopAnimation();
    }

    return () => {
      stopAnimation();
    };
  }, [isPlaying, startAnimation, stopAnimation]);

  return <div className={className} />;
};
