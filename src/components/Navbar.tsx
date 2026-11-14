import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Zone 1: Clean single-line brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-md"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="shrink-0"
            >
              <rect width="24" height="24" rx="5" fill="#09090B" />
              <path
                d="M7 7.5L12 16.5L17 7.5"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[15px] font-semibold tracking-tight text-zinc-950">
              Viễn Đạt
            </span>
          </a>

          {/* Zone 2: 5 concise single-line text links */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-zinc-600">
            <a
              href="#giai-phap"
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0"
            >
              Giải pháp
            </a>
            <a
              href="#doi-tac"
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0"
            >
              Đối tác
            </a>
            <a
              href="#dich-vu"
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0"
            >
              Dịch vụ
            </a>
            <a
              href="#du-an"
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0"
            >
              Dự án
            </a>
            <a
              href="#gioi-thieu"
              className="hover:text-zinc-950 transition-colors whitespace-nowrap shrink-0"
            >
              Giới thiệu
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium text-white bg-zinc-950 hover:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Liên hệ tư vấn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-600 hover:text-zinc-950 rounded-md hover:bg-zinc-100"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4 space-y-1">
          <nav className="flex flex-col space-y-1 text-sm font-medium text-zinc-700">
            <a
              href="#giai-phap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-zinc-950"
            >
              Giải pháp
            </a>
            <a
              href="#doi-tac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-zinc-950"
            >
              Đối tác
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-zinc-950"
            >
              Dịch vụ
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-zinc-950"
            >
              Dự án
            </a>
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-zinc-50 hover:text-zinc-950"
            >
              Giới thiệu
            </a>
          </nav>
          <div className="pt-3 border-t border-zinc-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-sm font-medium text-white bg-zinc-950 rounded-lg text-center"
            >
              Liên hệ tư vấn
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
