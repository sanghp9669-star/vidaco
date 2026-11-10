import React from 'react';
import { COMPANY_INFO, PARTNERS } from '../data/viendatData';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-red-600 flex items-center justify-center text-white font-bold text-lg">
                V
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight block">
                  VIỄN ĐẠT TELECOM
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block">
                  VIDACO - EST. {COMPANY_INFO.foundedYear}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {COMPANY_INFO.name}. Đơn vị chuyên sâu về truyền thông hợp nhất, hội nghị truyền hình,
              tự động hóa lưới điện SCADA, hạ tầng mạng doanh nghiệp và cáp quang truyền dẫn.
            </p>

            <div className="pt-2 text-slate-500 text-[11px] space-y-1">
              <div>Mã số doanh nghiệp: <span className="font-mono text-slate-400">{COMPANY_INFO.taxCode}</span></div>
              <div>Cấp ngày 23/05/2001 bởi Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Giải pháp trọng tâm
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#giai-phap" className="hover:text-white transition-colors">
                  Contact Center Avaya
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-white transition-colors">
                  Hội nghị truyền hình Polycom
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-white transition-colors">
                  SCADA Lưới điện RAD
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-white transition-colors">
                  An ninh mạng Palo Alto
                </a>
              </li>
              <li>
                <a href="#giai-phap" className="hover:text-white transition-colors">
                  Cáp quang Prysmian
                </a>
              </li>
            </ul>
          </div>

          {/* Partners list */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Đối tác công nghệ
            </div>
            <ul className="space-y-2">
              {PARTNERS.slice(0, 5).map((p) => (
                <li key={p.name}>
                  <a href="#doi-tac" className="hover:text-white transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Thông tin liên hệ
            </div>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.tradingOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.hotlines[0].replace(/\D/g, '')}`} className="hover:text-white font-mono">
                  {COMPANY_INFO.hotlines[0]}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Quy định bảo mật</a>
            <a href="#" className="hover:text-slate-400">Điều khoản dịch vụ</a>
            <a href="#lien-he" className="hover:text-slate-400">Hỗ trợ kỹ thuật 24/7</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
