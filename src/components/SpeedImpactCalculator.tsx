import React, { useState } from 'react';
import { 
  Gauge, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ExternalLink 
} from 'lucide-react';

interface SpeedImpactCalculatorProps {
  onOpenAudit: () => void;
  onOpenCalendly: () => void;
}

export const SpeedImpactCalculator: React.FC<SpeedImpactCalculatorProps> = ({
  onOpenAudit,
  onOpenCalendly,
}) => {
  // Current load time in seconds (slider from 0.5 to 5.0)
  const [loadTime, setLoadTime] = useState<number>(3.8);

  // Derived metrics based on Google Core Web Vitals research:
  // - 1s delay reduces conversions by ~7-20%
  // - Bounce rate spikes heavily after 2.5s
  const calculateMetrics = (time: number) => {
    // Score out of 100
    const lighthouse = Math.max(15, Math.min(99, Math.round(100 - (time - 0.5) * 22)));
    // Bounce rate %
    const bounceRate = Math.min(85, Math.round(18 + Math.pow(time, 1.25) * 11));
    // Conversion rate % (baseline 3.4% at 0.6s)
    const conversionRate = Math.max(0.6, Number((3.6 - (time - 0.6) * 0.72).toFixed(1)));
    
    // Potential lost leads per 1,000 monthly visitors vs 0.6s standard
    const baselineLeads = 36; // 3.6% of 1000
    const currentLeads = Math.round(conversionRate * 10);
    const lostLeads = Math.max(0, baselineLeads - currentLeads);

    return { lighthouse, bounceRate, conversionRate, lostLeads };
  };

  const metrics = calculateMetrics(loadTime);
  const isOptimal = loadTime <= 1.0;

  return (
    <section className="py-24 bg-[#070612] border-t border-[#261d56]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2">
            QUANTITATIVE PERFORMANCE BENCHMARK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            How Much Is a Slow Website Costing You?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Google's Core Web Vitals research shows that a 1-second delay reduces conversions by up to 26%. Drag the slider to simulate the business impact of load speed on your traffic.
          </p>
        </div>

        {/* Simulator Card */}
        <div className="bg-[#0e0b24] p-6 sm:p-10 rounded-3xl border border-[#2c2263] shadow-2xl shadow-purple-950/40 max-w-5xl mx-auto space-y-10">
          
          {/* Slider Control */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <label htmlFor="speed-slider" className="text-sm font-bold text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-purple-400" />
                <span>Simulated Mobile Load Time:</span>
              </label>
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-black font-mono ${isOptimal ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {loadTime.toFixed(1)}s
                </span>
                <span className="text-xs text-slate-400">
                  {isOptimal ? '(Sub-Second Mikky Standard)' : '(Typical Freelancer Build)'}
                </span>
              </div>
            </div>

            <div className="relative pt-1">
              <input
                id="speed-slider"
                type="range"
                min="0.5"
                max="5.0"
                step="0.1"
                value={loadTime}
                onChange={(e) => setLoadTime(parseFloat(e.target.value))}
                className="w-full h-3 bg-[#17113a] rounded-lg appearance-none cursor-pointer accent-purple-500 border border-[#2c2263]"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
                <span className="text-emerald-400 font-semibold">0.5s (Lightning)</span>
                <span>2.0s (Average)</span>
                <span>3.5s (Slow)</span>
                <span className="text-rose-400 font-semibold">5.0s (Critical Dropoff)</span>
              </div>
            </div>
          </div>

          {/* Metrics Outcome Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Lighthouse Score */}
            <div className="p-5 rounded-2xl bg-[#130f2e] border border-[#261d56] text-center space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Lighthouse Score
              </div>
              <div className={`text-3xl sm:text-4xl font-black font-mono ${
                metrics.lighthouse >= 90 ? 'text-emerald-400' : metrics.lighthouse >= 50 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {metrics.lighthouse}/100
              </div>
              <div className="text-[11px] text-slate-400">
                {metrics.lighthouse >= 90 ? 'Passes Core Web Vitals' : 'Fails Core Web Vitals'}
              </div>
            </div>

            {/* Bounce Rate */}
            <div className="p-5 rounded-2xl bg-[#130f2e] border border-[#261d56] text-center space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Mobile Bounce Rate
              </div>
              <div className={`text-3xl sm:text-4xl font-black font-mono ${
                metrics.bounceRate <= 25 ? 'text-emerald-400' : metrics.bounceRate <= 45 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {metrics.bounceRate}%
              </div>
              <div className="text-[11px] text-slate-400">
                {metrics.bounceRate > 50 ? 'High visitor abandon' : 'Maximum attention retention'}
              </div>
            </div>

            {/* Conversion Rate */}
            <div className="p-5 rounded-2xl bg-[#130f2e] border border-[#261d56] text-center space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Inquiry Conversion
              </div>
              <div className={`text-3xl sm:text-4xl font-black font-mono ${
                metrics.conversionRate >= 3.0 ? 'text-emerald-400' : 'text-amber-400'
              }`}>
                {metrics.conversionRate}%
              </div>
              <div className="text-[11px] text-slate-400">
                Estimated conversion rate
              </div>
            </div>

            {/* Lost Leads / Opportunity */}
            <div className="p-5 rounded-2xl bg-[#130f2e] border border-[#261d56] text-center space-y-1">
              <div className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">
                Monthly Leads Lost
              </div>
              <div className={`text-3xl sm:text-4xl font-black font-mono ${
                metrics.lostLeads === 0 ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                -{metrics.lostLeads}
              </div>
              <div className="text-[11px] text-slate-400">
                Per 1,000 monthly visitors
              </div>
            </div>

          </div>

          {/* Comparison Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#18123a] to-[#120d2d] border border-purple-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>The Mikky Digitalz Performance Standard</span>
              </h4>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Every client website built by Michael Adetayo includes sub-second server response tuning, WebP conversion pipelines, and clean CSS tree-shaking to hit 98–100% PageSpeed on mobile devices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 active:scale-95 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Audit My Current Site</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCalendly}
                className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#18123a] hover:bg-[#221a4f] text-slate-200 border border-[#2c2263] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Speed Boost</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
