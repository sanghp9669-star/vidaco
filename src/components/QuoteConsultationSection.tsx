import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SOLUTIONS } from '../data/viendatData';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface QuoteConsultationSectionProps {
  preselectedSolutionId?: string;
}

export const QuoteConsultationSection: React.FC<QuoteConsultationSectionProps> = ({
  preselectedSolutionId,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    solutionId: preselectedSolutionId || 'contact-center',
    projectScale: 'Doanh nghiệp vừa và lớn (100 - 500 nhân sự)',
    note: '',
  });

  useEffect(() => {
    if (preselectedSolutionId) {
      setFormData((prev) => ({ ...prev, solutionId: preselectedSolutionId }));
    }
  }, [preselectedSolutionId]);

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên';
    if (!formData.company.trim()) errs.company = 'Vui lòng nhập tên đơn vị';
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9+\s().-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Số điện thoại không hợp lệ';
    }
    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập địa chỉ email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Địa chỉ email không hợp lệ';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="lien-he" className="py-20 lg:py-28 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Clean Typographic Directory (no colored icon boxes) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-medium text-blue-700">
                Liên hệ dự án
              </div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-[-0.025em] text-balance">
                Trao đổi trực tiếp cùng đội ngũ kỹ sư Viễn Đạt
              </h2>
              <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                Chúng tôi tiếp nhận yêu cầu khảo sát hiện trường, thiết kế phương án kỹ thuật và lập
                dự toán thiết bị chính hãng trong vòng 24 giờ làm việc.
              </p>
            </div>

            <dl className="divide-y divide-zinc-200 border-t border-b border-zinc-200 text-xs sm:text-sm">
              <div className="py-4 space-y-1">
                <dt className="text-xs text-zinc-500">Đường dây nóng (Hotlines)</dt>
                <dd className="font-mono font-semibold text-zinc-950 flex flex-wrap gap-x-4 gap-y-1">
                  {COMPANY_INFO.hotlines.map((num, i) => (
                    <a
                      key={i}
                      href={`tel:${num.replace(/\D/g, '')}`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {num}
                    </a>
                  ))}
                </dd>
                <dd className="text-xs text-zinc-500">Fax: {COMPANY_INFO.fax}</dd>
              </div>

              <div className="py-4 space-y-1">
                <dt className="text-xs text-zinc-500">Email tiếp nhận hồ sơ</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-zinc-950 hover:text-blue-700 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </dd>
              </div>

              <div className="py-4 space-y-1">
                <dt className="text-xs text-zinc-500">Văn phòng giao dịch</dt>
                <dd className="text-zinc-900">{COMPANY_INFO.tradingOffice}</dd>
              </div>

              <div className="py-4 space-y-1">
                <dt className="text-xs text-zinc-500">Trụ sở chính</dt>
                <dd className="text-zinc-900">{COMPANY_INFO.headquarters}</dd>
              </div>

              <div className="py-4 space-y-1">
                <dt className="text-xs text-zinc-500">Thời gian làm việc</dt>
                <dd className="text-zinc-900">{COMPANY_INFO.workingHours}</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Flat Crisp Hairline Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-950 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-950">
                    Đã tiếp nhận yêu cầu tư vấn
                  </h3>
                  <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn Quý khách đã liên hệ <strong className="font-medium text-zinc-950">Viễn Đạt</strong>.
                    Kỹ sư phụ trách giải pháp sẽ liên hệ lại qua số{' '}
                    <span className="font-mono font-medium text-zinc-950">{formData.phone}</span> trong thời gian sớm nhất.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          company: '',
                          phone: '',
                          email: '',
                          solutionId: 'contact-center',
                          projectScale: 'Doanh nghiệp vừa và lớn (100 - 500 nhân sự)',
                          note: '',
                        });
                      }}
                      className="px-4 py-2 text-xs font-medium text-zinc-700 hover:text-zinc-950 border border-zinc-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-zinc-200 pb-4">
                    <h3 className="text-base font-semibold text-zinc-950">
                      Phiếu yêu cầu tư vấn & báo giá
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Vui lòng cung cấp thông tin để bộ phận kỹ thuật chuẩn bị cấu hình phù hợp.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Họ và tên <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className={`w-full px-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-colors ${
                          errors.fullName ? 'border-red-400' : 'border-zinc-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Công ty / Tổ chức <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Tên doanh nghiệp hoặc cơ quan"
                        className={`w-full px-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-colors ${
                          errors.company ? 'border-red-400' : 'border-zinc-300'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Số điện thoại <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0912 345 678"
                        className={`w-full px-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-colors ${
                          errors.phone ? 'border-red-400' : 'border-zinc-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Email công việc <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ten@doanhnghiep.vn"
                        className={`w-full px-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700 transition-colors ${
                          errors.email ? 'border-red-400' : 'border-zinc-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Giải pháp quan tâm
                      </label>
                      <select
                        value={formData.solutionId}
                        onChange={(e) => setFormData({ ...formData, solutionId: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                      >
                        {SOLUTIONS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.partnerBrand})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                        Quy mô dự án
                      </label>
                      <select
                        value={formData.projectScale}
                        onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                      >
                        <option value="Dự án nâng cấp hệ thống phòng họp / phòng lab">
                          Nâng cấp phòng họp / phòng lab
                        </option>
                        <option value="Doanh nghiệp vừa và lớn (100 - 500 nhân sự)">
                          Doanh nghiệp vừa và lớn (100 - 500 nhân sự)
                        </option>
                        <option value="Quy mô tập đoàn / Ngân hàng (> 500 agents/điểm cầu)">
                          Tập đoàn / Ngân hàng (&gt; 500 điểm cầu)
                        </option>
                        <option value="Dự án trạm điện / SCADA lưới điện EVN">
                          Dự án trạm điện / SCADA lưới điện EVN
                        </option>
                        <option value="Dự án trục cáp quang & truyền dẫn viễn thông">
                          Dự án trục cáp quang & truyền dẫn
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1.5">
                      Mô tả yêu cầu kỹ thuật
                    </label>
                    <textarea
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Ví dụ: Cần triển khai hệ thống Contact Center 80 agents tích hợp CRM, thời gian dự kiến quý 2..."
                      className="w-full px-3 py-2 text-sm rounded-lg border border-zinc-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-700/20 focus:border-blue-700"
                    />
                  </div>

                  <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-[11px] text-zinc-500">
                      Thông tin được bảo mật theo quy định của Viễn Đạt.
                    </p>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                    >
                      <span>Gửi yêu cầu</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
