import React from 'react';
import { COMPANY_INFO } from '../data/viendatData';
import { Building2, Award, Users2, ShieldCheck, Target, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="gioi-thieu" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                Về chúng tôi
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
                Hơn 24 Năm Tiên Phong Trong Ngành Viễn Thông & Công Nghệ
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              <strong>Công ty TNHH Thương Mại và Dịch Vụ Viễn Đạt (VIDACO)</strong> được thành lập từ
              tháng 5 năm 2001. Trải qua hơn hai thập kỷ hình thành và phát triển vững chắc, Viễn Đạt đã
              khẳng định vị thế là một trong những đơn vị tích hợp hệ thống viễn thông, mạng doanh nghiệp
              và tự động hóa lưới điện uy tín hàng đầu tại Việt Nam.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Chúng tôi luôn bám sát sứ mệnh cung cấp các sản phẩm, giải pháp và dịch vụ thông minh mang
              lại hiệu quả vận hành tối ưu với chi phí hợp lý. Toàn bộ đội ngũ chuyên gia và kỹ sư của
              Viễn Đạt được đào tạo bài bản và liên tục được cấp chứng nhận quốc tế từ các hãng công nghệ
              toàn cầu như Avaya, Polycom, RAD, Juniper, HPE và Palo Alto Networks.
            </p>

            {/* Core Values grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <h3 className="text-sm font-bold text-slate-900">Chính xác & Chuyên nghiệp</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tuân thủ nghiêm ngặt tiêu chuẩn kỹ thuật quốc tế và cam kết tiến độ.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                <h3 className="text-sm font-bold text-slate-900">Chất lượng Hàng đầu</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Cung cấp 100% thiết bị chính hãng, đầy đủ hồ sơ kiểm định CO/CQ.
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <HeartHandshake className="w-5 h-5 text-red-600 mb-2" />
                <h3 className="text-sm font-bold text-slate-900">Đồng hành Bền vững</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Dịch vụ hậu mãi tận tâm và hỗ trợ bảo trì kỹ thuật trọn đời dự án.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key facts / Company details box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-xl">
                  V
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {COMPANY_INFO.name}
                  </h3>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Thương hiệu giao dịch: <strong>{COMPANY_INFO.codeName}</strong>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase">Năm thành lập</div>
                  <div className="text-slate-900 font-bold text-base mt-0.5 font-mono">
                    Tháng 05/2001 ({COMPANY_INFO.experienceYears} năm hoạt động)
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase">Mã số thuế</div>
                  <div className="text-slate-900 font-semibold mt-0.5 font-mono">
                    {COMPANY_INFO.taxCode}
                  </div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase">Trụ sở chính</div>
                  <div className="text-slate-800 mt-0.5">{COMPANY_INFO.headquarters}</div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase">Văn phòng giao dịch</div>
                  <div className="text-slate-800 mt-0.5">{COMPANY_INFO.tradingOffice}</div>
                </div>

                <div>
                  <div className="text-slate-400 text-xs font-semibold uppercase">Lĩnh vực then chốt</div>
                  <div className="text-slate-800 mt-0.5">
                    Viễn thông, Truyền thông hợp nhất, Tổng đài thông minh, SCADA điều khiển trạm điện, Cáp quang và An ninh mạng.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="#lien-he"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  Liên hệ trao đổi hợp tác
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
