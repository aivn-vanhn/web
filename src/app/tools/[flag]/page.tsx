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
  ArrowsOutIcon,
  ArrowsInIcon,
} from "@phosphor-icons/react";

const SHUFFLE_STEPS = 5;
const SHUFFLE_DURATION = 1000;
const TOPICS_COUNT = 16;
const HIGHLIGHT_DELAY = 5000;
const HIGHLIGHT_INTERVAL = 2000;

interface FullscreenElement extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

interface FullscreenDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  mozCancelFullScreen?: () => Promise<void>;
  msExitFullscreen?: () => Promise<void>;
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
}

type TopicWithSelected = Topic & {
  selected: boolean;
  initialIndex: number;
  currentIndex: number;
};

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
  const [isFullscreen, setIsFullscreen] = useState(false);
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
        initialIndex: originalIndex >= 0 ? originalIndex : index % TOPICS_COUNT,
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

  const enterFullscreen = useCallback(async () => {
    try {
      const element = document.documentElement as FullscreenElement;
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      }
    } catch (error) {
      console.error("Error entering fullscreen:", error);
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      const doc = document as FullscreenDocument;
      if (doc.exitFullscreen) {
        await doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      }
    } catch (error) {
      console.error("Error exiting fullscreen:", error);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as FullscreenDocument;
      const isCurrentlyFullscreen = !!(
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFullscreen);
    };

    const events = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
    ];
    events.forEach((event) => {
      document.addEventListener(event, handleFullscreenChange);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFullscreenChange);
      });
    };
  }, []);

  const handleStart = useCallback(async () => {
    const initialTopics =
      topics.length === TOPICS_COUNT ? topics : initializeTopics();
    const topicsWithIndexes = initialTopics.map((topic, index) => ({
      ...topic,
      initialIndex: topic.initialIndex ?? index,
      currentIndex: index,
    }));

    setTopics(topicsWithIndexes);
    setHasStarted(true);

    await enterFullscreen();
    await new Promise((resolve) => setTimeout(resolve, 100));

    setIsShuffling(true);

    let shuffleCount = 0;
    const interval = SHUFFLE_DURATION / SHUFFLE_STEPS;

    shuffleIntervalRef.current = setInterval(() => {
      shuffleCount++;
      const isLastShuffle = shuffleCount >= SHUFFLE_STEPS;

      setTopics((prev) => {
        if (isLastShuffle) {
          return prev.map((topic) => ({
            ...topic,
            selected: false,
            currentIndex: topic.initialIndex,
          }));
        }

        const shuffledIndices = prev.map((_, i) => i);
        for (let i = shuffledIndices.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledIndices[i], shuffledIndices[j]] = [
            shuffledIndices[j],
            shuffledIndices[i],
          ];
        }

        return prev.map((topic) => ({
          ...topic,
          selected: false,
          currentIndex: shuffledIndices[topic.initialIndex],
        }));
      });

      if (isLastShuffle) {
        cleanupInterval();
        setIsShuffling(false);
      }
    }, interval);
  }, [cleanupInterval, topics, initializeTopics, enterFullscreen]);

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

    highlightTimeoutRef.current = setTimeout(() => {
      showRandomWiggle();
      highlightIntervalRef.current = setInterval(() => {
        showRandomWiggle();
      }, HIGHLIGHT_INTERVAL);
    }, HIGHLIGHT_DELAY);

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
      return prev.map((topic) =>
        topic.id === lastSelectedTopic.id
          ? { ...topic, selected: false }
          : topic
      );
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

  const handleToggleFullscreen = useCallback(async () => {
    const doc = document as FullscreenDocument;
    const isCurrentlyFullscreen = !!(
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    );

    if (isCurrentlyFullscreen) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  }, [enterFullscreen, exitFullscreen]);

  if (flag !== "random") {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-[url('/images/background.png')] bg-cover bg-center py-4 px-4 sm:py-6 md:py-4 md:px-8 lg:px-8 relative">
      <div className="relative z-10">
        <div className="relative z-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 pt-4 sm:pt-5 md:pt-4 lg:pt-6 z-30 flex flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
            <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <img
                src="/images/logo_so.png"
                alt="Sở Giáo dục Logo"
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
              <img
                src="/images/examdee.png"
                alt="Examdee Logo"
                className="h-6 sm:h-8 md:h-12 lg:h-12 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <img
                src="/images/logo_bm.png"
                alt="Binh Minh Logo"
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
              <img
                src="/images/aivn_logo.svg"
                alt="AIVN Logo"
                className="h-6 sm:h-7 md:h-11 lg:h-10 w-auto object-contain"
              />
            </div>
          </div>
          <div
            ref={menuRef}
            className="absolute top-4 sm:top-5 md:top-4 lg:top-6 right-4 sm:right-6 md:right-8 lg:right-8 z-30"
          >
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
                  <>
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
                    <button
                      onClick={() => {
                        handleToggleFullscreen();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-5 py-3 text-left hover:bg-gray-50 flex items-center gap-3 text-gray-900 font-semibold text-base sm:text-lg border-t border-gray-200"
                    >
                      {isFullscreen ? (
                        <ArrowsInIcon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          weight="bold"
                        />
                      ) : (
                        <ArrowsOutIcon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          weight="bold"
                        />
                      )}
                      <span>
                        {isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
                      </span>
                    </button>
                  </>
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
                    <button
                      onClick={() => {
                        handleToggleFullscreen();
                        setIsMenuOpen(false);
                      }}
                      disabled={isShuffling}
                      className="w-full px-5 py-3 text-left hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 text-gray-900 font-semibold text-base sm:text-lg border-t border-gray-200"
                    >
                      {isFullscreen ? (
                        <ArrowsInIcon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          weight="bold"
                        />
                      ) : (
                        <ArrowsOutIcon
                          className="w-5 h-5 sm:w-6 sm:h-6"
                          weight="bold"
                        />
                      )}
                      <span>
                        {isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
                      </span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 pt-20 sm:pt-24 md:pt-48 lg:pt-52 xl:pt-56 mx-auto">
            <p className="text-base sm:text-lg md:text-lg lg:text-2xl xl:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] whitespace-nowrap leading-normal px-4 sm:px-6 md:px-8">
              BỐC THĂM CHỦ ĐỀ PHẦN 3: PLEASE SPEAK - THUYẾT TRÌNH TIẾNG ANH
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.9)] whitespace-nowrap leading-normal px-4 sm:px-6 md:px-8">
              Ngày hội Tiếng Anh STEM Robotics
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] whitespace-nowrap leading-normal px-4 sm:px-6 md:px-8">
              CẤP TIỂU HỌC, NĂM HỌC 2025 - 2026
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-6 lg:mb-12 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] whitespace-nowrap leading-normal px-4 sm:px-6 md:px-8">
              VÒNG CHUNG KHẢO
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
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
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
                  boxNumber={topic.initialIndex + 1}
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
