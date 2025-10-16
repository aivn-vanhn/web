import { BookOpen, GraduationCap, Lightbulb } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-blue-600 mb-4">
            🌟 Tại sao các bạn nhỏ yêu thích AI Vietnam?
          </h3>
          <p className="text-xl text-gray-700">
            🎮 Vừa học vừa chơi - Học tập thật vui vẻ và thú vị!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-3xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-4 border-blue-300">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-4">
              🎯 Học tập thông minh
            </h4>
            <p className="text-gray-700 text-lg">
              AI thông minh giúp các bạn học theo cách riêng của mình, tiến bộ
              nhanh chóng và vui vẻ!
            </p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-4 border-pink-300">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-pink-600 mb-4">
              🎮 Vừa học vừa chơi
            </h4>
            <p className="text-gray-700 text-lg">
              Học tập như chơi game! Các bài học được thiết kế thật vui nhộn và
              dễ hiểu.
            </p>
          </div>
          <div className="text-center p-8 rounded-3xl bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border-4 border-blue-300">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600 mb-4">
              🤖 Bạn AI luôn bên cạnh
            </h4>
            <p className="text-gray-700 text-lg">
              Ken và Hana luôn sẵn sàng giúp đỡ, khuyến khích và đồng hành cùng
              các bạn!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
