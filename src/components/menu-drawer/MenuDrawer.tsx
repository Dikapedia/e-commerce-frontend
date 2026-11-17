import { X } from 'lucide-react';
import { MenuNav } from './MenuNav';
import { ConciergeInfo } from './ConciergeInfo';

interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-[#0e1118] border-r border-white/10 p-8 flex flex-col justify-between z-10">
        <div>
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <span className="font-['Cormorant_Garamond',serif] text-2xl tracking-[0.3em] font-semibold text-white">TIMELESS</span>
            <button onClick={onClose} className="p-2 border border-white/20 text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          <MenuNav onNavigate={onClose} />
        </div>

        <ConciergeInfo />
      </div>
    </div>
  );
}
