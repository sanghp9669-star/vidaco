import React from 'react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, TRUST_METRICS } from '../data/viendatData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-white pt-14 pb-16 lg:pt-24 lg:pb-20 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Direct Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
              <span>Thành lập {COMPANY_INFO.foundedYear}</span>
              <span aria-hidden="true">·</span>
              <span>TP. Hồ Chí Minh</span>
              <span aria-hidden="true">·</span>
              <span className="text-blue-700 font-semibold">VIDACO</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold text-zinc-950 tracking-[-0.03em] leading-[1.12] text-balance">
              Hạ tầng viễn thông & tự động hóa lưới điện chuẩn doanh nghiệp.
            </h1>

            <p className="text-base text-zinc-600 leading-relaxed max-w-lg">
              Viễn Đạt tư vấn, thiết kế và tích hợp trọn gói hệ thống truyền thông hợp nhất Avaya,
              hội nghị truyền hình Polycom, điều khiển SCADA RAD, an ninh mạng Palo Alto và cáp quang Prysmian.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Yêu cầu báo giá dự án</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#giai-phap"
                className="px-5 py-2.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-lg transition-colors whitespace-nowrap"
              >
                Xem danh mục giải pháp
              </a>
            </div>
          </div>

          {/* Right Column: Clean Framed Photography without floating overlays */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[16/10]">
              <img
                src="/src/assets/images/hero_telecom_network_1794281038938.jpg"
                alt="Trung tâm điều hành hạ tầng mạng viễn thông và hệ thống máy chủ Viễn Đạt"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-2.5 text-xs text-zinc-500">
              Hệ thống trung tâm điều hành mạng (NOC) và hạ tầng truyền dẫn tiêu chuẩn quốc tế.
            </p>
          </div>
        </div>

        {/* 4-column hairline-divided KPI strip */}
        <div className="mt-16 pt-10 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight font-mono tabular-nums">
                {metric.number}
              </div>
              <div className="text-sm font-medium text-zinc-900">{metric.label}</div>
              <div className="text-xs text-zinc-500">{metric.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
