"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleStartLearning = () => {
    window.open("https://examdee.ai-vietnam.vn", "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-12">
              <Image
                src="/images/logo (1).svg"
                alt="AI Vietnam Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop CTA Button */}
          <button
            onClick={handleStartLearning}
            className="hidden md:flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#58CC02] to-[#4CAF00] text-white font-black rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Bắt đầu học ngay</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile CTA Button */}
          <button
            onClick={() => {
              handleStartLearning();
              setIsOpen(false);
            }}
            className={`w-full px-6 py-4 bg-gradient-to-r from-[#58CC02] to-[#4CAF00] text-white font-black rounded-2xl shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 transform ${
              isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? "100ms" : "0ms",
            }}
          >
            <span>Bắt đầu học ngay</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
