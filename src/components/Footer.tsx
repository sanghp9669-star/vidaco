import React from 'react';
import { COMPANY_INFO, PARTNERS } from '../data/viendatData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-zinc-500 text-xs border-t border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Legal Summary */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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
              <span className="text-sm font-semibold text-zinc-950 tracking-tight">
                Viễn Đạt
              </span>
            </a>

            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              {COMPANY_INFO.name}. Giải pháp truyền thông hợp nhất, hội nghị truyền hình, tự động hóa
              lưới điện SCADA, hạ tầng mạng và cáp quang truyền dẫn.
            </p>

            <div className="text-[11px] text-zinc-500 space-y-0.5">
              <div>
                MST: <span className="font-mono text-zinc-700">{COMPANY_INFO.taxCode}</span>
              </div>
              <div>Thành lập năm {COMPANY_INFO.foundedYear} tại TP. Hồ Chí Minh</div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-medium text-zinc-950">
              Giải pháp
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#giai-phap" className="hover:text-zinc-950 transition-colors">
                  Contact Center Avaya
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-zinc-950 transition-colors">
                  Hội nghị Polycom 4K
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-zinc-950 transition-colors">
                  SCADA Lưới điện RAD
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-zinc-950 transition-colors">
                  An ninh mạng Palo Alto
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-zinc-950 transition-colors">
                  Cáp quang Prysmian
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div className="space-y-3">
            <div className="text-xs font-medium text-zinc-950">
              Đối tác
            </div>
            <ul className="space-y-2">
              {PARTNERS.slice(0, 5).map((p) => (
                <li key={p.name}>
                  <a href="#doi-tac" className="hover:text-zinc-950 transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-xs font-medium text-zinc-950">
              Liên hệ
            </div>
            <div className="space-y-2 text-zinc-600">
              <div>{COMPANY_INFO.tradingOffice}</div>
              <div>
                <a
                  href={`tel:${COMPANY_INFO.hotlines[0].replace(/\D/g, '')}`}
                  className="hover:text-zinc-950 font-mono transition-colors"
                >
                  {COMPANY_INFO.hotlines[0]}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-zinc-950 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}
          </div>
          <div className="flex items-center gap-6">
            <a href="#gioi-thieu" className="hover:text-zinc-950 transition-colors">
              Giới thiệu
            </a>
            <a href="#dich-vu" className="hover:text-zinc-950 transition-colors">
              Dịch vụ SLA
            </a>
            <a href="#lien-he" className="hover:text-zinc-950 transition-colors">
              Hỗ trợ kỹ thuật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
