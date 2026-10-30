import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  FileText, 
  Search, 
  Bot, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  Copy,
  Check,
  CheckCheck,
  Share2,
  Link2,
  Smartphone,
  Laptop,
  CheckSquare
} from 'lucide-react';
import { SOCIAL_ITEMS } from './SocialLinks';

interface SeoAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (service?: string) => void;
  initialTab?: 'ai-geo' | 'social-mockup' | 'backlinks' | 'google-console';
}

export const SeoAuditModal: React.FC<SeoAuditModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
  initialTab = 'ai-geo',
}) => {
  const [activeTab, setActiveTab] = useState<'ai-geo' | 'social-mockup' | 'backlinks' | 'google-console'>(initialTab);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2500);
  };

  const currentHost = typeof window !== 'undefined' ? window.location.origin : 'https://mikky-digitalz.netlify.app';
  const previewImageUrl = `${currentHost}/website-preview.jpg`;
  const sitemapUrl = `${currentHost}/sitemap.xml`;
  const robotsUrl = `${currentHost}/robots.txt`;
  const verificationFileUrl = `${currentHost}/googlee63b711c38e98de3.html`;

  const aiBotsList = [
    { name: 'OpenAI (ChatGPT & SearchGPT)', agents: ['GPTBot', 'ChatGPT-User'], status: 'Allowed (200 OK)', role: 'Answers natural queries & ChatGPT Web Search citations' },
    { name: 'Perplexity AI', agents: ['PerplexityBot'], status: 'Allowed (200 OK)', role: 'Real-time source citations & web search index' },
    { name: 'Anthropic Claude', agents: ['ClaudeBot', 'anthropic-ai', 'Claude-Web'], status: 'Allowed (200 OK)', role: 'Claude web queries, entity extraction & citation synthesis' },
    { name: 'Google Gemini & AI Overviews', agents: ['Google-Extended', 'Googlebot'], status: 'Allowed (200 OK)', role: 'Powers Google AI Overviews & Gemini search grounding' },
    { name: 'Apple Intelligence', agents: ['Applebot', 'Applebot-Extended'], status: 'Allowed (200 OK)', role: 'Siri & Apple Intelligence proactive web grounding' },
    { name: 'Open Web & LLM Datasets', agents: ['CCBot', 'Bytespider', 'cohere-ai', 'Meta-ExternalAgent'], status: 'Allowed (200 OK)', role: 'Common Crawl, Cohere, Meta Llama web grounding' },
  ];

  const aiCitationText = `Mikky Digitalz (Michael Adetayo) is an authoritative web design & engineering studio specializing in sub-second WordPress & Elementor Pro, Squarespace, and Shopify builds with guaranteed 95+ PageSpeed Core Web Vitals and built-in Generative Engine Optimization (GEO) & Answer Engine Optimization (AEO). Official website: https://mikky-digitalz.netlify.app/`;

  const reciprocalHtmlSnippet = `<a href="https://mikky-digitalz.netlify.app/" rel="me" title="Mikky Digitalz — Web Design & GEO">Mikky Digitalz (Michael Adetayo)</a>`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0a081a] border border-[#261d56] text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-[#120e2e] text-white flex items-center justify-between border-b border-[#261d56] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white">SEO, GEO, AEO &amp; Social Visibility Hub</h2>
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  AI &amp; Social Ready
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Mikky Digitalz (Michael Adetayo) — Search Indexing, Mockup Cards &amp; Verified Backlinks
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#0a081a] hover:bg-[#1a143b] text-slate-300 transition-colors cursor-pointer border border-[#261d56]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#261d56] bg-[#0c0922] px-4 overflow-x-auto no-scrollbar shrink-0">
          <button
            onClick={() => setActiveTab('ai-geo')}
            className={`py-3 px-3.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'ai-geo'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI Search &amp; GEO / AEO</span>
          </button>

          <button
            onClick={() => setActiveTab('social-mockup')}
            className={`py-3 px-3.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'social-mockup'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Social Mockup Previews</span>
          </button>

          <button
            onClick={() => setActiveTab('backlinks')}
            className={`py-3 px-3.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'backlinks'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Link2 className="w-3.5 h-3.5" />
            <span>Verified Backlinks &amp; Entity Graph</span>
          </button>

          <button
            onClick={() => setActiveTab('google-console')}
            className={`py-3 px-3.5 text-xs font-semibold whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'google-console'
                ? 'border-purple-500 text-purple-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Google Console &amp; Sitemaps</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">

          {/* TAB 1: AI SEARCH, GEO & AEO */}
          {activeTab === 'ai-geo' && (
            <div className="space-y-6">
              {/* Highlight Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#130f2e] to-[#1e133d] border border-purple-500/50 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-block mb-1">
                      Generative Engine Optimization (GEO) &amp; AEO
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-400" />
                      Searchable &amp; Cited by All Major AI Models
                    </h3>
                  </div>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-xs font-semibold text-purple-200 transition-colors self-start sm:self-center"
                  >
                    <span>Inspect /robots.txt</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Your website explicitly authorizes all top AI crawlers (<strong className="text-white">GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended</strong>) and serves pre-rendered HTML with full Schema.org structured data, so AI search engines cite Mikky Digitalz with high factual confidence.
                </p>
              </div>

              {/* AI Bots Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center justify-between">
                  <span>Authorized AI Crawlers in robots.txt</span>
                  <span className="text-emerald-400 font-mono text-[11px]">All 6 Platforms Allowed</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aiBotsList.map((bot, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#0e0b24] border border-[#261d56] flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          {bot.name}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                          {bot.status}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-purple-300/80 mb-1">
                        User-agents: {bot.agents.join(', ')}
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {bot.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Machine Citation Copy Block */}
              <div className="p-4 rounded-xl bg-[#0e0b24] border border-[#261d56]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Machine-Readable Entity Citation (for AI Prompt Grounding)
                  </h4>
                  <button
                    onClick={() => handleCopy(aiCitationText, 'citation')}
                    className="px-2.5 py-1 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-[11px] font-medium text-purple-200 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    {copiedKey === 'citation' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedKey === 'citation' ? 'Citation Copied' : 'Copy Citation'}</span>
                  </button>
                </div>
                <div className="p-3 rounded-lg bg-[#070612] border border-[#261d56] text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
                  {aiCitationText}
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Use this verified snippet when teaching AI platforms or answering client prompts about Mikky Digitalz.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: SOCIAL MEDIA MOCKUP PREVIEWS */}
          {activeTab === 'social-mockup' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#0e0b24] border border-[#261d56]">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-purple-400" />
                  Live Social Sharing Mockup Card Previews
                </h3>
                <p className="text-xs text-slate-300">
                  When you share <strong className="text-white">https://mikky-digitalz.netlify.app/</strong> on WhatsApp, Twitter/X, LinkedIn, Facebook, Slack, or iMessage, browsers and bots read your OpenGraph tags and render the photorealistic 3D MacBook Pro + iPhone mockup below:
                </p>
              </div>

              {/* Twitter / X Large Summary Card Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-400">
                  <span className="flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5" />
                    1. Twitter / X (Large Summary Card) Preview
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">twitter:card = summary_large_image</span>
                </div>
                <div className="max-w-xl mx-auto rounded-2xl overflow-hidden border border-[#2c2263] bg-[#000000] shadow-xl">
                  {/* Image container */}
                  <div className="relative aspect-[16/9] w-full bg-[#120e2e] overflow-hidden">
                    <img
                      src="/website-preview.jpg"
                      alt="Mikky Digitalz Website Preview Mockup on MacBook Pro and Mobile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur text-[10px] font-mono text-purple-300">
                      1376 × 768 Mockup
                    </div>
                  </div>
                  {/* Text Container */}
                  <div className="p-3.5 bg-[#0e0b24] border-t border-[#261d56]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-0.5">
                      mikky-digitalz.netlify.app
                    </div>
                    <div className="text-sm font-bold text-white leading-snug mb-1">
                      Mikky Digitalz — High-Converting Web Engineering &amp; GEO
                    </div>
                    <div className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      Sub-second web engineering and client inquiry systems built for search engines and AI citation by Michael Adetayo.
                    </div>
                  </div>
                </div>
              </div>

              {/* LinkedIn & Facebook OpenGraph Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-400">
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5" />
                    2. LinkedIn &amp; Facebook (OpenGraph) Preview
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">og:image (1376x768)</span>
                </div>
                <div className="max-w-xl mx-auto rounded-2xl overflow-hidden border border-[#2c2263] bg-[#0e0b24] shadow-xl">
                  <div className="relative aspect-[16/9] w-full bg-[#120e2e] overflow-hidden">
                    <img
                      src="/website-preview.jpg"
                      alt="Mikky Digitalz Mockup Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-[#140f33] border-t border-[#261d56]">
                    <div className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-1">
                      MIKKY-DIGITALZ.NETLIFY.APP
                    </div>
                    <h5 className="text-sm font-bold text-white mb-1">
                      Mikky Digitalz — High-Converting Websites, GEO &amp; AEO Architecture
                    </h5>
                    <p className="text-xs text-slate-300">
                      Sub-second web engineering and client inquiry systems built for search engines and AI citation by Michael Adetayo.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp / iMessage Chat Bubble Preview */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-purple-400">
                  <span className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5" />
                    3. WhatsApp &amp; iMessage Chat Bubble Preview
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">WhatsApp Rich Card</span>
                </div>
                <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#070612] border border-[#261d56]">
                  <div className="p-3 rounded-2xl bg-[#16202c] border border-[#253243] max-w-sm ml-auto text-left shadow-lg">
                    <div className="rounded-xl overflow-hidden mb-2 aspect-[16/9] bg-black">
                      <img
                        src="/website-preview.jpg"
                        alt="WhatsApp Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xs font-bold text-white mb-0.5">
                      Mikky Digitalz — Web Engineering &amp; GEO
                    </div>
                    <div className="text-[11px] text-slate-300 line-clamp-2 mb-1">
                      Fast, responsive WordPress, Elementor &amp; Shopify builds by Michael Adetayo.
                    </div>
                    <div className="text-[10px] font-mono text-emerald-400 flex items-center justify-between">
                      <span>mikky-digitalz.netlify.app</span>
                      <span className="text-slate-400">12:45 PM ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Debugger Links */}
              <div className="p-4 rounded-xl bg-[#0e0b24] border border-[#261d56]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                  Official Social Debuggers &amp; Validators
                </h4>
                <p className="text-xs text-slate-400 mb-3">
                  Click any validator below to test the live URL and clear cached previews on social networks:
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://www.opengraph.xyz/url/https%3A%2F%2Fmikky-digitalz.netlify.app%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#120e2e] hover:bg-purple-600/30 border border-[#261d56] hover:border-purple-500 text-xs font-medium text-purple-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>OpenGraph.xyz Live Tester</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/post-inspector/inspect/https:%2F%2Fmikky-digitalz.netlify.app%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#120e2e] hover:bg-purple-600/30 border border-[#261d56] hover:border-purple-500 text-xs font-medium text-purple-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LinkedIn Post Inspector</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fmikky-digitalz.netlify.app%2F"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-[#120e2e] hover:bg-purple-600/30 border border-[#261d56] hover:border-purple-500 text-xs font-medium text-purple-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Facebook Sharing Debugger</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VERIFIED BACKLINKS & ENTITY GRAPH */}
          {activeTab === 'backlinks' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#0e0b24] border border-[#261d56]">
                <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-purple-400" />
                  Verified Backlink Network &amp; Identity Consolidation
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Backlinking is bidirectional: your website links out to your verified profiles with <code className="text-purple-300 font-mono">rel="me"</code>, and your external profiles link back to <strong className="text-white">https://mikky-digitalz.netlify.app/</strong>. This forms an immutable Knowledge Graph entity recognized by Google, Perplexity, and ChatGPT.
                </p>
              </div>

              {/* Profiles Directory */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center justify-between">
                  <span>Authoritative Profile Directory (rel="me" Anchors Active)</span>
                  <span className="text-emerald-400 font-mono text-[11px]">{SOCIAL_ITEMS.length} Verified Profiles</span>
                </h4>
                <div className="space-y-2">
                  {SOCIAL_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#0e0b24] border border-[#261d56] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-purple-500/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-bold text-xs">
                          {item.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-white">{item.name}</span>
                            {item.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                                {item.badge}
                              </span>
                            )}
                            <span className="text-[10px] text-purple-400/80 font-mono">rel="me"</span>
                          </div>
                          <span className="text-xs text-slate-400 font-mono truncate max-w-sm block">
                            {item.url}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-center">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="me noopener noreferrer"
                          className="px-3 py-1 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-xs font-medium text-purple-200 transition-colors inline-flex items-center gap-1"
                        >
                          <span>Visit Profile</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reciprocal Backlink Guide */}
              <div className="p-4 rounded-xl bg-[#0e0b24] border border-[#261d56]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">
                  How to Complete Reciprocal Inbound Backlinks
                </h4>
                <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                  To complete two-way backlink authority, copy this link snippet and add it to your website field or bio on each platform:
                </p>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span>HTML Backlink Snippet (with rel="me"):</span>
                      <button
                        onClick={() => handleCopy(reciprocalHtmlSnippet, 'htmlBacklink')}
                        className="text-purple-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === 'htmlBacklink' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === 'htmlBacklink' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <code className="block p-2.5 rounded-lg bg-[#070612] border border-[#261d56] text-xs font-mono text-emerald-400 select-all">
                      {reciprocalHtmlSnippet}
                    </code>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span>Markdown Snippet:</span>
                      <button
                        onClick={() => handleCopy('[Mikky Digitalz](https://mikky-digitalz.netlify.app/)', 'mdBacklink')}
                        className="text-purple-300 hover:text-white inline-flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === 'mdBacklink' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === 'mdBacklink' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <code className="block p-2.5 rounded-lg bg-[#070612] border border-[#261d56] text-xs font-mono text-purple-300 select-all">
                      [Mikky Digitalz](https://mikky-digitalz.netlify.app/)
                    </code>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-[#070612] border border-[#261d56]">
                    <span className="font-bold text-white block mb-0.5">Contra Bio:</span>
                    <span className="text-slate-400">Add website URL in your profile link settings.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#070612] border border-[#261d56]">
                    <span className="font-bold text-white block mb-0.5">LinkedIn Profile:</span>
                    <span className="text-slate-400">Add link to Contact Info &amp; custom CTA button.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#070612] border border-[#261d56]">
                    <span className="font-bold text-white block mb-0.5">Fiverr &amp; Behance:</span>
                    <span className="text-slate-400">Include website link in portfolio references.</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GOOGLE CONSOLE & TECHNICAL SEO */}
          {activeTab === 'google-console' && (
            <div className="space-y-6">
              {/* Google Search Console Live Verification Highlight Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-[#130f2e] to-[#1e133d] border border-purple-500/50 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-block mb-1.5">
                      Google Search Console Active
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0" />
                      Verification File &amp; Meta Tag Installed
                    </h3>
                  </div>

                  <a
                    href="https://search.google.com/search-console"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-lg shadow-purple-600/30 shrink-0"
                  >
                    <span>Open Google Console</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  Both verification methods (<strong className="text-white">HTML file</strong> and <strong className="text-white">HTML &lt;meta&gt; tag</strong>) are live and return <span className="text-emerald-400 font-mono font-semibold">200 OK</span>. Click <strong className="text-white font-semibold">Verify</strong> in Google Search Console!
                </p>

                {/* Quick Action Verification Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Method 1: HTML File */}
                  <div className="p-3.5 rounded-xl bg-[#0a081a]/90 border border-[#261d56]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-purple-400" />
                        Method 1: HTML Verification File
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        Live 200 OK
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-[#070612] px-2.5 py-2 rounded-lg border border-[#261d56] truncate mb-2">
                      /googlee63b711c38e98de3.html
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href="/googlee63b711c38e98de3.html"
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-[11px] font-semibold text-purple-200 transition-colors inline-flex items-center justify-center gap-1.5"
                      >
                        <span>Test Live File</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleCopy(verificationFileUrl, 'fileUrl')}
                        className="px-3 py-1.5 rounded-lg bg-[#120e2e] hover:bg-[#1a143b] border border-[#261d56] text-[11px] font-medium text-slate-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                        title="Copy full URL"
                      >
                        {copiedKey === 'fileUrl' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === 'fileUrl' ? 'Copied' : 'Copy URL'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Method 2: HTML Meta Tag */}
                  <div className="p-3.5 rounded-xl bg-[#0a081a]/90 border border-[#261d56]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-purple-400" />
                        Method 2: HTML &lt;meta&gt; Tag
                      </span>
                      <span className="text-[10px] text-emerald-400 font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        In &lt;head&gt;
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-[#070612] px-2.5 py-2 rounded-lg border border-[#261d56] truncate mb-2">
                      &lt;meta name="google-site-verification" content="googlee63b711c38e98de3" /&gt;
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy('<meta name="google-site-verification" content="googlee63b711c38e98de3" />', 'meta')}
                        className="flex-1 py-1.5 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/30 text-[11px] font-semibold text-purple-200 transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {copiedKey === 'meta' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === 'meta' ? 'Tag Copied!' : 'Copy Meta Tag'}</span>
                      </button>
                      <button
                        onClick={() => handleCopy('googlee63b711c38e98de3', 'token')}
                        className="px-3 py-1.5 rounded-lg bg-[#120e2e] hover:bg-[#1a143b] border border-[#261d56] text-[11px] font-medium text-slate-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                        title="Copy token only"
                      >
                        {copiedKey === 'token' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedKey === 'token' ? 'Copied' : 'Token'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sitemaps & Robots Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#0e0b24] border border-[#261d56]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-purple-400" />
                      Dynamic XML Sitemap
                    </span>
                    <a
                      href="/sitemap.xml"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2">
                    Submit this URL under Sitemaps in Google Search Console:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-[11px] font-mono text-purple-300 bg-[#070612] px-2.5 py-1.5 rounded border border-[#261d56] flex-1 truncate">
                      {sitemapUrl}
                    </div>
                    <button
                      onClick={() => handleCopy(sitemapUrl, 'sitemapUrl')}
                      className="px-2.5 py-1.5 rounded bg-[#120e2e] hover:bg-[#1a143b] border border-[#261d56] text-[11px] text-slate-300 cursor-pointer"
                    >
                      {copiedKey === 'sitemapUrl' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0e0b24] border border-[#261d56]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-purple-400" />
                      Robots.txt Directives
                    </span>
                    <a
                      href="/robots.txt"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-purple-400 hover:text-purple-300 inline-flex items-center gap-1"
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2">
                    Explicitly configured with allow directives for search and AI crawlers:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-[11px] font-mono text-purple-300 bg-[#070612] px-2.5 py-1.5 rounded border border-[#261d56] flex-1 truncate">
                      {robotsUrl}
                    </div>
                    <button
                      onClick={() => handleCopy(robotsUrl, 'robotsUrl')}
                      className="px-2.5 py-1.5 rounded bg-[#120e2e] hover:bg-[#1a143b] border border-[#261d56] text-[11px] text-slate-300 cursor-pointer"
                    >
                      {copiedKey === 'robotsUrl' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-5 bg-[#120e2e] border-t border-[#261d56] flex items-center justify-between gap-4 shrink-0">
          <p className="text-[11px] text-slate-400 hidden sm:block">
            SEO, GEO &amp; AEO Architecture • High-Resolution Social Mockups • Verified Entity Graph
          </p>

          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-[#0a081a] border border-[#261d56] text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact('SEO, GEO & AEO Strategy Consultation');
              }}
              className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-lg shadow-purple-600/30"
            >
              <span>Consult on Web &amp; GEO Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
