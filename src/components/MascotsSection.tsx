"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function MascotsSection() {
  const [currentKenCostume, setCurrentKenCostume] = useState(0);
  const [currentHanaCostume, setCurrentHanaCostume] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const kenCostumes = [
    {
      url: "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/82d013e0-aff3-4eab-add1-ae8ba3a0d29c-Characters%253DKen%252C%2520Custome%253DStrange.png",
      name: "Strange",
    },
    {
      url: "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/2ce4ffbc-31f7-4ebf-b92b-d72be9111d59-Characters%253DKen%252C%2520Custome%253DOptimus.png",
      name: "Optimus",
    },
    {
      url: "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/df902946-b930-4ad6-9ada-6b062a972ef6-Characters%253DKen%252C%2520Custome%253DBee.png",
      name: "Bee",
    },
  ];

  const hanaCostumes = [
    {
      url: "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/2743a948-7632-4cf5-a12a-75fa40ee4ada-Characters%253DHana%252C%2520Custome%253DWingx.png",
      name: "Wingx",
    },
    {
      url: "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/f4ffb716-b279-4061-89fd-ed2dc94fdadc-Characters%253DHana%252C%2520Custome%253DPrincess.png",
      name: "Princess",
    },
    {
      url: "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/e162bafa-97e6-4a0c-8f2c-e631e79e491a-Characters%253DHana%252C%2520Custome%253DKitty.png",
      name: "Kitty",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate Ken's costumes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKenCostume((prev) => (prev + 1) % kenCostumes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [kenCostumes.length]);

  // Auto-rotate Hana's costumes every 4 seconds (with offset)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHanaCostume((prev) => (prev + 1) % hanaCostumes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hanaCostumes.length]);

  const handlePrevKen = () => {
    setCurrentKenCostume((prev) =>
      prev === 0 ? kenCostumes.length - 1 : prev - 1
    );
  };

  const handleNextKen = () => {
    setCurrentKenCostume((prev) => (prev + 1) % kenCostumes.length);
  };

  const handlePrevHana = () => {
    setCurrentHanaCostume((prev) =>
      prev === 0 ? hanaCostumes.length - 1 : prev - 1
    );
  };

  const handleNextHana = () => {
    setCurrentHanaCostume((prev) => (prev + 1) % hanaCostumes.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#F8FDFB] to-[#F0F9E8] overflow-hidden py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#58CC02]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#1F8FE8]/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-[#58CC02]/20 mb-6">
            <Sparkles className="w-5 h-5 text-[#58CC02]" />
            <span className="text-sm font-bold text-[#58CC02]">
              Gặp gỡ bạn AI của chúng ta
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-gray-900">🤖 Ken & Hana</span>
            <span className="block bg-gradient-to-r from-[#58CC02] via-[#1F8FE8] to-[#58CC02] bg-clip-text text-transparent">
              Bạn AI của bạn
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ken và Hana - 2 bạn AI siêu thông minh và vui vẻ, luôn sẵn sàng giúp
            đỡ các bạn nhỏ học tập mỗi ngày!
          </p>
        </div>

        {/* Mascots Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Ken Card */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="group relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/15 to-[#58CC02]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Top gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFD700] via-[#58CC02] to-transparent rounded-t-3xl"></div>

                {/* Costume display */}
                <div className="relative mb-8">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-[#FFD700]/10 to-[#58CC02]/5 rounded-2xl overflow-hidden border border-[#FFD700]/20 group-hover:border-[#FFD700]/40 transition-all duration-300">
                    {kenCostumes.map((costume, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ${
                          currentKenCostume === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        <Image
                          src={costume.url}
                          alt={`Ken - ${costume.name}`}
                          fill
                          className="object-contain p-4 drop-shadow-2xl"
                          priority={index === 0}
                        />
                      </div>
                    ))}

                    {/* Navigation buttons */}
                    <button
                      onClick={handlePrevKen}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#58CC02]" />
                    </button>

                    <button
                      onClick={handleNextKen}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5 text-[#58CC02]" />
                    </button>
                  </div>

                  {/* Costume name badge */}
                  <div className="mt-4 text-center">
                    <span className="inline-block px-4 py-2 bg-[#FFD700]/15 border border-[#FFD700]/30 rounded-full text-sm font-bold text-[#58CC02]">
                      {kenCostumes[currentKenCostume].name}
                    </span>
                  </div>
                </div>

                {/* Costume indicator dots */}
                <div className="flex justify-center gap-3 mb-8">
                  {kenCostumes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentKenCostume(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentKenCostume === index
                          ? "w-8 h-3 bg-gradient-to-r from-[#FFD700] to-[#58CC02]"
                          : "w-3 h-3 bg-[#FFD700]/30 hover:bg-[#FFD700]/60"
                      }`}
                      aria-label={`Switch to Ken costume ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-gray-900">🤖 Ken</h3>

                  <p className="text-lg font-bold bg-gradient-to-r from-[#FFD700] to-[#58CC02] bg-clip-text text-transparent">
                    Bạn AI siêu thông minh
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Ken là bạn AI rất thông minh và vui vẻ! Bạn ấy luôn sẵn sàng
                    trả lời mọi câu hỏi và giúp các bạn học tập. Ken biết rất
                    nhiều điều thú vị và sẽ làm cho việc học trở nên vui vẻ hơn!
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {[
                      "⚡ Nhanh nhạy",
                      "🧠 Thông minh",
                      "😄 Vui vẻ",
                      "🎯 Chính xác",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-lg text-sm font-semibold text-gray-700 hover:bg-[#FFD700]/15 transition-colors"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hana Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="group relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F8FE8]/15 to-[#58CC02]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/80 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Top gradient border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1F8FE8] via-[#58CC02] to-transparent rounded-t-3xl"></div>

                {/* Costume display */}
                <div className="relative mb-8">
                  <div className="relative w-full aspect-square bg-gradient-to-br from-[#1F8FE8]/10 to-[#58CC02]/5 rounded-2xl overflow-hidden border border-[#1F8FE8]/20 group-hover:border-[#1F8FE8]/40 transition-all duration-300">
                    {hanaCostumes.map((costume, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ${
                          currentHanaCostume === index
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        }`}
                      >
                        <Image
                          src={costume.url}
                          alt={`Hana - ${costume.name}`}
                          fill
                          className="object-contain p-4 drop-shadow-2xl"
                          priority={index === 0}
                        />
                      </div>
                    ))}

                    {/* Navigation buttons */}
                    <button
                      onClick={handlePrevHana}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#1F8FE8]" />
                    </button>

                    <button
                      onClick={handleNextHana}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <ChevronRight className="w-5 h-5 text-[#1F8FE8]" />
                    </button>
                  </div>

                  {/* Costume name badge */}
                  <div className="mt-4 text-center">
                    <span className="inline-block px-4 py-2 bg-[#1F8FE8]/15 border border-[#1F8FE8]/30 rounded-full text-sm font-bold text-[#1F8FE8]">
                      {hanaCostumes[currentHanaCostume].name}
                    </span>
                  </div>
                </div>

                {/* Costume indicator dots */}
                <div className="flex justify-center gap-3 mb-8">
                  {hanaCostumes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHanaCostume(index)}
                      className={`transition-all duration-300 rounded-full ${
                        currentHanaCostume === index
                          ? "w-8 h-3 bg-gradient-to-r from-[#1F8FE8] to-[#58CC02]"
                          : "w-3 h-3 bg-[#1F8FE8]/30 hover:bg-[#1F8FE8]/60"
                      }`}
                      aria-label={`Switch to Hana costume ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-4xl font-black text-gray-900">👧 Hana</h3>

                  <p className="text-lg font-bold bg-gradient-to-r from-[#1F8FE8] to-[#58CC02] bg-clip-text text-transparent">
                    Bạn AI vui vẻ
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    Hana là bạn AI rất vui vẻ và thân thiện! Bạn ấy sẽ giúp các
                    bạn lập kế hoạch học tập và theo dõi tiến độ. Hana luôn
                    khuyến khích và động viên các bạn học tập mỗi ngày!
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {[
                      "💪 Động viên",
                      "📊 Theo dõi",
                      "🎉 Vui vẻ",
                      "❤️ Thân thiện",
                    ].map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#1F8FE8]/10 border border-[#1F8FE8]/20 rounded-lg text-sm font-semibold text-gray-700 hover:bg-[#1F8FE8]/15 transition-colors"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
