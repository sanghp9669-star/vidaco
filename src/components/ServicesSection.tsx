import React from 'react';
import { SERVICES } from '../data/viendatData';
import { Compass, Layers, ShieldCheck, GraduationCap, CheckCircle } from 'lucide-react';

const iconMap = {
  Compass,
  Layers,
  ShieldCheck,
  GraduationCap,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="dich-vu" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
            Năng lực triển khai & dịch vụ
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Dịch Vụ Kỹ Thuật Viễn Thông Toàn Diện
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Viễn Đạt không chỉ cung ứng phần cứng mà còn đồng hành trọn vòng đời dự án từ khâu khảo sát,
            thiết kế đến bảo trì 24/7, cam kết chất lượng theo tiêu chuẩn khắt khe nhất.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, index) => {
            const Icon = iconMap[srv.iconName as keyof typeof iconMap] || Compass;
            const stepNum = `0${index + 1}`;

            return (
              <div
                key={srv.id}
                className="bg-slate-50/70 hover:bg-slate-50 rounded-2xl p-6 border border-slate-200/80 transition-all hover:border-blue-300 hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      BƯỚC {stepNum}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70">
                  <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Kết quả bàn giao:
                  </div>
                  <ul className="space-y-1.5">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* SLA Guarantee Callout */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Cam kết dịch vụ hỗ trợ ứng cứu sự cố viễn thông SLA 24/7
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Đội ngũ kỹ sư trực sẵn sàng tại TP. Hồ Chí Minh và các trung tâm hỗ trợ khu vực.
              Thời gian tiếp nhận thông tin trong vòng 15 phút, có mặt tại hiện trường xử lý nhanh chóng.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#lien-he"
              className="px-5 py-3 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
            >
              Liên hệ bộ phận kỹ thuật
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
