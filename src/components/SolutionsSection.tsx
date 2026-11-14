import React, { useState } from 'react';
import { SOLUTIONS, Solution } from '../data/viendatData';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution: (solution: Solution) => void;
  onOpenConsultation: () => void;
}

const FILTER_OPTIONS = [
  { id: 'all', label: 'Tất cả' },
  { id: 'contact-center', label: 'Contact Center' },
  { id: 'video-conference', label: 'Hội nghị 4K' },
  { id: 'grid-automation', label: 'SCADA Lưới điện' },
  { id: 'network-security', label: 'An ninh mạng' },
  { id: 'fiber-cabling', label: 'Cáp Prysmian' },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  onOpenConsultation,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredSolutions =
    activeTab === 'all'
      ? SOLUTIONS
      : SOLUTIONS.filter((s) => s.id === activeTab);

  return (
    <section id="giai-phap" className="py-20 lg:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Clean Segmented Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-zinc-200">
          <div className="max-w-2xl">
            <div className="text-xs font-medium text-blue-700">
              Danh mục giải pháp kỹ thuật
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-950 tracking-[-0.025em] text-balance">
              Kiến trúc hạ tầng chuyên sâu cho doanh nghiệp & ngành điện
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
              Tích hợp đồng bộ từ tổng đài điều hành đa kênh, hội nghị truyền hình, tự động hóa
              SCADA đến an ninh mạng và hệ thống cáp truyền dẫn quang.
            </p>
          </div>

          <div className="flex flex-wrap gap-1 p-1 bg-zinc-100 rounded-lg border border-zinc-200/70 self-start lg:self-auto">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveTab(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === opt.id
                    ? 'bg-white text-zinc-950 shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hairline Editorial Rows instead of repetitive shadow cards */}
        <div className="divide-y divide-zinc-200">
          {filteredSolutions.map((solution, index) => {
            const editorialNumber = `0${index + 1}`;
            const isImageRight = index % 2 === 1;

            return (
              <article
                key={solution.id}
                className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Column: Pure unencumbered image frame */}
                <div
                  className={`lg:col-span-5 ${
                    isImageRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/3]">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isImageRight ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <span className="font-mono font-medium text-blue-700">{editorialNumber}</span>
                      <span aria-hidden="true">/</span>
                      <span>{solution.partnerBrand}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 tracking-tight">
                      {solution.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-500">
                      {solution.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed">
                    {solution.detailedDesc}
                  </p>

                  {/* Typographic feature list */}
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {solution.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-baseline gap-2.5">
                        <span className="text-zinc-400 font-mono text-xs select-none">—</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Single-line architectural spec bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border border-zinc-200 rounded-lg divide-y sm:divide-y-0 sm:divide-x divide-zinc-200 bg-zinc-50/60">
                    {solution.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="px-3.5 py-2.5">
                        <div className="text-[11px] text-zinc-500">{spec.label}</div>
                        <div className="text-xs font-mono font-medium text-zinc-900 mt-0.5 truncate">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clean Actions */}
                  <div className="pt-1 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onSelectSolution(solution)}
                      className="px-4 py-2 text-xs font-medium text-white bg-zinc-950 hover:bg-zinc-800 rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <span>Xem thông số chi tiết</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-medium text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 whitespace-nowrap cursor-pointer"
                    >
                      <span>Yêu cầu báo giá</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
