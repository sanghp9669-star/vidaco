import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Phone, X, Send, User, Bot, ExternalLink, Check, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/viendatData';

interface Message {
  id: string;
  sender: 'user' | 'support';
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'support',
    text: 'Kính chào Quý khách! Viễn Đạt Telecom có thể hỗ trợ tư vấn giải pháp viễn thông hoặc báo giá thiết bị gì cho Quý đơn vị hôm nay?',
    time: 'Vừa xong',
  },
];

const QUICK_TOPICS = [
  'Tư vấn tổng đài Contact Center Avaya',
  'Báo giá phòng họp hội nghị Polycom',
  'Hệ thống SCADA lưới điện RAD',
  'Bảo trì & ứng cứu kỹ thuật 24/7',
];

export const FloatingSupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'channels'>('chat');
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, activeTab, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');

    // Simulate smart support specialist response
    setIsTyping(true);
    setTimeout(() => {
      let reply = 'Cảm ơn Quý khách đã để lại yêu cầu. Đội ngũ kỹ sư chuyên trách giải pháp của Viễn Đạt đã ghi nhận và sẽ liên hệ hỗ trợ kỹ thuật chi tiết tới Quý đơn vị ngay lập tức.';
      
      const lower = text.toLowerCase();
      if (lower.includes('avaya') || lower.includes('contact center') || lower.includes('tổng đài')) {
        reply = 'Về giải pháp Contact Center Avaya: Viễn Đạt là đối tác ủy quyền hàng đầu tại VN, hỗ trợ từ mô hình 20 agents đến hàng ngàn agents đa kênh kèm ghi âm và AI bot. Quý khách vui lòng để lại số điện thoại hoặc email để nhận tài liệu thiết kế và bảng báo giá chi tiết!';
      } else if (lower.includes('polycom') || lower.includes('hội nghị') || lower.includes('họp')) {
        reply = 'Về hệ thống Polycom / Poly: Chúng tôi cung cấp trọn gói từ camera 4K thông minh, micro lọc ồn NoiseBlockAI đến màn hình chuyên dụng và thiết bị đa điểm MCU. Quý khách có thể trải nghiệm trực tiếp tại văn phòng 16/2 ter Đinh Tiên Hoàng, Q.1.';
      } else if (lower.includes('rad') || lower.includes('scada') || lower.includes('recloser') || lower.includes('điện')) {
        reply = 'Về giải pháp RAD & SCADA điện lực: Viễn Đạt là đối tác chiến lược của RAD Communications triển khai kết nối Recloser/LBS cho EVN theo chuẩn IEC 61850 và IEC 104. Kỹ sư của chúng tôi sẵn sàng khảo sát hiện trường.';
      } else if (lower.includes('bảo trì') || lower.includes('sự cố') || lower.includes('kỹ thuật')) {
        reply = 'Hotline hỗ trợ ứng cứu sự cố viễn thông 24/7 của chúng tôi là (028) 3911 8909. Chúng tôi cam kết phản hồi trong vòng 15 phút theo chuẩn SLA.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'support',
          text: reply,
          time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Floating Chat & Channel Box */}
      {isOpen && (
        <div className="mb-3 w-[92vw] max-w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-base">
                  V
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-blue-700 rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  Viễn Đạt Support Center
                </h4>
                <p className="text-[11px] text-blue-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                  Kỹ sư trực tuyến 24/7
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-blue-200 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Đóng cửa sổ hỗ trợ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeTab === 'chat'
                  ? 'border-blue-700 text-blue-700 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Chat trực tuyến
            </button>
            <button
              onClick={() => setActiveTab('channels')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeTab === 'channels'
                  ? 'border-blue-700 text-blue-700 bg-white'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              Zalo / Hotline / WhatsApp
            </button>
          </div>

          {/* Tab 1: Live Chat Content */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[340px]">
              {/* Message History */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/50 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-700 text-white rounded-br-xs'
                          : 'bg-white text-slate-800 border border-slate-200 shadow-2xs rounded-bl-xs'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {msg.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-1.5 text-slate-400 bg-white border border-slate-200 px-3 py-2 rounded-xl w-fit">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                    <span className="text-[11px] ml-1 text-slate-500">Chuyên viên đang nhập...</span>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Prompt Chips */}
              <div className="px-3 py-2 bg-slate-100/70 border-t border-slate-200 flex gap-1.5 overflow-x-auto no-scrollbar">
                {QUICK_TOPICS.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(topic)}
                    className="whitespace-nowrap px-2.5 py-1 text-[11px] font-medium bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 rounded-full transition-colors shrink-0"
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Nhập nội dung cần hỗ trợ..."
                  className="flex-1 text-xs px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-600 bg-slate-50 focus:bg-white"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-blue-700 hover:bg-blue-800 disabled:bg-slate-300 text-white rounded-lg transition-colors shrink-0"
                  aria-label="Gửi tin nhắn"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Fast Channels (Zalo, Hotline, WhatsApp) */}
          {activeTab === 'channels' && (
            <div className="p-4 space-y-3 h-[340px] overflow-y-auto bg-slate-50/50">
              <p className="text-xs text-slate-600 leading-relaxed">
                Kết nối trực tiếp với chuyên viên tư vấn kỹ thuật Viễn Đạt qua các kênh liên lạc nhanh:
              </p>

              {/* Zalo Support */}
              <a
                href="https://zalo.me/02839118909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shrink-0">
                    Zalo
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">
                      Zalo Official Account
                    </div>
                    <div className="text-[11px] text-slate-500">Tư vấn báo giá & hồ sơ kỹ thuật</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0" />
              </a>

              {/* WhatsApp Support */}
              <a
                href="https://wa.me/842839118909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-white hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    WA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">
                      WhatsApp Enterprise
                    </div>
                    <div className="text-[11px] text-slate-500">Hỗ trợ khách hàng quốc tế & FDI</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
              </a>

              {/* Phone Hotline 1 */}
              <a
                href={`tel:${COMPANY_INFO.hotlines[0].replace(/\D/g, '')}`}
                className="flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Hotline: {COMPANY_INFO.hotlines[0]}
                    </div>
                    <div className="text-[11px] text-slate-500">Phòng kinh doanh & dự án</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Gọi ngay
                </span>
              </a>

              {/* Phone Hotline 2 */}
              <a
                href={`tel:${COMPANY_INFO.hotlines[1].replace(/\D/g, '')}`}
                className="flex items-center justify-between p-3.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Kỹ thuật: {COMPANY_INFO.hotlines[1]}
                    </div>
                    <div className="text-[11px] text-slate-500">Trực ban ứng cứu sự cố 24/7</div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                  Gọi ngay
                </span>
              </a>
            </div>
          )}

          {/* Footer note */}
          <div className="bg-slate-100 px-3.5 py-2 text-[10px] text-slate-500 text-center border-t border-slate-200">
            {COMPANY_INFO.shortName} · Phục vụ khách hàng 24/7 toàn quốc
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button with subtle outer pulse ring */}
      <div className="relative">
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-blue-500/40 animate-ping pointer-events-none" />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 focus:outline-none"
          aria-label="Mở kênh hỗ trợ trực tuyến"
        >
          <div className="relative">
            {isOpen ? (
              <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
            ) : (
              <MessageSquare className="w-5 h-5" />
            )}
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-blue-700 rounded-full" />
          </div>

          <span className="text-xs font-bold whitespace-nowrap tracking-wide">
            {isOpen ? 'Đóng hỗ trợ' : 'Hỗ trợ trực tuyến'}
          </span>
        </button>
      </div>
    </div>
  );
};
