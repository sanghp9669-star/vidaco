import React, { useState } from 'react';
import { Activity, ShieldCheck, Wifi, Cpu, Play, CheckCircle2, RefreshCw } from 'lucide-react';

export const NetworkProberWidget: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(100);
  const [selectedMetric, setSelectedMetric] = useState<'latency' | 'throughput' | 'security'>('latency');

  const runDiagnostic = () => {
    setIsRunning(true);
    setProgress(15);

    const timer1 = setTimeout(() => setProgress(55), 400);
    const timer2 = setTimeout(() => setProgress(85), 800);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <div className="relative -mt-6 z-20 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl p-4 sm:p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Activity className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase">
                VIDACO Network Quality & SLA Monitor
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Mô phỏng tiêu chuẩn đường truyền hạ tầng viễn thông doanh nghiệp & SCADA
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={runDiagnostic}
              disabled={isRunning}
              className="px-3.5 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
              <span>{isRunning ? 'Đang đo kiểm...' : 'Đo kiểm kết nối'}</span>
            </button>
          </div>
        </div>

        {/* Progress bar when measuring */}
        {isRunning && (
          <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-emerald-400 h-1.5 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Metric Cards */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-medium">Độ trễ trung bình (VoIP Latency)</span>
              <div className="text-xl font-bold font-mono text-emerald-400 flex items-baseline gap-1">
                <span>{isRunning ? '...' : '< 8.2'}</span>
                <span className="text-xs text-slate-400">ms</span>
              </div>
              <span className="text-[10px] text-slate-400">Chuẩn Contact Center Avaya: Đạt</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-medium">Khả dụng kênh truyền (SLA Uptime)</span>
              <div className="text-xl font-bold font-mono text-blue-400 flex items-baseline gap-1">
                <span>99.999</span>
                <span className="text-xs text-slate-400">%</span>
              </div>
              <span className="text-[10px] text-slate-400">Đường trục Cáp Prysmian & OPGW</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Wifi className="w-4 h-4" />
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-3 border border-slate-700/60 flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] text-slate-400 font-medium">An ninh mạng & Tường lửa</span>
              <div className="text-xl font-bold font-mono text-indigo-400 flex items-baseline gap-1">
                <span>Zero-Day</span>
                <span className="text-xs text-slate-400">Protected</span>
              </div>
              <span className="text-[10px] text-slate-400">Palo Alto Next-Gen Firewall</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
