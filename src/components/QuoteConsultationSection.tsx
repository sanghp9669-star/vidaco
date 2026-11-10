import React, { useState } from 'react';
import { COMPANY_INFO, SOLUTIONS } from '../data/viendatData';
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';

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

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Vui lòng nhập họ và tên của bạn';
    if (!formData.company.trim()) errs.company = 'Vui lòng nhập tên công ty / đơn vị';
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại liên hệ';
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
    <section id="lien-he" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details & Viendat Offices */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                Đồng hành cùng doanh nghiệp
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
                Liên Hệ Tư Vấn & Nhận Báo Giá Dự Án
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Đội ngũ chuyên gia kỹ sư của Viễn Đạt sẵn sàng khảo sát thực tế hiện trường và tư vấn
                kiến trúc giải pháp kỹ thuật viễn thông tối ưu nhất cho quý đơn vị.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">
                    Đường dây nóng hỗ trợ (Hotlines)
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 font-bold text-slate-900 font-mono text-sm sm:text-base">
                    {COMPANY_INFO.hotlines.map((num, i) => (
                      <a
                        key={i}
                        href={`tel:${num.replace(/\D/g, '')}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {num}
                      </a>
                    ))}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">Fax: {COMPANY_INFO.fax}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Email liên hệ</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-1 inline-block font-bold text-slate-900 text-sm sm:text-base hover:text-blue-700 transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <div className="text-xs text-slate-500 mt-0.5">Phản hồi báo giá trong 24 giờ</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm space-y-2">
                  <div>
                    <div className="font-semibold text-slate-900">Văn phòng giao dịch:</div>
                    <div className="text-slate-600 mt-0.5">{COMPANY_INFO.tradingOffice}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Trụ sở chính:</div>
                    <div className="text-slate-600 mt-0.5">{COMPANY_INFO.headquarters}</div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase">Thời gian làm việc</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                    {COMPANY_INFO.workingHours}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn Quý khách đã quan tâm đến giải pháp của <strong>Viễn Đạt Telecom</strong>.
                    Chuyên viên kỹ thuật phụ trách dự án sẽ liên hệ lại với Quý khách qua số điện thoại{' '}
                    <strong className="text-slate-900">{formData.phone}</strong> trong thời gian sớm nhất.
                  </p>
                  <div className="pt-4">
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
                      className="px-5 py-2.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      Gửi thêm yêu cầu khác
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-lg font-bold text-slate-900">
                      Phiếu Yêu Cầu Tư Vấn & Báo Giá Thiết Bị
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Vui lòng điền thông tin để đội ngũ kỹ sư Viễn Đạt chuẩn bị hồ sơ kỹ thuật tốt nhất.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Họ và tên người liên hệ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Tên công ty / Cơ quan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Công ty Cổ phần / Ngân hàng..."
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.company ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Số điện thoại liên lạc <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0912 345 678"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email doanh nghiệp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ten@doanhnghiep.vn"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Solution selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Giải pháp công nghệ quan tâm
                      </label>
                      <select
                        value={formData.solutionId}
                        onChange={(e) => setFormData({ ...formData, solutionId: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        {SOLUTIONS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title} ({s.partnerBrand})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Quy mô dự án dự kiến
                      </label>
                      <select
                        value={formData.projectScale}
                        onChange={(e) => setFormData({ ...formData, projectScale: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
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

                  {/* Note / Scope */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mô tả chi tiết yêu cầu kỹ thuật & tiến độ
                    </label>
                    <textarea
                      rows={3}
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Ví dụ: Cần triển khai hệ thống tổng đài Contact Center 80 agents tích hợp CRM hiện hữu, thời gian dự kiến trong quý 2..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Gửi yêu cầu khảo sát & nhận báo giá</span>
                    </button>
                    <p className="text-[11px] text-slate-500 text-center mt-2">
                      Thông tin của Quý khách được Viễn Đạt bảo mật tuyệt đối theo quy định pháp luật.
                    </p>
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
