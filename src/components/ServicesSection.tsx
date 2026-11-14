import React from 'react';
import { SERVICES } from '../data/viendatData';
import { ArrowRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="dich-vu" className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-medium text-blue-700">
            Quy trình & dịch vụ kỹ thuật
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-[-0.025em] text-balance">
            Đồng hành xuyên suốt vòng đời hạ tầng
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Từ khảo sát hiện trường, thiết kế kiến trúc hệ thống đến triển khai tích hợp và cam kết
            ứng cứu sự cố kỹ thuật 24/7.
          </p>
        </div>

        {/* Architectural 4-Column Hairline Grid (Linear / Vercel style) */}
        <div className="mt-12 bg-white border border-zinc-200 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
          {SERVICES.map((srv, index) => {
            const stepNum = `0${index + 1}`;
            return (
              <div
                key={srv.id}
                className="p-6 sm:p-7 flex flex-col justify-between md:border-b lg:border-b-0 border-zinc-200"
              >
                <div className="space-y-3">
                  <div className="font-mono text-xs font-medium text-blue-700">
                    {stepNum}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-950 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100">
                  <div className="text-[11px] font-medium text-zinc-400 mb-2">
                    Hạng mục bàn giao
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-600">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-baseline gap-2">
                        <span className="text-zinc-400 select-none">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Solid Dark SLA Callout */}
        <div className="mt-8 bg-zinc-950 text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="text-xs font-mono text-zinc-400">
              SLA 24/7 · Phản hồi trong 15 phút
            </div>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white">
              Cam kết trực ban kỹ thuật & ứng cứu sự cố viễn thông toàn quốc
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Đội ngũ kỹ sư chuyên trách luôn sẵn sàng hỗ trợ từ xa hoặc trực tiếp tại hiện trường
              cùng thiết bị dự phòng thay thế tạm thời.
            </p>
          </div>
          <a
            href="#lien-he"
            className="px-4 py-2.5 text-xs font-medium text-zinc-950 bg-white hover:bg-zinc-100 rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>Liên hệ bộ phận kỹ thuật</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
