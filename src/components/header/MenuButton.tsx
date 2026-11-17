import { Menu } from 'lucide-react';

interface MenuButtonProps {
  onClick: () => void;
}

export function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border border-white/20 p-2.5 rounded-none hover:border-white/60 hover:bg-white/5 transition-all focus:outline-none"
      aria-label="Open menu"
    >
      <Menu className="w-5 h-5 text-slate-200" />
    </button>
  );
}
