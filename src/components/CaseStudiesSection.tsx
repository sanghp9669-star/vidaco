import React from 'react';
import { CLIENT_STORIES } from '../data/viendatData';
import { Building, TrendingUp, CheckCircle2, Cpu } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="du-an" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
            Kinh nghiệm thực tiễn
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Dự Án Tiêu Biểu & Khách Hàng Doanh Nghiệp
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Hơn 1.200 dự án viễn thông và hạ tầng CNTT đã được Viễn Đạt triển khai thành công cho các
            tập đoàn năng lượng, ngân hàng và cơ quan trọng yếu tại Việt Nam.
          </p>
        </div>

        {/* 3 Project Case Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CLIENT_STORIES.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-50/60 rounded-2xl border border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-md">
                    {project.sector}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-400">
                    Dự án #0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {project.client}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/70 space-y-4">
                {/* Outcome */}
                <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <TrendingUp className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Hiệu quả đạt được:</span>
                  </div>
                  <p className="text-xs text-emerald-950 mt-1 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Công nghệ triển khai:</span>{' '}
                  <span className="font-mono text-slate-600">{project.techStack}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Sectors strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold font-mono text-blue-400">EVN & Điện Lực</div>
            <div className="text-xs text-slate-300 mt-1">Lưới điện phân phối & Trạm 110/220kV</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-blue-400">Ngân Hàng & Bảo Hiểm</div>
            <div className="text-xs text-slate-300 mt-1">Tổng đài Contact Center & Mạng lõi</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-blue-400">Viễn Thông & Nhà Mạng</div>
            <div className="text-xs text-slate-300 mt-1">Cáp quang trục & Thiết bị truyền dẫn</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono text-blue-400">Cơ Quan & Doanh Nghiệp FDI</div>
            <div className="text-xs text-slate-300 mt-1">Hội nghị truyền hình & An ninh mạng</div>
          </div>
        </div>
      </div>
    </section>
  );
};
