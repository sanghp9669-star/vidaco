import React from 'react';
import { Solution } from '../data/viendatData';
import { X, ArrowRight } from 'lucide-react';

interface SolutionModalProps {
  solution: Solution | null;
  onClose: () => void;
  onRequestQuote: (solutionId: string) => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  solution,
  onClose,
  onRequestQuote,
}) => {
  if (!solution) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full overflow-hidden border border-zinc-200 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Light Editorial Header */}
        <div className="p-6 border-b border-zinc-200 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-mono font-medium text-blue-700">
              {solution.partnerBrand}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 tracking-tight">
              {solution.title}
            </h3>
            <p className="text-xs text-zinc-500">
              {solution.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="rounded-lg overflow-hidden aspect-[16/9] border border-zinc-200 bg-zinc-100">
            <img
              src={solution.image}
              alt={solution.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="text-xs font-medium text-zinc-400 mb-1.5">
              Tổng quan kỹ thuật
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {solution.detailedDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-zinc-400 mb-2.5">
              Năng lực vận hành
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
              {solution.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-baseline gap-2.5">
                  <span className="text-zinc-400 font-mono text-xs select-none">—</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-zinc-400 mb-2.5">
              Thông số kỹ thuật
            </h4>
            <div className="border border-zinc-200 rounded-lg overflow-hidden divide-y divide-zinc-200 text-xs sm:text-sm">
              {solution.specs.map((item, idx) => (
                <div key={idx} className="grid grid-cols-3 bg-white">
                  <div className="px-3.5 py-2.5 text-zinc-500 bg-zinc-50 border-r border-zinc-200">
                    {item.label}
                  </div>
                  <div className="col-span-2 px-3.5 py-2.5 font-mono font-medium text-zinc-950">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium text-zinc-400 mb-2">
              Phạm vi ứng dụng
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600">
              {solution.applications.map((app, idx) => (
                <li key={idx} className="flex items-baseline gap-2">
                  <span className="text-zinc-400">·</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-3.5 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-950 cursor-pointer"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onRequestQuote(solution.id);
              onClose();
            }}
            className="px-4 py-2 text-xs font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Yêu cầu tư vấn giải pháp này</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
