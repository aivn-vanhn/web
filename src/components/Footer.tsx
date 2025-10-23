import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-white to-[#F0F9E8] text-gray-900 py-16 md:py-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#58CC02]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1F8FE8]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="w-40 h-12 relative mb-4">
                <Image
                  src="/images/logo (1).svg"
                  alt="AI Vietnam Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Nền tảng học tập AI cá nhân hóa cho học sinh
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#58CC02]/10 flex items-center justify-center text-[#58CC02] hover:bg-[#58CC02] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1F8FE8]/10 flex items-center justify-center text-[#1F8FE8] hover:bg-[#1F8FE8] hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-black text-lg text-gray-900 mb-6">
              Thông tin công ty
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-bold text-gray-900 mb-1">Mã số thuế</p>
                <p>0110411813</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Tên viết tắt</p>
                <p>AI VIETNAM RDS.,JSC</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Người đại diện</p>
                <p>NGUYỄN LÊ MINH</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Ngày hoạt động</p>
                <p>10/07/2023</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg text-gray-900 mb-6">Liên hệ</h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#58CC02] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-bold text-gray-900 mb-1">Địa chỉ</p>
                  <p>
                    Căn OF03-10 Toà nhà West 1 - Vinhomes West Point, đường Đỗ
                    Đức Dục, Phường Từ Liêm, TP Hà Nội, Việt Nam
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#1F8FE8] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-bold text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:minhlenguyen.ceo@ai-vietnam.vn"
                    className="hover:text-[#58CC02] transition-colors"
                  >
                    minhlenguyen.ceo@ai-vietnam.vn
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p className="font-bold text-gray-900 mb-1">Điện thoại</p>
                  <a
                    href="tel:0844094515"
                    className="hover:text-[#58CC02] transition-colors"
                  >
                    0844094515
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg text-gray-900 mb-6">
              Liên kết nhanh
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#58CC02] font-medium transition-colors"
                >
                  → Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#58CC02] font-medium transition-colors"
                >
                  → Dịch vụ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#58CC02] font-medium transition-colors"
                >
                  → Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#58CC02] font-medium transition-colors"
                >
                  → Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-[#58CC02] font-medium transition-colors"
                >
                  → Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-gray-600 font-medium">
            © 2024 AI Vietnam. Tất cả quyền được bảo lưu.
          </p>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-[#58CC02] transition-colors">
              Điều khoản
            </a>
            <a href="#" className="hover:text-[#58CC02] transition-colors">
              Bảo mật
            </a>
            <a href="#" className="hover:text-[#58CC02] transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
