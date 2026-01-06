"use client";

import { cn } from "@/lib/utils";
import type { Topic } from "@/lib/topics";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GiftBoxWiggle } from "./GiftBoxWiggle";
import { useEffect, useRef } from "react";

function getGridPosition(index: number, cols: number) {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return { row, col };
}

function getPixelPosition(
  row: number,
  col: number,
  itemWidth: number,
  itemHeight: number,
  gap: number
) {
  const x = col * (itemWidth + gap);
  const y = row * (itemHeight + gap);
  return { x, y };
}

interface GiftBoxProps {
  topic: Topic;
  isOpened: boolean;
  isStarted: boolean;
  initialIndex: number;
  currentIndex: number;
  isShuffling: boolean;
  isHighlighted?: boolean;
  boxNumber: number;
  onClick: () => void;
}

export function GiftBox({
  topic,
  isOpened,
  isStarted,
  initialIndex,
  currentIndex,
  isShuffling,
  isHighlighted = false,
  boxNumber,
  onClick,
}: GiftBoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | undefined>(undefined);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const gridContainer = containerRef.current.closest(
      ".grid"
    ) as HTMLElement | null;
    if (!gridContainer) return;

    if (!isShuffling) {
      containerRef.current.style.transform = "";
      containerRef.current.style.boxShadow = "";
      containerRef.current.style.outline = "";
      containerRef.current.style.transition =
        "transform 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)";
      return;
    }

    const width = window.innerWidth;
    const cols = width >= 768 ? 4 : width >= 640 ? 3 : 2;

    const computedStyle = window.getComputedStyle(gridContainer);
    const gap = parseFloat(computedStyle.gap) || 16;

    const gridItems = Array.from(gridContainer.children) as HTMLElement[];
    if (gridItems.length === 0) return;

    const firstItem = gridItems[0];
    const { width: itemWidth, height: itemHeight } =
      firstItem.getBoundingClientRect();

    const initialPos = getGridPosition(initialIndex, cols);
    const targetPos = getGridPosition(currentIndex, cols);

    const initialPixel = getPixelPosition(
      initialPos.row,
      initialPos.col,
      itemWidth,
      itemHeight,
      gap
    );
    const targetPixel = getPixelPosition(
      targetPos.row,
      targetPos.col,
      itemWidth,
      itemHeight,
      gap
    );

    const offsetX = targetPixel.x - initialPixel.x;
    const offsetY = targetPixel.y - initialPixel.y;

    if (Math.abs(offsetX) > 0.1 || Math.abs(offsetY) > 0.1) {
      containerRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      containerRef.current.style.transition =
        "transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)";
      containerRef.current.style.boxShadow = "none";
      containerRef.current.style.outline = "none";
    }
  }, [initialIndex, currentIndex, isShuffling]);

  useEffect(() => {
    const numberElement = numberRef.current;
    if (!numberElement || !isHighlighted || isOpened) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (numberElement) {
        numberElement.style.transform =
          "translateY(0.25rem) scale(1) rotate(0deg)";
        numberElement.style.transition = "";
      }
      return;
    }

    const duration = 1000;
    const maxRotate = 15;
    const scale = 1.2;

    const animate = (time: number) => {
      if (!startRef.current) startRef.current = time;
      const elapsed = time - startRef.current;

      if (elapsed >= duration) {
        numberElement.style.transform =
          "translateY(0.25rem) scale(1) rotate(0deg)";
        numberElement.style.transition = "transform 0.2s ease-out";
        return;
      }

      const progress = elapsed / duration;
      const deg = Math.sin(elapsed / 80) * maxRotate * (1 - progress);
      const sc =
        1 + Math.sin(elapsed / 100) * (scale - 1) * 0.3 * (1 - progress);
      numberElement.style.transform = `translateY(0.25rem) scale(${sc}) rotate(${deg}deg)`;
      numberElement.style.transition = "none";

      frameRef.current = requestAnimationFrame(animate);
    };

    startRef.current = 0;
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (numberElement) {
        numberElement.style.transform =
          "translateY(0.25rem) scale(1) rotate(0deg)";
        numberElement.style.transition = "";
      }
    };
  }, [isHighlighted, isOpened]);

  if (!topic || !topic.theme) return null;

  return (
    <Dialog>
      <div
        ref={containerRef}
        className={cn(
          "relative flex items-center justify-center",
          isShuffling && "z-10"
        )}
        style={{
          order: currentIndex,
        }}
      >
        <DialogTrigger asChild>
          <button
            onClick={onClick}
            disabled={!isStarted || isOpened}
            className={cn(
              "relative w-full aspect-square max-w-[100px] sm:max-w-[120px] md:max-w-[130px] lg:max-w-[150px] mx-auto",
              (!isStarted || isOpened) && "opacity-60 cursor-default",
              isStarted &&
                !isOpened &&
                "hover:scale-110 active:scale-95 cursor-pointer"
            )}
          >
            <div
              className={cn(
                "relative w-full h-full flex items-center justify-center",
                isOpened && "opacity-50 grayscale"
              )}
            >
              {isHighlighted && !isOpened ? (
                <GiftBoxWiggle
                  src="/images/giftbox.png"
                  alt="Gift box"
                  className="w-full h-full object-contain"
                  scale={1.2}
                  maxRotate={15}
                  duration={1000}
                />
              ) : (
                <Image
                  src="/images/giftbox.png"
                  alt="Gift box"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <span
                  ref={numberRef}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  style={{
                    transform: "translateY(0.25rem) scale(1) rotate(0deg)",
                  }}
                >
                  {boxNumber}
                </span>
              </div>
            </div>

            {isOpened && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="bg-black/30 rounded-full p-2 animate-zoom-in">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-3xl animate-modal-zoom-in">
        <div className="relative flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 bg-white">
          <DialogTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center animate-slide-up drop-shadow-md">
            {topic.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Bạn đã khám phá chủ đề: {topic.title}
          </DialogDescription>
          {topic.questions && topic.questions.length > 0 && (
            <div
              className={cn(
                "rounded-xl p-6 sm:p-8 md:p-10 border-2 w-full animate-slide-up space-y-4"
              )}
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${topic.theme.gradientFrom}, ${topic.theme.gradientTo})`,
                borderColor: topic.theme.border,
              }}
            >
              {topic.questions.map((question, index) => (
                <p
                  key={index}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed text-center"
                >
                  {question}
                </p>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
