import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-8 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-48 h-12 relative">
              <Image
                src="/images/logo.svg"
                alt="AI Vietnam Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white/80 text-center md:text-right">
            © 2024 AI Vietnam. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
