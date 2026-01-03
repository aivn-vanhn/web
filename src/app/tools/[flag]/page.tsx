"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { GiftBox } from "@/components/gift-box/GiftBox";
import { generateRandomTopics, type Topic, TOPICS } from "@/lib/topics";
import { Button } from "@/components/ui/button";
import {
  RocketLaunchIcon,
  ArrowUUpLeftIcon,
  ArrowsClockwiseIcon,
  DotsThreeVerticalIcon,
} from "@phosphor-icons/react";

const SHUFFLE_STEPS = 5;
const SHUFFLE_DURATION = 1000;
const TOPICS_COUNT = 16;

type TopicWithSelected = Topic & {
  selected: boolean;
  initialIndex: number;
  currentIndex: number;
};

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center py-12 px-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Not Found
        </h1>
        <Button
          onClick={() => router.push("/tools/random")}
          variant="primary"
          size="lg"
          className="text-lg px-8 py-6 font-bold"
        >
          Go to Random
        </Button>
      </div>
    </div>
  );
}

export default function ToolsPage() {
  const params = useParams();
  const flag = params.flag as string;

  const [isShuffling, setIsShuffling] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [topics, setTopics] = useState<TopicWithSelected[]>([]);
  const [highlightedBoxId, setHighlightedBoxId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shuffleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const highlightTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const highlightIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isStarted = !isShuffling && hasStarted;
  const selectedCount = topics.filter((t) => t?.selected).length;
  const hasValidTopics = topics.length === TOPICS_COUNT;

  const cleanupInterval = useCallback(() => {
    if (shuffleIntervalRef.current) {
      clearInterval(shuffleIntervalRef.current);
      shuffleIntervalRef.current = null;
    }
  }, []);

  const cleanupHighlightTimeout = useCallback(() => {
    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
      highlightTimeoutRef.current = null;
    }
    if (highlightIntervalRef.current) {
      clearInterval(highlightIntervalRef.current);
      highlightIntervalRef.current = null;
    }
  }, []);

  const initializeTopics = useCallback(() => {
    const initialTopics = generateRandomTopics(flag, TOPICS_COUNT);
    return initialTopics.map((topic, index) => {
      const originalIndex = TOPICS.findIndex((t) => t.id === topic.id);
      return {
        ...topic,
        selected: false,
        initialIndex: originalIndex >= 0 ? originalIndex : index,
        currentIndex: index,
      };
    });
  }, [flag]);

  useEffect(() => {
    if (flag === "random") {
      setTopics(initializeTopics());
    }
    return () => {
      cleanupInterval();
      cleanupHighlightTimeout();
    };
  }, [flag, cleanupInterval, cleanupHighlightTimeout, initializeTopics]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleStart = useCallback(() => {
    const initialTopics =
      topics.length === TOPICS_COUNT ? topics : initializeTopics();
    const topicsWithIndexes = initialTopics.map((topic, index) => ({
      ...topic,
      initialIndex: topic.initialIndex ?? index,
      currentIndex: index,
    }));

    setTopics(topicsWithIndexes);
    setHasStarted(true);
    setIsShuffling(true);

    let shuffleCount = 0;
    const interval = SHUFFLE_DURATION / SHUFFLE_STEPS;

    shuffleIntervalRef.current = setInterval(() => {
      shuffleCount++;
      setTopics((prev) => {
        const shuffled = shuffleArray(prev);
        const newPositionMap = new Map(
          shuffled.map((topic, index) => [topic.id, index])
        );

        return prev.map((topic) => ({
          ...topic,
          selected: false,
          currentIndex: newPositionMap.get(topic.id) ?? topic.currentIndex,
        }));
      });

      if (shuffleCount >= SHUFFLE_STEPS) {
        cleanupInterval();
        setIsShuffling(false);
      }
    }, interval);
  }, [cleanupInterval, topics, initializeTopics]);

  // Show random gift box wiggle after 5s, then every 2s if user hasn't selected any box
  useEffect(() => {
    if (!isStarted || isShuffling || selectedCount > 0) {
      cleanupHighlightTimeout();
      setHighlightedBoxId(null);
      return;
    }

    const showRandomWiggle = () => {
      const unselectedTopics = topics.filter((t) => !t.selected);
      if (unselectedTopics.length > 0) {
        const randomTopic =
          unselectedTopics[Math.floor(Math.random() * unselectedTopics.length)];
        setHighlightedBoxId(randomTopic.id);
      }
    };

    // First timeout: 5s
    highlightTimeoutRef.current = setTimeout(() => {
      showRandomWiggle();

      // Then set interval: every 2s
      highlightIntervalRef.current = setInterval(() => {
        showRandomWiggle();
      }, 2000);
    }, 5000);

    return () => {
      cleanupHighlightTimeout();
    };
  }, [isStarted, isShuffling, selectedCount, topics, cleanupHighlightTimeout]);

  const handleBoxClick = useCallback(
    (topic: TopicWithSelected) => {
      if (!isStarted || !topic.id || topic.selected) return;

      setTopics((prev) =>
        prev.map((t) => (t.id === topic.id ? { ...t, selected: true } : t))
      );
      setHighlightedBoxId(null);
      cleanupHighlightTimeout();
    },
    [isStarted, cleanupHighlightTimeout]
  );

  const handleUndo = useCallback(() => {
    setTopics((prev) => {
      const selectedTopics = prev.filter((t) => t.selected);
      if (selectedTopics.length === 0) return prev;

      const lastSelectedTopic = selectedTopics[selectedTopics.length - 1];
      const unselectedTopics = prev
        .filter((t) => !t.selected)
        .concat({ ...lastSelectedTopic, selected: false });

      const shuffledUnselected = shuffleArray(unselectedTopics);
      let shuffledIndex = 0;

      return prev.map((topic, index) => {
        if (topic.selected && topic.id !== lastSelectedTopic.id) {
          return { ...topic, currentIndex: index };
        }
        if (shuffledIndex < shuffledUnselected.length) {
          return {
            ...shuffledUnselected[shuffledIndex++],
            currentIndex: index,
          };
        }
        return topic;
      });
    });
  }, []);

  const handleReset = useCallback(() => {
    setIsShuffling(false);
    setHasStarted(false);
    setTopics(initializeTopics());
    setHighlightedBoxId(null);
    cleanupInterval();
    cleanupHighlightTimeout();
  }, [cleanupInterval, cleanupHighlightTimeout, initializeTopics]);

  if (flag !== "random") {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center py-4 px-4 sm:py-6 md:py-4 md:px-6 lg:px-8 relative">
      <div className="relative z-10">
        <div className="relative z-20">
          <div className="absolute left-0 top-0 pt-4 sm:pt-5 md:pt-4 lg:pt-6 z-30">
            <img
              src="/images/examdee.png"
              alt="Examdee Logo"
              className="h-6 sm:h-8 md:h-9 lg:h-12 w-auto object-contain ml-4 sm:ml-6 md:ml-6 lg:ml-8"
            />
          </div>
          <div className="absolute right-0 top-0 pt-4 sm:pt-5 md:pt-4 lg:pt-6 z-30 mr-4 sm:mr-6 md:mr-6 lg:mr-8 flex items-center gap-3 sm:gap-4">
            <img
              src="/images/aivn_logo.svg"
              alt="AIVN Logo"
              className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto object-contain"
            />
            <div ref={menuRef} className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 sm:p-2.5 rounded-lg bg-white/15 hover:bg-white/25 transition-colors"
                aria-label="Menu"
              >
                <DotsThreeVerticalIcon
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  weight="bold"
                />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 sm:w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                  {!hasStarted ? (
                    <button
                      onClick={() => {
                        handleStart();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-900 font-semibold text-base sm:text-lg"
                    >
                      <RocketLaunchIcon
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        weight="bold"
                      />
                      <span>Bắt đầu</span>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          handleUndo();
                          setIsMenuOpen(false);
                        }}
                        disabled={selectedCount === 0}
                        className="w-full px-5 py-3 text-left hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-gray-900 font-semibold text-base sm:text-lg"
                      >
                        <ArrowUUpLeftIcon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          weight="bold"
                        />
                        <span>Hoàn tác</span>
                      </button>
                      <button
                        onClick={() => {
                          handleReset();
                          setIsMenuOpen(false);
                        }}
                        disabled={isShuffling}
                        className="w-full px-5 py-3 text-left hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-gray-900 font-semibold text-base sm:text-lg border-t border-gray-200"
                      >
                        <ArrowsClockwiseIcon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          weight="bold"
                        />
                        <span>Đặt lại</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-14 pt-20 sm:pt-24 md:pt-22 lg:pt-24">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 md:mb-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] whitespace-nowrap leading-normal">
              BỐC THĂM CHỦ ĐỀ THUYẾT TRÌNH
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-10 sm:mb-12 md:mb-14 font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
              PHẦN 3: THUYẾT TRÌNH TIẾNG ANH
            </p>
            {!hasStarted && (
              <Button
                onClick={handleStart}
                variant="primary"
                size="xl"
                className="text-xl sm:text-2xl md:text-3xl px-14 sm:px-16 md:px-20 py-7 sm:py-8 md:py-9 font-extrabold gap-4 shadow-lg"
              >
                Bắt đầu
                <RocketLaunchIcon
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11"
                  weight="bold"
                />
              </Button>
            )}
          </div>

          {hasStarted && hasValidTopics && (
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
              {topics.map((topic) => (
                <GiftBox
                  key={topic.id}
                  topic={topic}
                  isOpened={topic.selected}
                  isStarted={isStarted}
                  initialIndex={topic.initialIndex}
                  currentIndex={topic.currentIndex}
                  isShuffling={isShuffling}
                  isHighlighted={highlightedBoxId === topic.id}
                  onClick={() => handleBoxClick(topic)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
