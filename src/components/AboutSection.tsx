import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/viendatData';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'milestones'>('profile');

  const MILESTONES = [
    {
      year: '2001',
      title: 'Thành lập VIDACO',
      desc: 'Công ty TNHH TM & DV Viễn Đạt chính thức thành lập tại Quận 1, TP.HCM.',
    },
    {
      year: '2008',
      title: 'Đối tác chiến lược Avaya & Polycom',
      desc: 'Phân phối và tích hợp hệ thống Contact Center & Telepresence cho khối ngân hàng.',
    },
    {
      year: '2016',
      title: 'Hợp tác RAD & Lưới điện EVN SCADA',
      desc: 'Triển khai mạng viễn thông tự động hóa lưới điện phân phối trên toàn quốc.',
    },
    {
      year: 'Hiện nay',
      title: 'Hạ tầng Viễn thông & An ninh mạng',
      desc: 'Mở rộng giải pháp cáp quang Prysmian, tường lửa Palo Alto và mạng lõi Juniper.',
    },
  ];

  return (
    <section id="gioi-thieu" className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Clean Laboratory Photography without floating cards */}
          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-zinc-200 bg-white aspect-[4/3]">
              <img
                src="/src/assets/images/about_telecom_engineers_1794294802928.jpg"
                alt="Đội ngũ kỹ sư viễn thông Viễn Đạt đo kiểm hệ thống tại phòng lab"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-zinc-500">
              <span>Phòng Lab đo kiểm quang và cấu hình hệ thống Viễn Đạt</span>
              <span className="font-mono">TP. Hồ Chí Minh</span>
            </div>
          </div>

          {/* Right Column: Editorial Story & Hairline Spec Table */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-medium text-blue-700">
                Về chúng tôi
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-[-0.025em] text-balance">
                Hơn 24 năm kinh nghiệm tích hợp hệ thống viễn thông
              </h2>
            </div>

            {/* Segmented Tab Switch */}
            <div className="inline-flex p-1 bg-zinc-200/70 rounded-lg">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeTab === 'profile'
                    ? 'bg-white text-zinc-950 shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Hồ sơ năng lực
              </button>
              <button
                onClick={() => setActiveTab('milestones')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  activeTab === 'milestones'
                    ? 'bg-white text-zinc-950 shadow-2xs'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                Cột mốc phát triển
              </button>
            </div>

            {activeTab === 'profile' ? (
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Thành lập từ tháng 5/2001, <strong className="font-medium text-zinc-950">Công ty TNHH Thương mại và Dịch vụ Viễn Đạt (VIDACO)</strong> cung
                  cấp giải pháp trọn gói từ tư vấn thiết kế, nhập khẩu chính hãng đến triển khai và bảo
                  trì hạ tầng cho khối ngân hàng, ngành điện lực và tập đoàn đa ngành.
                </p>

                {/* Clean 1px Hairline Legal & Corporate Table */}
                <dl className="divide-y divide-zinc-200 border-t border-b border-zinc-200 text-xs sm:text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-zinc-500">Tên pháp lý</dt>
                    <dd className="font-medium text-zinc-950 text-right">{COMPANY_INFO.name}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-zinc-500">Mã số thuế</dt>
                    <dd className="font-mono font-medium text-zinc-950">{COMPANY_INFO.taxCode}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-zinc-500">Năm thành lập</dt>
                    <dd className="font-mono font-medium text-zinc-950">05 / 2001</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-zinc-500 shrink-0">Văn phòng giao dịch</dt>
                    <dd className="text-zinc-800 text-right">{COMPANY_INFO.tradingOffice}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-zinc-500 shrink-0">Trụ sở chính</dt>
                    <dd className="text-zinc-800 text-right">{COMPANY_INFO.headquarters}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
                {MILESTONES.map((item, idx) => (
                  <div key={idx} className="py-3.5 grid grid-cols-12 gap-4 items-baseline">
                    <div className="col-span-3 font-mono text-xs font-semibold text-blue-700">
                      {item.year}
                    </div>
                    <div className="col-span-9 space-y-0.5">
                      <div className="text-sm font-medium text-zinc-950">{item.title}</div>
                      <div className="text-xs text-zinc-600 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div>
              <a
                href="#lien-he"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800 transition-colors"
              >
                <span>Yêu cầu hồ sơ năng lực (Company Profile)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
