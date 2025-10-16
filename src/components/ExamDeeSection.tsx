"use client";

import { Button } from "@/components/ui/button";
import { Building2, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function ExamDeeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-pink-500/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-pink-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          {/* Logo container with modern glass effect */}
          <div className="inline-flex items-center justify-center p-8 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border-4 border-pink-300 mb-8 hover:shadow-3xl transition-all duration-500 hover:scale-105">
            <div className="w-24 h-24 relative">
              <Image
                src="/images/examdee.png"
                alt="ExamDee - Nền tảng học tiếng Anh thông minh"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-6">
            ExamDee
          </h3>
          <p className="text-xl text-blue-600 mb-4 font-bold">
            Nền tảng học tiếng Anh thông minh với AI
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            ExamDee giúp các bạn nhỏ học tiếng Anh thật vui và hiệu quả!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Educational Organizations */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-4">
              🏫 Trường học và Trung tâm
            </h4>
            <p className="text-gray-700 mb-6">
              Dành cho các thầy cô và nhà trường muốn việc dạy học trở nên dễ
              dàng và hiện đại hơn.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quản lý lớp học thông minh
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Báo cáo tiến độ rõ ràng
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Giúp thầy cô tiết kiệm thời gian
              </li>
            </ul>
          </div>

          {/* Teachers */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-pink-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-pink-600 mb-4">
              👩‍🏫 Các thầy cô giáo
            </h4>
            <p className="text-gray-700 mb-6">
              Dành cho các thầy cô muốn có một trợ lý AI giúp ra đề và chấm bài
              nhanh chóng.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Tạo đề thi siêu tốc với AI
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Chấm bài tự động, chính xác
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Quản lý học sinh dễ dàng
              </li>
            </ul>
          </div>

          {/* Students */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-blue-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-4">
              🎓 Các bạn học sinh
            </h4>
            <p className="text-gray-700 mb-6">
              Dành cho các bạn nhỏ muốn học tiếng Anh thật vui, không còn sợ hãi
              khi học một mình.
            </p>
            <ul className="text-gray-700 space-y-3">
              <li className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Gia sư AI luôn giải thích bài
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Học mà chơi, chơi mà học
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Kết nối bạn bè cùng học
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 rounded-3xl p-12 text-white shadow-2xl">
            <h4 className="text-3xl font-bold mb-6">
              🚀 Cùng ExamDee học tiếng Anh ngay!
            </h4>
            <p className="text-xl mb-8 opacity-90">
              Khám phá cách ExamDee giúp bạn học tiếng Anh thật giỏi và vui vẻ!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg"
                onClick={() => {
                  document.getElementById("contact-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                🔍 Tìm hiểu thêm
              </Button>
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg"
                onClick={() => {
                  window.open("https://examdee.ai-vietnam.vn", "_blank");
                }}
              >
                🎮 Dùng thử miễn phí
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
