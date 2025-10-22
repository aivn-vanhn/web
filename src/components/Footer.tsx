import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Header */}
        <div className="mb-8">
          <div className="w-48 h-16 relative mb-4">
            <Image
              src="/images/logo.svg"
              alt="AI Vietnam Logo"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-semibold text-lg mb-4">
            CÔNG TY CỔ PHẦN NGHIÊN CỨU PHÁT TRIỂN VÀ CUNG CẤP DỊCH VỤ AI VIỆT
            NAM
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Company Details */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-base mb-3 text-white">
              Thông tin công ty
            </h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>
                <span className="font-medium">Mã số thuế:</span> 0110411813
              </p>
              <p>
                <span className="font-medium">Tên viết tắt:</span> AI VIETNAM
                RDS.,JSC
              </p>
              <p>
                <span className="font-medium">Người đại diện:</span> NGUYỄN LÊ
                MINH
              </p>
              <p>
                <span className="font-medium">Ngày hoạt động:</span> 10/07/2023
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-5">
            <h4 className="font-semibold text-base mb-3 text-white">Liên hệ</h4>
            <div className="space-y-2 text-white/90 text-sm">
              <p>
                <span className="font-medium">Địa chỉ:</span>
                <br />
                Căn OF03-10 Toà nhà West 1 - Vinhomes West Point, đường Đỗ Đức
                Dục, Phường Từ Liêm, TP Hà Nội, Việt Nam
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                minhlenguyen.ceo@ai-vietnam.vn
              </p>
              <p>
                <span className="font-medium">Điện thoại:</span> 0844094515
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-base mb-3 text-white">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/80 text-sm">
            © 2024 AI Vietnam. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
