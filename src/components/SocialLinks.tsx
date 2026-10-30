import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SocialLinksProps {
  variant?: 'pills' | 'icons';
  className?: string;
}

interface SocialItem {
  name: string;
  url: string;
  badge?: string;
  platform: string;
}

export const SOCIAL_ITEMS: SocialItem[] = [
  { name: 'Contra', url: 'https://contra.com/mitchell_adetayo_wxd9nczu', badge: 'Verified Pro', platform: 'contra.com' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mikky-digitalz/', badge: 'Official', platform: 'linkedin.com' },
  { name: 'Fiverr', url: 'https://www.fiverr.com/mitchell_56', badge: 'Level 2', platform: 'fiverr.com' },
  { name: 'Behance', url: 'https://www.behance.net/michaeladetayo', platform: 'behance.net' },
  { name: 'Dribbble', url: 'https://dribbble.com/Adetayo_123', platform: 'dribbble.com' },
  { name: 'X (Twitter)', url: 'https://x.com/AdetayoMitchell', platform: 'x.com' },
  { name: 'Facebook', url: 'https://web.facebook.com/people/Mikkiedigitalz/61555922321995/', platform: 'facebook.com' },
];

export const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'pills', className = '' }) => {
  if (variant === 'icons') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        {SOCIAL_ITEMS.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="me noopener noreferrer"
            title={`${item.name} profile (${item.platform})`}
            className="px-3 py-1.5 rounded-full bg-[#181533] border border-[#241d4a] text-slate-300 hover:text-white hover:border-purple-500/60 transition-all text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <span>{item.name}</span>
            <ExternalLink className="w-3 h-3 text-purple-400 opacity-70" />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="me noopener noreferrer"
          title={`Verified external profile: ${item.name}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#151230] border border-[#241d4a] hover:border-purple-500/60 text-slate-300 hover:text-white transition-all text-xs font-medium cursor-pointer shadow-sm hover:scale-105"
        >
          <span>{item.name}</span>
          {item.badge && (
            <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              {item.badge}
            </span>
          )}
          <ExternalLink className="w-3 h-3 text-purple-400" />
        </a>
      ))}
    </div>
  );
};
