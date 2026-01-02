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

    const animate = (time: number) => {
      if (!startRef.current) startRef.current = time;
      const elapsed = time - startRef.current;

      if (elapsed >= duration) {
        imgElement.style.transform = "scale(1) rotate(0deg)";
        imgElement.style.transition = "transform 0.2s ease-out";
        return;
      }

      const progress = elapsed / duration;
      const deg = Math.sin(elapsed / 80) * maxRotate * (1 - progress);
      const sc =
        1 + Math.sin(elapsed / 100) * (scale - 1) * 0.3 * (1 - progress);
      imgElement.style.transform = `scale(${sc}) rotate(${deg}deg)`;
      imgElement.style.transition = "none";

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (imgElement) {
        imgElement.style.transform = "scale(1) rotate(0deg)";
        imgElement.style.transition = "";
      }
    };
  }, [scale, maxRotate, duration]);

  return <img ref={imgRef} src={src} alt={alt} className={className} />;
}
