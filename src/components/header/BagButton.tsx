interface BagButtonProps {
  count: number;
  onClick: () => void;
}

export function BagButton({ count, onClick }: BagButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border border-white/20 px-4 py-2 rounded-none hover:border-white/60 hover:bg-white/5 transition-all text-xs tracking-widest font-medium flex items-center space-x-2 focus:outline-none"
      aria-label={`Open bag, ${count} item${count === 1 ? '' : 's'}`}
    >
      <span>BAG</span>
      <span className="text-slate-400">[{count}]</span>
    </button>
  );
}
