import React from 'react';
import { CLIENT_STORIES } from '../data/viendatData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="du-an" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-blue-700">
              Kinh nghiệm triển khai thực tế
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-[-0.025em] text-balance">
              Dự án tiêu biểu tại các tập đoàn & tổ chức trọng yếu
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Hơn 1.200 dự án viễn thông và hệ thống CNTT được bàn giao ổn định cho ngành điện lực,
              tài chính ngân hàng và khối doanh nghiệp.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 shrink-0">
            2001 — {new Date().getFullYear()} · 1.200+ dự án
          </div>
        </div>

        {/* 3-Column Editorial Case Grid (clean images, zero overlays, hairline metadata) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {CLIENT_STORIES.map((project, idx) => (
            <article key={idx} className="flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.client}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <span className="font-mono text-blue-700 font-medium">0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.sector}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-950 tracking-tight leading-snug">
                    {project.client}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 space-y-2.5">
                <div>
                  <div className="text-[11px] font-medium text-zinc-400">Hiệu quả đạt được</div>
                  <p className="text-xs font-medium text-zinc-900 mt-0.5 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>

                <div className="text-[11px] font-mono text-zinc-500 truncate" title={project.techStack}>
                  {project.techStack}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quiet 4-column Sector Directory */}
        <div className="mt-16 pt-10 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-sm font-semibold text-zinc-950">EVN & Điện lực</div>
            <div className="text-xs text-zinc-500 mt-1">SCADA lưới phân phối & trạm 110/220kV</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-950">Ngân hàng & Tài chính</div>
            <div className="text-xs text-zinc-500 mt-1">Contact Center đa kênh & mạng lõi</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-950">Viễn thông & Nhà mạng</div>
            <div className="text-xs text-zinc-500 mt-1">Cáp quang trục OPGW & truyền dẫn</div>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-950">Cơ quan & Tập đoàn FDI</div>
            <div className="text-xs text-zinc-500 mt-1">Hội nghị truyền hình & an ninh mạng</div>
          </div>
        </div>
      </div>
    </section>
  );
};
