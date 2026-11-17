import type { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <div className="p-4 border border-white/10 rounded-full bg-white/5">
        <Icon className="w-6 h-6 text-slate-300" />
      </div>
      <h3 className="font-['Cormorant_Garamond',serif] text-2xl tracking-wide text-white">{title}</h3>
      <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}
