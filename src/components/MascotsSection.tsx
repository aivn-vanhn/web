"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function MascotsSection() {
  const [currentKenCostume, setCurrentKenCostume] = useState(0);
  const [currentHanaCostume, setCurrentHanaCostume] = useState(0);

  const kenCostumes = [
    "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/82d013e0-aff3-4eab-add1-ae8ba3a0d29c-Characters%253DKen%252C%2520Custome%253DStrange.png",
    "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/2ce4ffbc-31f7-4ebf-b92b-d72be9111d59-Characters%253DKen%252C%2520Custome%253DOptimus.png",
    "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/df902946-b930-4ad6-9ada-6b062a972ef6-Characters%253DKen%252C%2520Custome%253DBee.png",
  ];

  const hanaCostumes = [
    "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/2743a948-7632-4cf5-a12a-75fa40ee4ada-Characters%253DHana%252C%2520Custome%253DWingx.png",
    "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/f4ffb716-b279-4061-89fd-ed2dc94fdadc-Characters%253DHana%252C%2520Custome%253DPrincess.png",
    "https://pls-development-be-bucket.s3.ap-southeast-1.amazonaws.com/e162bafa-97e6-4a0c-8f2c-e631e79e491a-Characters%253DHana%252C%2520Custome%253DKitty.png",
  ];

  // Auto-rotate Ken's costumes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKenCostume((prev) => (prev + 1) % kenCostumes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [kenCostumes.length]);

  // Auto-rotate Hana's costumes every 3 seconds (with slight offset)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHanaCostume((prev) => (prev + 1) % hanaCostumes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hanaCostumes.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-blue-600 mb-4">
            🤖 Gặp gỡ bạn AI của chúng ta
          </h3>
          <p className="text-xl text-gray-700">
            Ken và Hana - 2 bạn AI siêu thông minh và vui vẻ, luôn sẵn sàng giúp
            đỡ các bạn nhỏ!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Ken Card */}
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 border-4 border-blue-400 hover:shadow-2xl transition-all duration-300">
            <div className="w-56 h-56 mx-auto mb-6 relative">
              {kenCostumes.map((costume, index) => (
                <div
                  key={costume}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentKenCostume === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={costume}
                    alt={`Ken - AI Assistant - Costume ${index + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Costume indicator dots for Ken */}
            <div className="flex justify-center gap-2 mb-4">
              {kenCostumes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentKenCostume(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentKenCostume === index
                      ? "bg-blue-600 w-8"
                      : "bg-blue-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Switch to Ken costume ${index + 1}`}
                />
              ))}
            </div>

            <h4 className="text-3xl font-bold text-blue-600 mb-3">🤖 Ken</h4>
            <p className="text-xl text-blue-500 mb-4 font-bold">
              Bạn AI siêu thông minh
            </p>
            <p className="text-gray-700 text-lg">
              Ken là bạn AI rất thông minh và vui vẻ! Bạn ấy luôn sẵn sàng trả
              lời mọi câu hỏi và giúp các bạn học tập. Ken biết rất nhiều điều
              thú vị và sẽ làm cho việc học trở nên vui vẻ hơn!
            </p>
          </div>

          {/* Hana Card */}
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-pink-100 border-4 border-pink-400 hover:shadow-2xl transition-all duration-300">
            <div className="w-56 h-56 mx-auto mb-6 relative">
              {hanaCostumes.map((costume, index) => (
                <div
                  key={costume}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentHanaCostume === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={costume}
                    alt={`Hana - AI Assistant - Costume ${index + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Costume indicator dots for Hana */}
            <div className="flex justify-center gap-2 mb-4">
              {hanaCostumes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentHanaCostume(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentHanaCostume === index
                      ? "bg-pink-600 w-8"
                      : "bg-pink-300 hover:bg-pink-400"
                  }`}
                  aria-label={`Switch to Hana costume ${index + 1}`}
                />
              ))}
            </div>

            <h4 className="text-3xl font-bold text-pink-600 mb-3">👧 Hana</h4>
            <p className="text-xl text-pink-500 mb-4 font-bold">
              Bạn AI vui vẻ
            </p>
            <p className="text-gray-700 text-lg">
              Hana là bạn AI rất vui vẻ và thân thiện! Bạn ấy sẽ giúp các bạn
              lập kế hoạch học tập và theo dõi tiến độ. Hana luôn khuyến khích
              và động viên các bạn học tập mỗi ngày!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
