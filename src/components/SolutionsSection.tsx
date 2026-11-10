import React, { useState } from 'react';
import { SOLUTIONS, Solution } from '../data/viendatData';
import { ArrowRight, CheckCircle2, ChevronRight, SlidersHorizontal, Sparkles, Shield, Cpu, Zap } from 'lucide-react';

interface SolutionsSectionProps {
  onSelectSolution: (solution: Solution) => void;
  onOpenConsultation: () => void;
}

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
    <section id="giai-phap" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
              Hệ sinh thái công nghệ viễn thông 4.0
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Giải Pháp Trọng Tâm Cho Doanh Nghiệp & Ngành Điện
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Tích hợp hoàn chỉnh từ tổng đài thông minh, hội nghị trực tuyến, kết nối SCADA công nghiệp
              đến hệ thống cáp quang truyền dẫn trục và an ninh mạng thế hệ mới.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-200/80 rounded-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'all'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tất cả ({SOLUTIONS.length})
            </button>
            <button
              onClick={() => setActiveTab('contact-center')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'contact-center'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contact Center (Avaya)
            </button>
            <button
              onClick={() => setActiveTab('video-conference')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'video-conference'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hội nghị (Polycom)
            </button>
            <button
              onClick={() => setActiveTab('grid-automation')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'grid-automation'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SCADA Lưới điện (RAD)
            </button>
            <button
              onClick={() => setActiveTab('network-security')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'network-security'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              An ninh mạng
            </button>
            <button
              onClick={() => setActiveTab('fiber-cabling')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                activeTab === 'fiber-cabling'
                  ? 'bg-white text-blue-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Cáp Prysmian
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="mt-12 space-y-12">
          {filteredSolutions.map((solution, index) => {
            const isReversed = index % 2 === 1;
            const editorialNumber = `0${index + 1}`;

            return (
              <div
                key={solution.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10 ${
                    isReversed ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Visual Column with Smooth Hover Zoom */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? 'lg:col-start-8' : ''
                    }`}
                  >
                    <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3] shadow-md">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-semibold border border-slate-700 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span>Hãng công nghệ: {solution.partnerBrand}</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] text-blue-300 font-mono">VIDACO Certified Solution</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? 'lg:col-start-1' : ''
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold font-mono text-blue-700 tracking-wider">
                        {editorialNumber}. GIẢI PHÁP CHUYÊN NGÀNH
                      </div>
                      <h3 className="mt-1 text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">
                        {solution.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {solution.detailedDesc}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-2 pt-1">
                      {solution.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs quick preview */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-100">
                      {solution.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 group-hover:border-blue-100 transition-colors">
                          <div className="text-[11px] text-slate-500 font-medium">{spec.label}</div>
                          <div className="text-xs font-semibold text-slate-800 mt-0.5 truncate">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onSelectSolution(solution)}
                        className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap active:scale-95"
                      >
                        <span>Xem chi tiết giải pháp</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={onOpenConsultation}
                        className="px-4 py-2.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors whitespace-nowrap"
                      >
                        Nhận báo giá dự án
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
