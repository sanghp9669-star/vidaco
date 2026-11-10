import React, { useState } from 'react';
import { PARTNERS, Partner } from '../data/viendatData';
import { Award, ChevronRight, Check } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner>(PARTNERS[0]);

  return (
    <section id="doi-tac" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">
            Hợp tác chiến lược toàn cầu
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Đối Tác Công Nghệ Hàng Đầu Thế Giới
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Viễn Đạt tự hào là nhà phân phối và đối tác tích hợp hệ thống chính thức của các tập đoàn
            công nghệ viễn thông, mạng và năng lượng hàng đầu thế giới tại Việt Nam.
          </p>
        </div>

        {/* Partners Grid / Interactive selector */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {PARTNERS.map((partner) => {
            const isSelected = selectedPartner.name === partner.name;
            return (
              <button
                key={partner.name}
                onClick={() => setSelectedPartner(partner)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/60 shadow-sm ring-1 ring-blue-600'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/70 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-medium text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                    {partner.badge}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                </div>
                <div className="text-base font-bold text-slate-900">{partner.name}</div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">{partner.category}</div>
              </button>
            );
          })}
        </div>

        {/* Active Partner Spotlight Card */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Chi tiết năng lực đối tác phân phối</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {selectedPartner.name} · {selectedPartner.category}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {selectedPartner.description} Viễn Đạt sở hữu đội ngũ chuyên gia được đào tạo chính hãng
                và trang bị đầy đủ thiết bị đo kiểm, phòng lab đạt chuẩn nhằm đảm bảo hệ thống triển
                khai vận hành với độ ổn định tối đa.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 text-xs text-slate-200 space-y-1.5">
                <div className="font-semibold text-white">Cam kết từ Viễn Đạt:</div>
                <div>✓ 100% Linh kiện & Thiết bị nguồn gốc chính hãng</div>
                <div>✓ Bảo hành theo tiêu chuẩn nhà sản xuất quốc tế</div>
                <div>✓ Hỗ trợ kỹ thuật trực tiếp từ chuyên gia của Hãng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
