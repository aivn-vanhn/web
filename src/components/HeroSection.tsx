"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStartLearning = () => {
    window.open("https://examdee.ai-vietnam.vn", "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#F8FDFB] to-[#F0F9E8] overflow-hidden pt-32 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft animated blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#58CC02]/15 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-br from-[#1F8FE8]/12 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-[#FFD700]/8 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Animated lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#58CC02"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge with animation */}
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-[#58CC02]/20 shadow-sm hover:shadow-md hover:border-[#58CC02]/40 transition-all duration-500 group cursor-pointer ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Sparkles className="w-5 h-5 text-[#58CC02] group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-bold text-[#58CC02]">
                ✨ Hơn 100,000 học sinh đã tham gia
              </span>
            </div>

            {/* Main heading */}
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-7xl md:text-8xl font-black leading-tight">
                <span className="block text-gray-900">🎓 Học tập</span>
                <span className="block bg-gradient-to-r from-[#58CC02] via-[#1F8FE8] to-[#58CC02] bg-clip-text text-transparent">
                  Vui vẻ
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-xl text-gray-600 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              🌟 AI Vietnam - Nơi học tập thú vị với AI, giúp các bạn nhỏ học
              giỏi và vui vẻ mỗi ngày!
            </p>

            {/* Features with icons */}
            <div
              className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {[
                { icon: "⚡", text: "AI cá nhân hóa", color: "#58CC02" },
                { icon: "🎮", text: "Học vừa chơi", color: "#1F8FE8" },
                { icon: "🏆", text: "Kiếm điểm XP", color: "#FFD700" },
                { icon: "🤖", text: "Hỗ trợ 24/7", color: "#58CC02" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 hover:bg-white/80 hover:border-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                  style={{
                    borderLeftColor: feature.color,
                    borderLeftWidth: "3px",
                  }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <p className="text-sm font-bold text-gray-700">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button
                onClick={handleStartLearning}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#58CC02] to-[#4CAF00] text-white font-black rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF00] to-[#58CC02] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2">
                  🚀 Bắt đầu học ngay
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 bg-white/70 backdrop-blur-sm border-2 border-[#1F8FE8]/30 text-gray-900 font-black rounded-full hover:bg-white/90 hover:border-[#1F8FE8]/60 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                <span className="flex items-center justify-center gap-2">
                  🎮 Tìm hiểu thêm
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual - Ken & Hana */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-full">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#58CC02]/10 via-[#1F8FE8]/8 to-transparent rounded-3xl blur-2xl"></div>

              {/* Main card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/80 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#58CC02] via-[#1F8FE8] to-[#FFD700] rounded-t-3xl"></div>

                {/* Content */}
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#58CC02]/10 rounded-full mb-4">
                      <Zap className="w-4 h-4 text-[#58CC02]" />
                      <span className="text-xs font-bold text-[#58CC02]">
                        Tiến độ hôm nay
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900">
                      Bạn đã học được gì?
                    </h3>
                  </div>

                  {/* Mascots */}
                  <div className="flex items-center justify-center gap-8">
                    {/* Ken */}
                    <div className="relative group/mascot">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-[#58CC02]/20 rounded-2xl blur-lg opacity-0 group-hover/mascot:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-br from-[#FFD700]/15 to-[#58CC02]/10 rounded-2xl p-4 border border-[#FFD700]/30 group-hover/mascot:border-[#FFD700]/60 transition-all duration-300 shadow-md">
                        <Image
                          src="/images/ken.svg"
                          alt="Ken"
                          fill
                          className="object-contain p-2 group-hover/mascot:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="mt-3 text-center text-sm font-bold text-gray-700">
                        Ken 🤖
                      </p>
                    </div>

                    {/* Hana */}
                    <div className="relative group/mascot">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1F8FE8]/20 to-[#58CC02]/20 rounded-2xl blur-lg opacity-0 group-hover/mascot:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-br from-[#1F8FE8]/15 to-[#58CC02]/10 rounded-2xl p-4 border border-[#1F8FE8]/30 group-hover/mascot:border-[#1F8FE8]/60 transition-all duration-300 shadow-md">
                        <Image
                          src="/images/hana.png"
                          alt="Hana"
                          fill
                          className="object-contain p-2 group-hover/mascot:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="mt-3 text-center text-sm font-bold text-gray-700">
                        Hana 🎀
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    {[
                      {
                        label: "Bài học hoàn thành",
                        value: "12/20",
                        icon: "📚",
                      },
                      { label: "Streak hôm nay", value: "7 ngày", icon: "🔥" },
                      { label: "XP kiếm được", value: "450 XP", icon: "⭐" },
                    ].map((stat, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/60 hover:bg-white/80 hover:border-white transition-all duration-300"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{stat.icon}</span>
                          <span className="text-sm font-semibold text-gray-700">
                            {stat.label}
                          </span>
                        </div>
                        <span className="text-lg font-black text-[#58CC02]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-bold text-gray-700">
                        Mục tiêu hôm nay
                      </span>
                      <span className="text-sm font-bold text-[#58CC02]">
                        60%
                      </span>
                    </div>
                    <div className="w-full h-3 bg-gray-200/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#58CC02] to-[#4CAF00] rounded-full transition-all duration-500 shadow-md"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 bg-gradient-to-r from-[#58CC02] to-[#4CAF00] text-white font-black rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                    Tiếp tục học
                  </button>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#58CC02] rounded-2xl shadow-lg flex items-center justify-center text-3xl animate-bounce border border-white/60">
                🎯
              </div>

              <div
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-[#1F8FE8] to-[#58CC02] rounded-2xl shadow-lg flex items-center justify-center text-3xl animate-bounce border border-white/60"
                style={{ animationDelay: "0.5s" }}
              >
                🚀
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
