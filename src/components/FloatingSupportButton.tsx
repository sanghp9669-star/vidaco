import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Phone, X, Send, ArrowUpRight } from 'lucide-react';
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
    text: 'Xin chào Quý khách. Đội ngũ kỹ sư Viễn Đạt sẵn sàng hỗ trợ tư vấn giải pháp và báo giá thiết bị.',
    time: 'Hiện tại',
  },
];

const QUICK_TOPICS = [
  'Tổng đài Contact Center Avaya',
  'Hội nghị truyền hình Polycom',
  'Hệ thống SCADA lưới điện RAD',
  'Hỗ trợ kỹ thuật 24/7',
];

export const FloatingSupportButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'chat' | 'channels'>('chat');
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

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

    setIsTyping(true);
    setTimeout(() => {
      let reply =
        'Cảm ơn Quý khách. Yêu cầu đã được ghi nhận, kỹ sư phụ trách sẽ phản hồi thông tin kỹ thuật và báo giá qua email hoặc điện thoại của Quý khách.';

      const lower = text.toLowerCase();
      if (lower.includes('avaya') || lower.includes('contact center') || lower.includes('tổng đài')) {
        reply =
          'Với Avaya Contact Center: Viễn Đạt triển khai từ 20 đến hàng nghìn agents đa kênh (thoại, chat, email) kèm ghi âm chuẩn tài chính. Quý khách có thể để lại SĐT/Email để nhận kiến trúc mẫu.';
      } else if (lower.includes('polycom') || lower.includes('hội nghị') || lower.includes('họp')) {
        reply =
          'Với Polycom 4K: Chúng tôi thiết kế trọn gói thiết bị đầu cuối, micro lọc ồn NoiseBlockAI và hệ thống đa điểm MCU. Có thể demo trực tiếp tại văn phòng 16/2 ter Đinh Tiên Hoàng, Q.1.';
      } else if (lower.includes('rad') || lower.includes('scada') || lower.includes('điện')) {
        reply =
          'Với giải pháp RAD SCADA: Viễn Đạt cung cấp thiết bị kết nối Recloser/LBS chuẩn IEC 61850 & IEC 104 cho các đơn vị điện lực EVN.';
      } else if (lower.includes('kỹ thuật') || lower.includes('24/7')) {
        reply =
          'Hotline trực ban ứng cứu sự cố 24/7: (028) 3911 8909. Thời gian tiếp nhận cam kết dưới 15 phút theo SLA.';
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
    }, 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-[90vw] max-w-[360px] bg-white rounded-xl shadow-xl border border-zinc-200 overflow-hidden">
          {/* Quiet Monochrome Header */}
          <div className="bg-zinc-950 text-white px-4 py-3.5 flex items-center justify-between">
            <div>
              <h4 className="text-xs font-semibold text-white">
                Hỗ trợ kỹ thuật Viễn Đạt
              </h4>
              <p className="text-[11px] text-zinc-400 mt-0.5">
                Phản hồi trực tuyến · 24/7
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Đóng hộp thoại hỗ trợ"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Segmented Tabs */}
          <div className="flex border-b border-zinc-200 bg-zinc-50 text-xs font-medium">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
                activeTab === 'chat'
                  ? 'border-zinc-950 text-zinc-950 bg-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Chat trực tuyến
            </button>
            <button
              onClick={() => setActiveTab('channels')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 cursor-pointer ${
                activeTab === 'channels'
                  ? 'border-zinc-950 text-zinc-950 bg-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Zalo / WhatsApp / Hotline
            </button>
          </div>

          {activeTab === 'chat' && (
            <div className="flex flex-col h-[320px]">
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-white text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-3 py-2 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-zinc-950 text-white'
                          : 'bg-zinc-100 text-zinc-800'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-1">
                      {msg.time}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="text-[11px] text-zinc-500 bg-zinc-100 px-3 py-2 rounded-lg w-fit">
                    Đang nhập phản hồi...
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Topic Buttons */}
              <div className="px-3 py-2 bg-zinc-50 border-t border-zinc-200 flex gap-1.5 overflow-x-auto no-scrollbar">
                {QUICK_TOPICS.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(topic)}
                    className="whitespace-nowrap px-2.5 py-1 text-[11px] font-medium bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200 rounded-md transition-colors shrink-0 cursor-pointer"
                  >
                    {topic}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-2.5 bg-white border-t border-zinc-200 flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Nhập câu hỏi kỹ thuật..."
                  className="flex-1 text-xs px-3 py-2 rounded-lg border border-zinc-300 focus:outline-none focus:border-zinc-950 bg-white"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="p-2 bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-200 text-white rounded-lg transition-colors shrink-0 cursor-pointer"
                  aria-label="Gửi tin nhắn"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {activeTab === 'channels' && (
            <div className="p-3.5 divide-y divide-zinc-200 h-[320px] overflow-y-auto bg-white">
              <a
                href="https://zalo.me/02839118909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-2 hover:bg-zinc-50 rounded-lg transition-colors group"
              >
                <div>
                  <div className="text-xs font-semibold text-zinc-950">Zalo Official</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Trao đổi hồ sơ kỹ thuật & báo giá</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
              </a>

              <a
                href="https://wa.me/842839118909"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-3 px-2 hover:bg-zinc-50 rounded-lg transition-colors group"
              >
                <div>
                  <div className="text-xs font-semibold text-zinc-950">WhatsApp Enterprise</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Hỗ trợ đối tác & doanh nghiệp FDI</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.hotlines[0].replace(/\D/g, '')}`}
                className="flex items-center justify-between py-3 px-2 hover:bg-zinc-50 rounded-lg transition-colors group"
              >
                <div>
                  <div className="text-xs font-semibold text-zinc-950 font-mono">
                    {COMPANY_INFO.hotlines[0]}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Phòng kinh doanh & dự án</div>
                </div>
                <Phone className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.hotlines[1].replace(/\D/g, '')}`}
                className="flex items-center justify-between py-3 px-2 hover:bg-zinc-50 rounded-lg transition-colors group"
              >
                <div>
                  <div className="text-xs font-semibold text-zinc-950 font-mono">
                    {COMPANY_INFO.hotlines[1]}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Trực ban kỹ thuật SLA 24/7</div>
                </div>
                <Phone className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950" />
              </a>
            </div>
          )}
        </div>
      )}

      {/* Restrained Linear/Vercel-grade Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-800 rounded-full shadow-md transition-colors cursor-pointer"
        aria-label="Mở hỗ trợ trực tuyến"
      >
        {isOpen ? <X className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
        <span className="text-xs font-medium whitespace-nowrap">
          {isOpen ? 'Đóng' : 'Hỗ trợ trực tuyến'}
        </span>
      </button>
    </div>
  );
};
