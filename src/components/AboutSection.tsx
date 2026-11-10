import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/viendatData';
import { Target, ShieldCheck, HeartHandshake, CheckCircle2, Award, Zap, Users, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'milestones'>('profile');

  const MILESTONES = [
    { year: '2001', title: 'Thành lập VIDACO', desc: 'Công ty TNHH TM & DV Viễn Đạt chính thức thành lập tại Quận 1, TP.HCM.' },
    { year: '2008', title: 'Đối tác chiến lược Avaya & Polycom', desc: 'Độc quyền phân phối và tích hợp hệ thống Contact Center & Telepresence cao cấp.' },
    { year: '2016', title: 'Hợp tác RAD & EVN SCADA', desc: 'Triển khai mạng viễn thông tự động hóa lưới điện phân phối hàng đầu cho EVN.' },
    { year: 'Hiện tại', title: 'Hệ sinh thái Viễn thông 4.0', desc: 'Mở rộng hạ tầng cáp Prysmian, bảo mật Palo Alto và AIOps thế hệ mới.' },
  ];

  return (
    <section id="gioi-thieu" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping inline-block" />
            Về chúng tôi · 24 Năm Phát Triển Vững Bền
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Tiên Phong Công Nghệ Viễn Thông & Tự Động Hóa Doanh Nghiệp
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Hơn 24 năm kinh nghiệm đồng hành cùng các tập đoàn lớn, ngân hàng và tổng công ty điện lực,
            Viễn Đạt luôn duy trì chuẩn mực cao nhất về năng lực kỹ thuật và chất lượng bàn giao.
          </p>
        </div>

        {/* 2-Column Split: Image on Left + Interactive Story on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Authentic Lab Image with Visual Badges */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group h-full min-h-[380px]">
              <img
                src="/src/assets/images/about_telecom_engineers_1794294802928.jpg"
                alt="Đội ngũ kỹ sư viễn thông Viễn Đạt đo kiểm hệ thống phòng Lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Lab Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/85 backdrop-blur-md border border-slate-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Phòng Lab Đo Kiểm & Nghiên Cứu Đạt Chuẩn Quốc Tế</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-slate-200 shadow-lg text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-blue-700 uppercase">Đội ngũ kỹ sư tinh hoa</div>
                    <div className="text-sm font-semibold text-slate-800 mt-0.5">
                      100% đạt chứng chỉ chuyên sâu Avaya, Poly, Juniper, RAD
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">
                    24+
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tabs & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-slate-200/80 rounded-xl w-fit">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'profile'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Hồ sơ năng lực
              </button>
              <button
                onClick={() => setActiveTab('milestones')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'milestones'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Cột mốc lịch sử
              </button>
            </div>

            {activeTab === 'profile' ? (
              <div className="space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Công ty TNHH Thương Mại và Dịch Vụ Viễn Đạt (VIDACO)</strong> được thành lập từ
                  tháng 5 năm 2001. Chúng tôi cung ứng giải pháp viễn thông trọn gói từ tư vấn thiết kế,
                  nhập khẩu chính ngạch, cấu hình tích hợp đến chuyển giao công nghệ cho các cơ quan nhà nước,
                  tập đoàn viễn thông và doanh nghiệp hàng đầu.
                </p>

                {/* 3 Core Value Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
                    <Target className="w-5 h-5 text-blue-600 mb-2" />
                    <h3 className="text-xs font-bold text-slate-900">Chính xác & Tiêu chuẩn</h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Đạt các tiêu chuẩn viễn thông quốc tế ITU-T, IEEE, IEC 61850.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-emerald-400 transition-colors">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 mb-2" />
                    <h3 className="text-xs font-bold text-slate-900">Chính hãng 100%</h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Nhập khẩu nguyên chiếc kèm đầy đủ hồ sơ pháp lý CO, CQ.
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-rose-400 transition-colors">
                    <HeartHandshake className="w-5 h-5 text-rose-600 mb-2" />
                    <h3 className="text-xs font-bold text-slate-900">SLA 24/7 Tận tâm</h3>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Trực ban ứng cứu sự cố hạ tầng kỹ thuật cam kết 15 phút.
                    </p>
                  </div>
                </div>

                {/* Company Specs strip */}
                <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Mã số thuế doanh nghiệp:</span>
                    <span className="font-mono font-bold text-slate-800">{COMPANY_INFO.taxCode}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Văn phòng giao dịch:</span>
                    <span className="font-medium text-slate-800">{COMPANY_INFO.tradingOffice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Trụ sở chính đăng ký:</span>
                    <span className="font-medium text-slate-800">{COMPANY_INFO.headquarters}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {MILESTONES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-xs flex items-start gap-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="px-2.5 py-1 rounded bg-blue-100/80 text-blue-800 font-mono font-bold text-xs shrink-0">
                      {item.year}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Link CTA */}
            <div className="pt-2 flex items-center justify-between">
              <a
                href="#lien-he"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 group"
              >
                <span>Tải hồ sơ năng lực doanh nghiệp (Company Profile)</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
