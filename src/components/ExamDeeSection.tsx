"use client";

import { Button } from "@/components/ui/button";
import {
  Building2,
  BookOpen,
  GraduationCap,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function ExamDeeSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F0F9E8] to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#58CC02]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-[#58CC02]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Logo Container */}
          <div className="inline-flex items-center justify-center mb-8 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58CC02] to-[#4CAF00] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-lg border-2 border-[#58CC02]/20 group-hover:border-[#58CC02] transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/images/examdee.png"
                    alt="ExamDee - Nền tảng học tiếng Anh thông minh"
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            ExamDee
          </h2>
          <p className="text-2xl font-bold text-[#58CC02] mb-4">
            Nền tảng học tiếng Anh thông minh với AI
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ExamDee giúp các bạn nhỏ học tiếng Anh thật{" "}
            <span className="font-bold text-[#58CC02]">vui vẻ</span> và{" "}
            <span className="font-bold text-[#58CC02]">hiệu quả</span>! 🎉
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Schools & Centers Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#58CC02]/20 to-[#58CC02]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 group-hover:border-[#58CC02] transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#58CC02] to-[#4CAF00] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                🏫 Trường học & Trung tâm
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Dành cho các thầy cô và nhà trường muốn dạy học hiện đại hơn.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#58CC02]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#58CC02]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Quản lý lớp học thông minh
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#58CC02]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#58CC02]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Báo cáo tiến độ rõ ràng
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#58CC02]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#58CC02]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Tiết kiệm thời gian dạy học
                  </span>
                </li>
              </ul>

              {/* Badge */}
              <div className="inline-block bg-[#58CC02]/10 text-[#58CC02] px-4 py-2 rounded-full text-sm font-bold">
                ✓ Cho giáo viên
              </div>
            </div>
          </div>

          {/* Teachers Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 group-hover:border-[#FFD700] transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FFD700] to-[#FFC107] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-gray-900" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                👩‍🏫 Các thầy cô giáo
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Trợ lý AI giúp ra đề và chấm bài nhanh chóng, chính xác.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-[#FFD700]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Tạo đề thi siêu tốc với AI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-[#FFD700]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Chấm bài tự động, chính xác
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-[#FFD700]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Quản lý học sinh dễ dàng
                  </span>
                </li>
              </ul>

              {/* Badge */}
              <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-4 py-2 rounded-full text-sm font-bold">
                ⭐ Cho thầy cô
              </div>
            </div>
          </div>

          {/* Students Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1F8FE8]/20 to-[#1F8FE8]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 group-hover:border-[#1F8FE8] transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#1F8FE8] to-[#1565C0] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                🎓 Các bạn học sinh
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Học tiếng Anh thật vui, không còn sợ hãi khi học một mình.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F8FE8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5 text-[#1F8FE8]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Gia sư AI luôn giải thích bài
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F8FE8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5 text-[#1F8FE8]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Học mà chơi, chơi mà học
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1F8FE8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Heart className="w-3.5 h-3.5 text-[#1F8FE8]" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    Kết nối bạn bè cùng học
                  </span>
                </li>
              </ul>

              {/* Badge */}
              <div className="inline-block bg-[#1F8FE8]/10 text-[#1F8FE8] px-4 py-2 rounded-full text-sm font-bold">
                💙 Cho học sinh
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#58CC02] to-[#4CAF00] rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* Main container with gradient border */}
          <div className="relative bg-gradient-to-br from-[#58CC02] via-[#6FD935] to-[#4CAF00] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden group">
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Subtle top border light */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-t-3xl"></div>

            {/* Subtle left border light */}
            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-l-3xl"></div>

            {/* Content */}
            <div className="text-center mb-10 relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                🚀 Cùng ExamDee học tiếng Anh ngay!
              </h3>
              <p className="text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
                Khám phá cách ExamDee giúp bạn học tiếng Anh thật giỏi và vui
                vẻ!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button
                variant="primary"
                size="lg"
                className="bg-white text-[#58CC02] hover:bg-gray-50 font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 relative overflow-hidden group"
                onClick={() => {
                  document.getElementById("contact-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-[#58CC02]/10 rounded-lg scale-0 group-active:scale-100 transition-transform duration-500 origin-center"></span>

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12"></span>

                {/* Content */}
                <span className="relative flex items-center justify-center gap-2">
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    🔍
                  </span>
                  Tìm hiểu thêm
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-[#58CC02] hover:border-white hover:bg-white/20 font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 relative overflow-hidden group backdrop-blur-sm hover:text-white"
                onClick={() => {
                  window.open("https://examdee.ai-vietnam.vn", "_blank");
                }}
              >
                {/* Ripple effect */}
                <span className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-active:scale-100 transition-transform duration-500 origin-center"></span>

                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 -skew-x-12"></span>

                {/* Content */}
                <span className="relative flex items-center justify-center gap-2">
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    🎮
                  </span>
                  Dùng thử miễn phí
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
