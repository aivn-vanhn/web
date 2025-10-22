import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, Building2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-blue-600 mb-4">
            📞 Liên hệ với chúng tôi
          </h3>
          <p className="text-xl text-gray-700">
            Sẵn sàng hỗ trợ và tư vấn cho dự án của bạn
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto border-4 border-blue-300">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">
                    🏢 Địa chỉ
                  </h4>
                  <p className="text-gray-700 text-lg leading-tight">
                    Căn OF0310 - W1, Vinhomes Westpoint, Đường Đỗ Đức Dục,
                    Phường Từ Liêm, Hà Nội
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white border-2 border-pink-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-pink-600 mb-3">
                    📱 Điện thoại
                  </h4>
                  <a
                    href="tel:0844094515"
                    className="text-gray-700 hover:text-pink-600 underline text-lg font-semibold"
                  >
                    0844094515
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 rounded-2xl bg-white border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-3">
                    ✉️ Email
                  </h4>
                  <a
                    href="mailto:minhlenguyen.ceo@ai-vietnam.vn"
                    className="text-gray-700 hover:text-blue-600 underline text-lg font-semibold break-all"
                  >
                    minhlenguyen.ceo@ai-vietnam.vn
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border-4 border-pink-300 shadow-lg">
              <h4 className="text-2xl font-bold text-pink-600 mb-6">
                💬 Gửi tin nhắn cho chúng tôi
              </h4>
              <form className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Họ và tên"
                    className="w-full text-lg py-3 border-2 border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="w-full text-lg py-3 border-2 border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Nội dung tin nhắn"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg py-4">
                  🚀 Gửi tin nhắn
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
