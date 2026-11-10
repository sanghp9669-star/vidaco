import React from 'react';
import { Solution } from '../data/viendatData';
import { X, CheckCircle2, Award, Cpu, ShieldAlert, ArrowRight } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8">
        {/* Modal Header */}
        <div className="relative bg-slate-900 text-white p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-600/30 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Đối tác công nghệ: {solution.partnerBrand}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white pr-8">
            {solution.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {solution.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Main image */}
          <div className="rounded-xl overflow-hidden aspect-[16/9] border border-slate-200 bg-slate-900">
            <img
              src={solution.image}
              alt={solution.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Tổng quan kỹ thuật
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {solution.detailedDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Tính năng nổi bật & Năng lực vận hành
            </h4>
            <div className="space-y-2">
              {solution.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specs Table */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Thông số & Tiêu chuẩn kỹ thuật
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-100">
                  {solution.specs.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-4 py-2.5 font-medium text-slate-500 w-1/3 bg-slate-50/50">
                        {item.label}
                      </td>
                      <td className="px-4 py-2.5 font-semibold text-slate-900 font-mono">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Practical Applications */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Lĩnh vực ứng dụng thực tế
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-600">
              {solution.applications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900"
          >
            Đóng
          </button>
          <button
            onClick={() => {
              onRequestQuote(solution.id);
              onClose();
            }}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center gap-2 transition-colors active:scale-95"
          >
            <span>Yêu cầu tư vấn giải pháp này</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
