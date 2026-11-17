import { Search } from 'lucide-react';

interface SearchInputProps {
  query: string;
  onQueryChange: (query: string) => void;
}

export function SearchInput({ query, onQueryChange }: SearchInputProps) {
  return (
    <div className="relative border-b border-white/30 pb-2">
      <input
        type="search"
        placeholder="Search by series, color, or material..."
        value={query}
        onChange={event => onQueryChange(event.target.value)}
        autoFocus
        aria-label="Search catalog"
        className="w-full bg-transparent font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl text-white placeholder-slate-600 focus:outline-none pr-10"
      />
      <Search className="absolute right-0 top-2 w-6 h-6 text-slate-400" />
    </div>
  );
}
