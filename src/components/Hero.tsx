import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Network } from 'lucide-react';
import { COMPANY_INFO, TRUST_METRICS } from '../data/viendatData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 bg-blue-50/90 border border-blue-200/80 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Đối tác tích hợp giải pháp viễn thông uy tín từ năm {COMPANY_INFO.foundedYear}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] text-balance">
              Giải Pháp Viễn Thông & Hạ Tầng CNTT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                Chuyên Sâu Cho Doanh Nghiệp
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Công ty TNHH Thương mại và Dịch vụ Viễn Đạt (VIDACO) chuyên tư vấn, cung cấp và tích hợp
              hệ thống truyền thông hợp nhất (Avaya), hội nghị truyền hình (Polycom), tự động hóa lưới
              điện SCADA (RAD), an ninh mạng (Palo Alto) và cáp quang chuyên dụng (Prysmian).
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thiết bị chính hãng 100% đầy đủ CO, CQ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kỹ sư được chứng nhận quốc tế từ các hãng</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dịch vụ ứng cứu kỹ thuật 24/7 toàn quốc</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kinh nghiệm triển khai ngành điện lực & ngân hàng</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
              >
                <span>Yêu cầu khảo sát & báo giá</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#giai-phap"
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                Xem các giải pháp
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-300/80 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_telecom_network_1794281038938.jpg"
                alt="Trung tâm vận hành viễn thông và hệ thống mạng Viễn Đạt Telecom"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating caption card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Hạ tầng viễn thông & SCADA
                    </p>
                    <p className="text-sm font-medium text-slate-200 mt-0.5">
                      Tiêu chuẩn vận hành cho Trung tâm dữ liệu & Lưới điện thông minh
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center shrink-0">
                    <Network className="w-5 h-5 text-blue-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column KPI strip below hero split */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-800 tracking-tight font-mono tabular-nums">
                {metric.number}
              </div>
              <div className="text-sm font-semibold text-slate-800">{metric.label}</div>
              <div className="text-xs text-slate-500">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
