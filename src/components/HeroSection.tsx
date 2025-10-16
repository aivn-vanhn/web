"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
              🎓 Học tập
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
                {" "}
                Vui vẻ
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl">
              🌟 AI Vietnam - Nơi học tập thú vị với AI, giúp các bạn nhỏ học
              giỏi và vui vẻ mỗi ngày!
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-40 h-40 relative">
              <Image
                src="/images/ken.svg"
                alt="Ken - Linh vật AI Vietnam"
                fill
                className="object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>
            <div className="w-40 h-40 relative">
              <Image
                src="/images/hana.png"
                alt="Hana - Linh vật AI Vietnam"
                fill
                className="object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg"
          >
            🚀 Bắt đầu học ngay
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-4 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg"
          >
            🎮 Tìm hiểu thêm
          </Button>
        </div>
      </div>
    </section>
  );
}
