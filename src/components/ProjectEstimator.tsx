import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Clock, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Calendar, 
  Zap, 
  Layers, 
  ShoppingBag, 
  Code2, 
  Wrench,
  ShieldCheck
} from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenCalendly: () => void;
  onOpenContact: (preselectedService?: string) => void;
}

type PlatformType = 'wordpress' | 'squarespace' | 'shopify' | 'figma' | 'rescue';
type ScopeType = 'starter' | 'growth' | 'custom';

interface PlatformOption {
  id: PlatformType;
  name: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const PLATFORMS: PlatformOption[] = [
  { id: 'wordpress', name: 'WordPress & Elementor', icon: <Layers className="w-4 h-4" />, popular: true },
  { id: 'squarespace', name: 'Squarespace', icon: <Code2 className="w-4 h-4" /> },
  { id: 'shopify', name: 'Shopify Storefront', icon: <ShoppingBag className="w-4 h-4" /> },
  { id: 'figma', name: 'Figma to Live Code', icon: <Zap className="w-4 h-4" /> },
  { id: 'rescue', name: 'Emergency Site Rescue', icon: <Wrench className="w-4 h-4" /> },
];

const SCOPES: { id: ScopeType; title: string; subtitle: string; baseDays: number; basePrices: Record<PlatformType, number> }[] = [
  {
    id: 'starter',
    title: 'Starter Package',
    subtitle: '1–5 High-Converting Pages',
    baseDays: 7,
    basePrices: {
      wordpress: 700,
      squarespace: 700,
      shopify: 850,
      figma: 650,
      rescue: 500,
    },
  },
  {
    id: 'growth',
    title: 'Growth Package',
    subtitle: '6–10 Pages + Full Funnel',
    baseDays: 14,
    basePrices: {
      wordpress: 2000,
      squarespace: 1600,
      shopify: 2200,
      figma: 1500,
      rescue: 950,
    },
  },
  {
    id: 'custom',
    title: 'Custom & Enterprise',
    subtitle: '10+ Pages / Multi-Funnel',
    baseDays: 21,
    basePrices: {
      wordpress: 3200,
      squarespace: 2500,
      shopify: 3600,
      figma: 2400,
      rescue: 1500,
    },
  },
];

interface AddOnOption {
  id: string;
  name: string;
  price: number;
  days: number;
  description: string;
}

const ADDON_OPTIONS: AddOnOption[] = [
  {
    id: 'speed',
    name: 'Sub-Second PageSpeed Guarantee (95+ Lighthouse)',
    price: 290,
    days: 2,
    description: 'Image compression pipelines, CSS minification, and sub-1s Core Web Vitals audit.',
  },
  {
    id: 'geo',
    name: 'Generative Engine Optimization (GEO & AI Schema)',
    price: 350,
    days: 3,
    description: 'Full JSON-LD Organization graph, AEO FAQ architecture, and LLM-citation tuning.',
  },
  {
    id: 'copywriting',
    name: 'Conversion Copywriting & Messaging Architecture',
    price: 450,
    days: 4,
    description: 'High-converting sales headlines, objection handles, and CTA micro-copy written for you.',
  },
  {
    id: 'booking',
    name: 'Direct Booking & Calendar Funnel Integration',
    price: 150,
    days: 1,
    description: 'Calendly, Acuity, or Stripe payment integration with automated confirmation emails.',
  },
];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onOpenCalendly,
  onOpenContact,
}) => {
  const [platform, setPlatform] = useState<PlatformType>('wordpress');
  const [scope, setScope] = useState<ScopeType>('growth');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['speed']);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentScopeObj = SCOPES.find((s) => s.id === scope) || SCOPES[1];
  const currentPlatformObj = PLATFORMS.find((p) => p.id === platform) || PLATFORMS[0];

  const { totalPrice, totalDays } = useMemo(() => {
    const base = currentScopeObj.basePrices[platform];
    let days = currentScopeObj.baseDays;
    let addPrice = 0;

    selectedAddons.forEach((addonId) => {
      const opt = ADDON_OPTIONS.find((a) => a.id === addonId);
      if (opt) {
        addPrice += opt.price;
        days += opt.days;
      }
    });

    return {
      totalPrice: base + addPrice,
      totalDays: days,
    };
  }, [platform, scope, selectedAddons, currentScopeObj]);

  const deliverables = useMemo(() => {
    const list = [
      '100% custom responsive design (desktop, tablet & mobile)',
      'Clean, bloat-free build with zero unnecessary plugins',
      'Contact form & lead inquiry pipeline connected to your email',
      'Live staging URL preview with interactive revision rounds',
      'Team video walkthrough and handover training library',
    ];
    if (selectedAddons.includes('speed')) {
      list.push('Sub-second speed optimization & 95+ Core Web Vitals guarantee');
    }
    if (selectedAddons.includes('geo')) {
      list.push('Schema.org entity graph + GEO tuning for ChatGPT, Perplexity & Gemini');
    }
    if (selectedAddons.includes('copywriting')) {
      list.push('Full conversion copywriting for all primary pages and section headers');
    }
    if (selectedAddons.includes('booking')) {
      list.push('Direct calendar integration (Calendly / Acuity) with automated client emails');
    }
    return list;
  }, [selectedAddons]);

  const whatsappMessage = encodeURIComponent(
    `Hi Michael, I configured a project on your website estimator:\n\n` +
    `• Platform: ${currentPlatformObj.name}\n` +
    `• Package: ${currentScopeObj.title} (${currentScopeObj.subtitle})\n` +
    `• Add-ons: ${selectedAddons.length > 0 ? selectedAddons.map(id => ADDON_OPTIONS.find(a => a.id === id)?.name.split(' (')[0]).join(', ') : 'None'}\n` +
    `• Estimate: ~$${totalPrice.toLocaleString()} (${totalDays} business days)\n\n` +
    `I'd like to schedule a discovery call with Mikky Digitalz.`
  );

  return (
    <section id="estimator" className="py-24 bg-[#0a081a] border-t border-[#261d56] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold mb-2">
            INTERACTIVE SCOPE &amp; INVESTMENT CALCULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Estimate Your Project in 30 Seconds
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Select your platform, scale, and requirements below for an instant ballpark investment range and timeline — no email gate required.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#0e0b24] p-6 sm:p-8 rounded-3xl border border-[#2c2263] shadow-xl">
            
            {/* Step 1: Platform Selection */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-bold mb-3">
                01. Select Your Target Platform
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {PLATFORMS.map((item) => {
                  const isSelected = platform === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPlatform(item.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-20 ${
                        isSelected
                          ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30'
                          : 'bg-[#140f33] text-slate-300 border-[#261d56] hover:border-purple-500/50 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={isSelected ? 'text-white' : 'text-purple-400'}>{item.icon}</span>
                        {item.popular && (
                          <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-purple-100' : 'text-purple-400'}`}>
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold leading-tight">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scope Package */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-bold mb-3">
                02. Select Project Scope &amp; Page Count
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SCOPES.map((sc) => {
                  const isSelected = scope === sc.id;
                  const price = sc.basePrices[platform];
                  return (
                    <button
                      key={sc.id}
                      type="button"
                      onClick={() => setScope(sc.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-purple-600/20 border-purple-400 shadow-md ring-1 ring-purple-400/50'
                          : 'bg-[#140f33] border-[#261d56] hover:border-purple-500/40 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-white">{sc.title}</h4>
                        {isSelected && <Check className="w-4 h-4 text-purple-400" />}
                      </div>
                      <p className="text-xs text-purple-200/80 mb-3">{sc.subtitle}</p>
                      <div className="text-base font-extrabold text-white font-mono">
                        ${price.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-300 font-bold mb-3">
                03. Optional Growth &amp; Architecture Add-ons
              </label>
              <div className="space-y-2.5">
                {ADDON_OPTIONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#1c1547] border-purple-500/50 text-white'
                          : 'bg-[#130f2e] border-[#261d56] text-slate-300 hover:border-purple-500/30'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md mt-0.5 shrink-0 flex items-center justify-center border transition-colors ${
                          isChecked
                            ? 'bg-purple-600 border-purple-400 text-white'
                            : 'border-[#3d2e7c] bg-[#0c0920]'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-white">{addon.name}</span>
                          <span className="text-xs font-bold font-mono text-purple-300 shrink-0">
                            +${addon.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Estimate Summary (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-[#110d2c] p-6 sm:p-8 rounded-3xl border border-[#372675] shadow-2xl shadow-purple-950/70 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#261d56]">
              <span className="text-xs font-mono uppercase tracking-wider text-purple-300 font-bold flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-purple-400" />
                Live Scope Estimate
              </span>
              <span className="text-xs text-slate-400 font-mono">Fixed-Quote Basis</span>
            </div>

            {/* Price Output */}
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mb-1">
                Estimated Investment
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">USD (one-time)</span>
              </div>
            </div>

            {/* Turnaround Badge */}
            <div className="p-3.5 rounded-xl bg-[#17113a] border border-[#2c2263] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-300">Estimated Turnaround</span>
              </div>
              <span className="text-xs font-bold text-white font-mono">{totalDays} Business Days</span>
            </div>

            {/* Deliverables Checklist */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
                Included in This Estimate:
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Booking Actions */}
            <div className="space-y-3 pt-4 border-t border-[#261d56]">
              <button
                onClick={onOpenCalendly}
                className="w-full py-3.5 px-6 rounded-full bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold text-sm transition-all shadow-xl shadow-purple-600/35 hover:shadow-purple-500/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Discovery Call with this Scope</span>
              </button>

              <a
                href={`https://wa.me/2349024877275?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-[#18123a] hover:bg-[#20184d] text-slate-200 border border-purple-500/40 hover:border-purple-400 active:scale-95 text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Send Scope to Michael on WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>100% money-back satisfaction guarantee on milestone completion.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
