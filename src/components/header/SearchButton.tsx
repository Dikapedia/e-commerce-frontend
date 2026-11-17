import { Search } from 'lucide-react';

interface SearchButtonProps {
  onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border border-white/20 p-2.5 rounded-none hover:border-white/60 hover:bg-white/5 transition-all focus:outline-none"
      aria-label="Search"
    >
      <Search className="w-4 h-4 text-slate-200" />
    </button>
  );
}
