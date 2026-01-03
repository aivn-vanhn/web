"use client";

import type { Topic } from "@/lib/topics";
import { cn } from "@/lib/utils";

interface TopicModalProps {
  isOpen: boolean;
  topic: Topic;
  onClose: () => void;
}

export function TopicModal({ isOpen, topic, onClose }: TopicModalProps) {
  if (!isOpen || !topic || !topic.theme) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-modal-fade-in" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full animate-modal-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 pb-6 pt-8 text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/images/giftbox.png"
              alt="Gift box"
              className="w-32 h-32 object-contain drop-shadow-lg animate-zoom-in"
              style={{ animationDelay: "0.15s", animationFillMode: "both" }}
            />
          </div>

          <h2
            className="text-2xl font-bold text-gray-800 mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Chúc mừng!
          </h2>

          <div
            className={cn("rounded-xl p-6 mb-6 border-2 animate-slide-up")}
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${topic.theme.gradientFrom}, ${topic.theme.gradientTo})`,
              borderColor: topic.theme.border,
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {topic.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{topic.description}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full h-12 rounded-xl font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md hover:shadow-lg animate-slide-up"
            style={{
              backgroundColor: "#00E2DB",
              animationDelay: "0.4s",
              animationFillMode: "both",
            }}
          >
            Thu thập
          </button>
        </div>
      </div>
    </div>
  );
}
