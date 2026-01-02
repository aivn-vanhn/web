"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { GiftBox } from "@/components/gift-box/GiftBox";
import { generateRandomTopics, type Topic, TOPICS } from "@/lib/topics";
import { Button } from "@/components/ui/button";
import {
  RocketLaunchIcon,
  ArrowUUpLeftIcon,
  ArrowsClockwiseIcon,
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
    <div className="min-h-screen bg-[url('/images/bg-game-rule.svg')] bg-cover bg-center py-12 px-4 flex items-center justify-center">
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
  const shuffleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const highlightTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const highlightIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
    <div className="min-h-screen bg-[url('/images/bg-game-rule.svg')] bg-cover bg-center py-4 px-4 sm:py-6 md:py-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <div className="relative">
          <div className="absolute left-0 top-0 pt-2 sm:pt-3 md:pt-2 lg:pt-4">
            <Image
              src="/images/examdee.png"
              alt="Examdee Logo"
              width={120}
              height={48}
              className="h-6 sm:h-8 md:h-8 lg:h-12 w-auto object-contain ml-2 sm:ml-4 md:ml-4 lg:ml-8"
              priority
            />
          </div>
          <div className="absolute right-0 top-0 pt-2 sm:pt-3 md:pt-2 lg:pt-4">
            <Image
              src="/images/AIVN.png"
              alt="AIVN Logo"
              width={70}
              height={24}
              className="h-3 sm:h-4 md:h-5 lg:h-7 w-auto object-contain mr-2 sm:mr-4 md:mr-4 lg:mr-8"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-3 sm:mb-4 md:mb-4 pt-10 sm:pt-12 md:pt-10 lg:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1.5 sm:mb-2 md:mb-2 drop-shadow-lg">
              Explore Topics
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3 md:mb-3 font-semibold drop-shadow-md">
              {isStarted
                ? "Choose a gift box to discover a new topic!"
                : "Click Start to begin exploring!"}
            </p>
            {!hasStarted && (
              <Button
                onClick={handleStart}
                variant="primary"
                size="xl"
                className="text-xl sm:text-2xl md:text-2xl px-12 sm:px-16 md:px-16 py-6 sm:py-7 md:py-7 font-bold gap-2 sm:gap-3"
              >
                Start
                <RocketLaunchIcon
                  className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
                  weight="bold"
                />
              </Button>
            )}
          </div>

          {hasStarted && (
            <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
              <Button
                onClick={handleUndo}
                variant="secondary"
                size="lg"
                disabled={selectedCount === 0}
                className="px-10 sm:px-12 md:px-12 py-5 sm:py-6 md:py-6 text-lg sm:text-xl md:text-xl font-bold gap-2"
              >
                <ArrowUUpLeftIcon
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-9 md:h-9"
                  weight="bold"
                />
                Undo
              </Button>
              <Button
                onClick={handleReset}
                variant="secondary"
                size="lg"
                disabled={isShuffling}
                className="px-10 sm:px-12 md:px-12 py-5 sm:py-6 md:py-6 text-lg sm:text-xl md:text-xl font-bold gap-2"
              >
                <ArrowsClockwiseIcon
                  className="w-7 h-7 sm:w-9 sm:h-9 md:w-9 md:h-9"
                  weight="bold"
                />
                Reset
              </Button>
            </div>
          )}

          {hasStarted && hasValidTopics && (
            <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5 md:gap-5 lg:gap-6 mt-2 sm:mt-3 md:mt-3">
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
