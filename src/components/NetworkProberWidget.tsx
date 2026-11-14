import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

type ProfileKey = 'avaya' | 'polycom' | 'rad';

const BENCHMARK_PROFILES: Record<
  ProfileKey,
  {
    label: string;
    standard: string;
    latency: string;
    availability: string;
    compliance: string;
  }
> = {
  avaya: {
    label: 'Contact Center (Avaya)',
    standard: 'SIP / WebRTC Multi-Channel',
    latency: '< 8.2 ms',
    availability: '99.999%',
    compliance: 'PCI-DSS & Ghi âm 100%',
  },
  polycom: {
    label: 'Hội nghị 4K (Polycom)',
    standard: 'H.323 / SIP AES-256',
    latency: '< 12.0 ms',
    availability: '99.99%',
    compliance: 'Acoustic Fence 22 kHz',
  },
  rad: {
    label: 'SCADA Điện lực (RAD)',
    standard: 'IEC 61850 / IEC 104',
    latency: '< 5.4 ms',
    availability: '99.999%',
    compliance: 'IPSec VPN · -40°C đến +75°C',
  },
};

export const NetworkProberWidget: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<ProfileKey>('avaya');
  const [isChecking, setIsChecking] = useState(false);

  const runCheck = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
    }, 650);
  };

  const current = BENCHMARK_PROFILES[activeProfile];

  return (
    <section className="bg-zinc-50 border-b border-zinc-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-zinc-200 rounded-xl p-5 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-zinc-200">
            <div>
              <div className="text-xs font-medium text-zinc-500">
                Thông số cam kết vận hành (SLA Benchmark)
              </div>
              <div className="text-sm font-semibold text-zinc-950 mt-0.5">
                Kiểm chuẩn hạ tầng theo từng phân hệ giải pháp
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center p-1 bg-zinc-100 rounded-lg border border-zinc-200/60">
                {(Object.keys(BENCHMARK_PROFILES) as ProfileKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveProfile(key)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                      activeProfile === key
                        ? 'bg-white text-zinc-950 shadow-2xs'
                        : 'text-zinc-600 hover:text-zinc-950'
                    }`}
                  >
                    {BENCHMARK_PROFILES[key].label}
                  </button>
                ))}
              </div>

              <button
                onClick={runCheck}
                disabled={isChecking}
                className="px-3 py-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-lg transition-colors inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isChecking ? 'animate-spin' : ''}`} />
                <span>{isChecking ? 'Đang kiểm tra...' : 'Kiểm chuẩn'}</span>
              </button>
            </div>
          </div>

          <div className="pt-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-xs text-zinc-500">Giao thức chuẩn</div>
              <div className="text-sm font-mono font-medium text-zinc-950 mt-1">
                {current.standard}
              </div>
            </div>

            <div>
              <div className="text-xs text-zinc-500">Độ trễ mục tiêu</div>
              <div className="text-sm font-mono font-semibold text-blue-700 mt-1 tabular-nums">
                {isChecking ? 'Đang đo...' : current.latency}
              </div>
            </div>

            <div>
              <div className="text-xs text-zinc-500">Độ khả dụng SLA</div>
              <div className="text-sm font-mono font-semibold text-zinc-950 mt-1 tabular-nums">
                {current.availability}
              </div>
            </div>

            <div>
              <div className="text-xs text-zinc-500">Tiêu chuẩn bảo mật</div>
              <div className="text-sm font-mono font-medium text-zinc-950 mt-1">
                {current.compliance}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
