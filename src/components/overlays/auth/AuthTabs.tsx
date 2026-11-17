import type { AuthMode } from '../../../lib/auth';

interface AuthTabsProps {
  mode: AuthMode;
  onSwitch: (mode: AuthMode) => void;
}

export function AuthTabs({ mode, onSwitch }: AuthTabsProps) {
  return (
    <div className="flex gap-6 pt-6 border-b border-white/10">
      {(['login', 'register'] as const).map(item => (
        <button
          key={item}
          onClick={() => onSwitch(item)}
          className={`pb-3 text-xs uppercase tracking-[0.3em] transition-colors ${
            mode === item
              ? 'text-white border-b border-white'
              : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          {item === 'login' ? 'Login' : 'Register'}
        </button>
      ))}
    </div>
  );
}
