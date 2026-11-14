import React, { useState } from 'react';
import { PARTNERS, Partner } from '../data/viendatData';
import { ArrowUpRight } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<Partner>(PARTNERS[0]);

  return (
    <section id="doi-tac" className="py-20 lg:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-medium text-blue-700">
            Hệ sinh thái đối tác toàn cầu
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-[-0.025em] text-balance">
            Nhà phân phối và tích hợp chính thức của các hãng công nghệ hàng đầu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Thiết bị được nhập khẩu chính ngạch với đầy đủ chứng nhận xuất xứ CO/CQ và bảo hành trực
            tiếp theo tiêu chuẩn của nhà sản xuất.
          </p>
        </div>

        {/* Hairline 4x2 Partner Grid (Vercel / Ramp aesthetic) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-l border-zinc-200">
          {PARTNERS.map((partner) => {
            const isSelected = selectedPartner.name === partner.name;
            return (
              <button
                key={partner.name}
                onClick={() => setSelectedPartner(partner)}
                className={`p-5 sm:p-6 border-r border-b border-zinc-200 text-left transition-colors cursor-pointer flex flex-col justify-between min-h-[116px] ${
                  isSelected
                    ? 'bg-zinc-50'
                    : 'bg-white hover:bg-zinc-50/70'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[11px] font-mono ${
                      isSelected ? 'text-blue-700 font-medium' : 'text-zinc-400'
                    }`}
                  >
                    {partner.badge}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-700" aria-hidden="true" />
                  )}
                </div>

                <div className="mt-4">
                  <div className="text-base font-semibold text-zinc-950 tracking-tight">
                    {partner.name}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5 line-clamp-1">
                    {partner.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Clean Hairline Detail Bar */}
        <div className="mt-6 p-6 sm:p-8 rounded-xl bg-zinc-50 border border-zinc-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="font-mono text-blue-700 font-medium">{selectedPartner.badge}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPartner.category}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-zinc-950 tracking-tight">
              {selectedPartner.name}
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
              {selectedPartner.description} Đội ngũ kỹ sư Viễn Đạt sở hữu chứng chỉ triển khai chính hãng
              và phòng lab kiểm thử độc lập trước khi bàn giao.
            </p>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-zinc-200 lg:pl-6 space-y-2 text-xs text-zinc-600">
            <div className="font-medium text-zinc-950">Tiêu chuẩn bàn giao hãng</div>
            <div>100% linh kiện & thiết bị nguyên đai kiện (CO, CQ)</div>
            <div>Bảo hành chính hãng & hỗ trợ nâng cấp firmware</div>
            <a
              href="#lien-he"
              className="pt-1 inline-flex items-center gap-1 text-blue-700 hover:text-blue-800 font-medium"
            >
              <span>Yêu cầu cấu hình mẫu</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
