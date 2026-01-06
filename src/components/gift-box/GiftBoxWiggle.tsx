"use client";

import { useEffect, useRef } from "react";

interface GiftBoxWiggleProps {
  src: string;
  alt: string;
  className?: string;
  scale?: number;
  maxRotate?: number;
  duration?: number;
}

const TRANSITION_DURATION = "0.3s";
const RESET_TRANSFORM = "scale(1) rotate(0deg)";

export function GiftBoxWiggle({
  src,
  alt,
  className = "",
  scale = 1.2,
  maxRotate = 20,
  duration = 1200,
}: GiftBoxWiggleProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number>(0);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!imgElement) return;

    const resetTransform = () => {
      imgElement.style.transition = `transform ${TRANSITION_DURATION} ease-out`;
      imgElement.style.transform = RESET_TRANSFORM;
    };

    const animate = (time: number) => {
      if (startRef.current === 0) {
        startRef.current = time;
      }
      const elapsed = time - startRef.current;

      if (elapsed >= duration) {
        resetTransform();
        frameRef.current = undefined;
        startRef.current = 0;
        return;
      }

      const progress = elapsed / duration;
      const deg = Math.sin(elapsed / 80) * maxRotate * (1 - progress);
      const sc =
        1 + Math.sin(elapsed / 100) * (scale - 1) * 0.3 * (1 - progress);

      imgElement.style.transition = "none";
      imgElement.style.transform = `scale(${sc}) rotate(${deg}deg)`;
      frameRef.current = requestAnimationFrame(animate);
    };

    startRef.current = 0;
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = undefined;
      }
      if (imgElement) {
        resetTransform();
      }
      startRef.current = 0;
    };
  }, [scale, maxRotate, duration]);

  return <img ref={imgRef} src={src} alt={alt} className={className} />;
}
