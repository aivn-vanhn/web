"use client";

import { useState, useEffect, useRef } from "react";
import { BookOpen, Trophy, Heart, ChevronDown, Check } from "lucide-react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [counters, setCounters] = useState({
    students: 0,
    lessons: 0,
    languages: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setCounters((prev) => ({
        students: prev.students < 100 ? prev.students + 3 : 100,
        lessons: prev.lessons < 5000 ? prev.lessons + 150 : 5000,
        languages: prev.languages < 50 ? prev.languages + 2 : 50,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible]);

  const features = [
    {
      icon: BookOpen,
      emoji: "📚",
      title: "Học tập thông minh",
      subtitle: "AI cá nhân hóa",
      fullDesc:
        "AI thông minh giúp các bạn học theo cách riêng của mình. Mỗi bài học được tùy chỉnh dựa trên tốc độ và phong cách học của bạn.",
      color: "58CC02",
      bgGradient: "from-[#58CC02]/5 to-[#4CAF00]/5",
      lightBg: "bg-[#58CC02]/10",
      textColor: "text-[#58CC02]",
      borderColor: "border-[#58CC02]/30",
      borderColorActive: "border-[#58CC02]",
      ringColor: "ring-[#58CC02]/40",
      benefits: [
        "Tùy chỉnh theo tốc độ",
        "Phân tích tiến độ chi tiết",
        "Gợi ý thông minh",
      ],
    },
    {
      icon: Trophy,
      emoji: "🎮",
      title: "Vừa học vừa chơi",
      subtitle: "Gamification",
      fullDesc:
        "Học tập như chơi game! Kiếm XP, mở khóa badge, và cạnh tranh với bạn bè. Học tập trở nên vui vẻ và thú vị.",
      color: "FFD700",
      bgGradient: "from-[#FFD700]/5 to-[#FFC107]/5",
      lightBg: "bg-[#FFD700]/10",
      textColor: "text-[#FFD700]",
      borderColor: "border-[#FFD700]/30",
      borderColorActive: "border-[#FFD700]",
      ringColor: "ring-[#FFD700]/40",
      benefits: ["Kiếm XP & Badge", "Streak hàng ngày", "Leaderboard"],
    },
    {
      icon: Heart,
      emoji: "🤖",
      title: "AI luôn bên cạnh",
      subtitle: "24/7 Support",
      fullDesc:
        "Ken và Hana luôn sẵn sàng giúp đỡ. Hỏi bất cứ lúc nào, nhận giải thích chi tiết ngay lập tức.",
      color: "1F8FE8",
      bgGradient: "from-[#1F8FE8]/5 to-[#1565C0]/5",
      lightBg: "bg-[#1F8FE8]/10",
      textColor: "text-[#1F8FE8]",
      borderColor: "border-[#1F8FE8]/30",
      borderColorActive: "border-[#1F8FE8]",
      ringColor: "ring-[#1F8FE8]/40",
      benefits: ["Giải thích chi tiết", "Động viên tích cực", "Hỗ trợ 24/7"],
    },
  ];

  const stats = [
    {
      label: "Học sinh",
      value: counters.students,
      suffix: "K+",
      icon: "👥",
      color: "58CC02",
    },
    {
      label: "Bài học",
      value: counters.lessons,
      suffix: "",
      icon: "📚",
      color: "FFD700",
    },
    {
      label: "Ngôn ngữ",
      value: counters.languages,
      suffix: "+",
      icon: "🌍",
      color: "1F8FE8",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features-section"
      className="relative min-h-screen bg-gradient-to-b from-white via-[#F0F9E8]/50 to-white overflow-hidden py-16 md:py-32"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#58CC02]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1F8FE8]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 md:mb-32">
          {/* Emoji animation */}
          <div className="inline-block mb-8">
            <div className="flex gap-4 justify-center">
              <span
                className="text-5xl md:text-6xl animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                🎯
              </span>
              <span
                className="text-5xl md:text-6xl animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                🎮
              </span>
              <span
                className="text-5xl md:text-6xl animate-bounce"
                style={{ animationDelay: "0.4s" }}
              >
                🤖
              </span>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-black text-gray-900 mb-6 transition-all duration-700 leading-tight ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Học tập thông minh,
            <br />
            <span className="bg-gradient-to-r from-[#58CC02] via-[#1F8FE8] to-[#FFD700] bg-clip-text text-transparent">
              Tiến bộ nhanh chóng
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-100 font-medium ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Với AI cá nhân hóa, học tập trở nên vui vẻ, hiệu quả và phù hợp với
            bạn
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 md:mb-40 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const colorMap: { [key: string]: string } = {
              "58CC02": "from-[#58CC02] to-[#4CAF00]",
              FFD700: "from-[#FFD700] to-[#FFC107]",
              "1F8FE8": "from-[#1F8FE8] to-[#1565C0]",
            };

            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div
                    className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${
                      colorMap[stat.color]
                    } bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-bold uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-24 md:mb-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                  className="w-full text-left"
                >
                  <div
                    className={`bg-gradient-to-br ${
                      feature.bgGradient
                    } rounded-3xl p-8 md:p-10 shadow-lg transition-all duration-300 border-3 cursor-pointer ${
                      isExpanded
                        ? `${feature.borderColorActive} ring-4 ring-offset-2 ${feature.ringColor} shadow-2xl -translate-y-2`
                        : `${feature.borderColor} hover:shadow-xl hover:-translate-y-1`
                    }`}
                  >
                    {/* Top accent bar */}
                    <div
                      className="h-2 w-16 rounded-full mb-8 transition-all duration-300"
                      style={{
                        background: `linear-gradient(to right, #${feature.color}, #${feature.color}b3)`,
                      }}
                    ></div>

                    {/* Icon container */}
                    <div className="mb-8">
                      <div
                        className={`w-20 h-20 rounded-2xl ${
                          feature.lightBg
                        } flex items-center justify-center transition-all duration-300 ${
                          isExpanded ? "scale-110" : "scale-100"
                        }`}
                      >
                        <Icon
                          className="w-10 h-10"
                          style={{ color: `#${feature.color}` }}
                        />
                      </div>
                    </div>

                    {/* Emoji */}
                    <div
                      className={`text-5xl mb-6 transition-all duration-300 ${
                        isExpanded ? "scale-125" : "scale-100"
                      }`}
                    >
                      {feature.emoji}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
                      {feature.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className="text-sm font-bold uppercase tracking-widest mb-6"
                      style={{ color: `#${feature.color}` }}
                    >
                      {feature.subtitle}
                    </p>

                    {/* Expandable content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 text-base leading-relaxed mb-6 pb-6 border-b-2 border-gray-200">
                        {feature.fullDesc}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-4">
                        {feature.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3 text-sm text-gray-700"
                            style={{
                              animation: isExpanded
                                ? `slideIn 0.4s ease-out ${i * 80}ms forwards`
                                : "none",
                              opacity: isExpanded ? 1 : 0,
                            }}
                          >
                            <Check
                              className="w-5 h-5 flex-shrink-0 mt-0.5"
                              style={{ color: `#${feature.color}` }}
                            />
                            <span className="font-semibold text-gray-800">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t-2 border-gray-200">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                        {isExpanded ? "Ẩn chi tiết" : "Xem chi tiết"}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300`}
                        style={{
                          color: `#${feature.color}`,
                          transform: isExpanded
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
