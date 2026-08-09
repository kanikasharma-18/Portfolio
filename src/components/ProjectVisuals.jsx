import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaCheckCircle, FaExchangeAlt, FaTerminal, FaPlay, FaPause, FaBrain, FaChartLine, FaLock } from 'react-icons/fa';

export function PeerMeshVisual() {
  const [packetPos, setPacketPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketPos((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-44 rounded-xl bg-zinc-950/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3.5 group-hover:border-cyan-500/30 transition-all duration-500 select-none">
      {/* Background Subtle Grid Effect */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase">P2P Channel Active</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] font-mono text-cyan-200">
          <FaLock className="w-2.5 h-2.5" />
          <span>E2E Encrypted</span>
        </div>
      </div>

      {/* Middle Connection Diagram */}
      <div className="relative z-10 my-auto flex items-center justify-between px-2">
        {/* Node 1 */}
        <div className="flex flex-col items-center gap-1">
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-cyan-500/30 text-cyan-400 shadow-[0_0_12px_rgba(56,189,248,0.15)] group-hover:scale-105 transition-transform">
            <FaNetworkWired className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-slate-400">Peer A</span>
        </div>

        {/* Transfer Line */}
        <div className="relative flex-1 mx-3 h-0.5 bg-slate-800 rounded flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/60 to-blue-500/30" />
          
          {/* Animated Packet */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#38bdf8] flex items-center justify-center"
            style={{ left: `${packetPos}%` }}
          >
            <span className="w-1 h-1 rounded-full bg-white" />
          </div>
        </div>

        {/* Node 2 */}
        <div className="flex flex-col items-center gap-1">
          <div className="p-2.5 rounded-lg bg-zinc-900 border border-blue-500/30 text-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.15)] group-hover:scale-105 transition-transform">
            <FaExchangeAlt className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-mono text-slate-400">Peer B</span>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
        <span className="text-slate-400 flex items-center gap-1">
          <FaCheckCircle className="text-cyan-400 w-3 h-3" /> 14.8 MB/s
        </span>
        <span className="text-cyan-300/80">WebRTC DataChannel</span>
      </div>
    </div>
  );
}

export function AlgoScopeVisual() {
  const [bars, setBars] = useState([35, 65, 25, 85, 45, 95, 55, 75, 40, 90]);
  const [activeIdx, setActiveIdx] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % bars.length);
    }, 450);
    return () => clearInterval(interval);
  }, [bars.length]);

  return (
    <div className="relative w-full h-44 rounded-xl bg-zinc-950/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3.5 group-hover:border-blue-500/30 transition-all duration-500 select-none">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Top Header Mockup */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <FaTerminal className="text-blue-400 w-3 h-3" />
          <span className="text-slate-200 font-semibold">QuickSort Visualizer</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
          O(n log n)
        </span>
      </div>

      {/* Bars Chart */}
      <div className="relative z-10 my-auto h-20 flex items-end justify-between gap-1.5 px-2 pt-2">
        {bars.map((height, idx) => {
          const isActive = idx === activeIdx || idx === (activeIdx + 1) % bars.length;
          return (
            <div key={idx} className="relative flex-1 flex flex-col items-center h-full justify-end">
              <motion.div
                className={`w-full rounded-t-sm transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-t from-cyan-500 to-cyan-300 shadow-[0_0_12px_#38bdf8]' 
                    : 'bg-slate-800/90 group-hover:bg-slate-700/80'
                }`}
                style={{ height: `${height}%` }}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom Status Controls */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-cyan-400">Step {activeIdx + 1}/10</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400">Compare & Swap</span>
        </div>
        <span className="text-blue-400 font-semibold">60 FPS</span>
      </div>
    </div>
  );
}

export function AIDashboardVisual() {
  return (
    <div className="relative w-full h-44 rounded-xl bg-zinc-950/80 border border-white/10 overflow-hidden flex flex-col justify-between p-3.5 group-hover:border-cyan-500/30 transition-all duration-500 select-none">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-2">
          <FaBrain className="text-cyan-400 w-3.5 h-3.5" />
          <span className="text-slate-200 font-semibold">Hugging Face API</span>
        </div>
        <div className="flex items-center gap-1 text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 rounded-full text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>Inference Ready</span>
        </div>
      </div>

      {/* Prompt / Response Card Mockup */}
      <div className="relative z-10 my-auto p-2.5 rounded-lg bg-slate-900/80 border border-white/5 space-y-1.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span className="text-cyan-400">&gt; Prompt:</span>
          <span>Latency: 42ms</span>
        </div>
        <p className="text-[11px] font-mono text-slate-300 truncate">
          &quot;Analyze real-time data stream and predict anomaly score...&quot;
        </p>
        
        {/* Token Progress Bar */}
        <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            initial={{ width: "30%" }}
            animate={{ width: ["30%", "85%", "60%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Bottom Metrics */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1 text-slate-300">
          <FaChartLine className="text-cyan-400 w-3 h-3" /> 1,240 tokens/s
        </span>
        <span className="text-cyan-400 font-semibold">99.4% Accuracy</span>
      </div>
    </div>
  );
}
