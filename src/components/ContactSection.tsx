import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Building2, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="py-20 bg-gradient-to-b from-white via-[#F0F9E8] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-6xl">💬</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hãy liên hệ với chúng tôi
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Gửi tin nhắn cho
            chúng tôi ngay hôm nay!
          </p>
        </div>

        {/* Main Container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#58CC02]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#58CC02] to-[#4CAF00] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Địa chỉ
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Căn OF0310 - W1, Vinhomes Westpoint, Đường Đỗ Đức Dục,
                    Phường Từ Liêm, Hà Nội
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#58CC02]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFD700] to-[#FFC107] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-gray-900" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Điện thoại
                  </h3>
                  <a
                    href="tel:0844094515"
                    className="text-[#58CC02] hover:text-[#4CAF00] font-semibold text-lg transition-colors duration-200"
                  >
                    0844 094 515
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#58CC02]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1F8FE8] to-[#1565C0] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:minhlenguyen.ceo@ai-vietnam.vn"
                    className="text-[#58CC02] hover:text-[#4CAF00] font-semibold break-all transition-colors duration-200"
                  >
                    minhlenguyen.ceo@ai-vietnam.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#F0F9E8] to-white rounded-3xl p-8 shadow-lg border-2 border-[#58CC02]">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Gửi tin nhắn cho chúng tôi
              </h3>
              <p className="text-gray-600">
                Chúng tôi sẽ phản hồi trong vòng 24 giờ
              </p>
            </div>

            <form className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Họ và tên
                </label>
                <Input
                  type="text"
                  placeholder="Nhập tên của bạn"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#58CC02] focus:ring-2 focus:ring-[#58CC02] focus:ring-opacity-20 transition-all duration-200 text-base placeholder:text-gray-400"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#58CC02] focus:ring-2 focus:ring-[#58CC02] focus:ring-opacity-20 transition-all duration-200 text-base placeholder:text-gray-400"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nội dung tin nhắn
                </label>
                <textarea
                  placeholder="Hãy cho chúng tôi biết bạn cần gì..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#58CC02] focus:ring-2 focus:ring-[#58CC02] focus:ring-opacity-20 transition-all duration-200 resize-none text-base placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                className="mt-8 gap-2 font-bold text-lg"
              >
                <Send className="w-5 h-5" />
                Gửi tin nhắn
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                ✓ Chúng tôi sẽ không bao giờ chia sẻ email của bạn
              </p>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Hoặc kết nối với chúng tôi trên mạng xã hội
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              Facebook
            </Button>
            <Button variant="outline" size="lg">
              LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              Twitter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
