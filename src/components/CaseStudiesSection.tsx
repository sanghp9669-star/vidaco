import React, { useState } from 'react';
import { CLIENT_STORIES, ProjectCase } from '../data/viendatData';
import { Building, TrendingUp, CheckCircle2, Cpu, ExternalLink, ArrowRight } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  return (
    <section id="du-an" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              Kinh nghiệm thực tiễn & Năng lực triển khai
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Dự Án Tiêu Biểu & Khách Hàng Khối Trọng Yếu
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Hơn 1.200 dự án viễn thông và hạ tầng CNTT đã được Viễn Đạt triển khai thành công cho các
              tập đoàn năng lượng, ngân hàng và cơ quan trọng yếu tại Việt Nam.
            </p>
          </div>

          <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-lg border border-slate-200 shrink-0 self-start md:self-auto">
            100% Dự án nghiệm thu đúng hạn
          </div>
        </div>

        {/* 3 Project Case Cards with Real Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CLIENT_STORIES.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Project Image with scrim and zoom effect */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.client}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 bg-blue-700/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-xs font-semibold">
                  {project.sector}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono text-blue-300 block">
                    Dự án tiêu biểu #{`0${idx + 1}`}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug drop-shadow-sm">
                    {project.client}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Phạm vi triển khai:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Outcome Highlight Box */}
                  <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>Hiệu quả định lượng:</span>
                    </div>
                    <p className="text-xs text-emerald-950 mt-1 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Tech stack badge list */}
                  <div className="pt-1 border-t border-slate-100 text-xs">
                    <div className="text-[11px] text-slate-400 font-semibold mb-1">Công nghệ:</div>
                    <div className="font-mono text-slate-700 text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {project.techStack}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Sectors strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="p-2 border-r border-white/10 last:border-none">
            <div className="text-2xl font-extrabold font-mono text-blue-400 tracking-tight">EVN & Điện Lực</div>
            <div className="text-xs text-slate-300 mt-1">Lưới điện phân phối & Trạm 110/220kV</div>
          </div>
          <div className="p-2 border-r border-white/10 last:border-none">
            <div className="text-2xl font-extrabold font-mono text-blue-400 tracking-tight">Ngân Hàng & Tài Chính</div>
            <div className="text-xs text-slate-300 mt-1">Tổng đài Contact Center & Mạng lõi</div>
          </div>
          <div className="p-2 border-r border-white/10 last:border-none">
            <div className="text-2xl font-extrabold font-mono text-blue-400 tracking-tight">Viễn Thông & Nhà Mạng</div>
            <div className="text-xs text-slate-300 mt-1">Cáp quang trục & Thiết bị truyền dẫn</div>
          </div>
          <div className="p-2">
            <div className="text-2xl font-extrabold font-mono text-blue-400 tracking-tight">Cơ Quan & Doanh Nghiệp FDI</div>
            <div className="text-xs text-slate-300 mt-1">Hội nghị truyền hình & An ninh mạng</div>
          </div>
        </div>
      </div>
    </section>
  );
};
