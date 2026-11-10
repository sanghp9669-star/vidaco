import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/viendatData';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-blue-700 via-blue-600 to-red-600 flex items-center justify-center text-white font-bold text-xl shadow-sm tracking-wider">
              V
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                VIỄN ĐẠT
              </span>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Telecom & Solutions
              </span>
            </div>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a
              href="#gioi-thieu"
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              Giới thiệu
            </a>
            <a
              href="#giai-phap"
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              Giải pháp trọng tâm
            </a>
            <a
              href="#doi-tac"
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              Đối tác công nghệ
            </a>
            <a
              href="#dich-vu"
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              Dịch vụ kỹ thuật
            </a>
            <a
              href="#du-an"
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              Dự án tiêu biểu
            </a>
            <a
              href="#lien-he"
              className="hover:text-blue-700 transition-colors whitespace-nowrap shrink-0"
            >
              Liên hệ
            </a>
          </nav>

          {/* Zone 3: 1 primary action + direct hotline */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.hotlines[0].replace(/\D/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-blue-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{COMPANY_INFO.hotlines[0]}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 active:scale-95"
            >
              <span>Yêu cầu tư vấn</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Giới thiệu
            </a>
            <a
              href="#giai-phap"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Giải pháp trọng tâm
            </a>
            <a
              href="#doi-tac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Đối tác công nghệ
            </a>
            <a
              href="#dich-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Dịch vụ kỹ thuật
            </a>
            <a
              href="#du-an"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Dự án tiêu biểu
            </a>
            <a
              href="#lien-he"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-50 hover:text-blue-700"
            >
              Liên hệ
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.hotlines[0].replace(/\D/g, '')}`}
              className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 py-2.5 rounded-lg border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Hotline: {COMPANY_INFO.hotlines[0]}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-700 rounded-lg text-center"
            >
              Gửi yêu cầu báo giá ngay
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
