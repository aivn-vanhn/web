"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-pink-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-48 h-12 relative">
              <Image
                src="/images/logo.svg"
                alt="AI Vietnam Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <Button
            className="bg-white hover:bg-gray-50 text-blue-600 px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold text-lg"
            onClick={() => {
              document.getElementById("contact-section")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            🎉 Liên hệ ngay
          </Button>
        </div>
      </div>
    </header>
  );
}
