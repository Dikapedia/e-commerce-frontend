interface SignedInPanelProps {
  account: string;
  onContinue: () => void;
  onSignOut: () => void;
}

export function SignedInPanel({ account, onContinue, onSignOut }: SignedInPanelProps) {
  return (
    <div className="pt-8 space-y-6">
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Signed in</span>
        <p className="mt-2 font-['Cormorant_Garamond',serif] text-2xl text-white break-all">{account}</p>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onContinue}
          className="flex-1 border border-white/20 py-3 text-xs tracking-widest uppercase text-slate-200 hover:border-white/60 hover:bg-white/5 transition-all"
        >
          Continue
        </button>
        <button
          onClick={onSignOut}
          className="flex-1 border border-white/20 py-3 text-xs tracking-widest uppercase text-slate-400 hover:border-white/60 hover:text-white transition-all"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
