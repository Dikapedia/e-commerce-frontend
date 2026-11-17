import { X } from 'lucide-react';
import type { Product } from '../../../types/product';
import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';

interface SearchOverlayProps {
  open: boolean;
  query: string;
  results: Product[];
  onQueryChange: (query: string) => void;
  onSelectProduct: (product: Product) => void;
  onClose: () => void;
}

export function SearchOverlay({
  open,
  query,
  results,
  onQueryChange,
  onSelectProduct,
  onClose
}: SearchOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-start p-4 pt-20 sm:pt-28 overflow-y-auto">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 border border-white/20 text-slate-300 hover:text-white"
        aria-label="Close search"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-2xl">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400 block mb-4">Search Catalog</span>

        <SearchInput query={query} onQueryChange={onQueryChange} />

        {query.trim() && (
          <>
            <div className="mt-4 text-right">
              <a
                href="#collection"
                onClick={onClose}
                className="text-xs text-slate-400 uppercase tracking-wider hover:text-white underline underline-offset-4 transition-colors"
              >
                View in catalog
              </a>
            </div>
            <SearchResults
              query={query}
              results={results}
              onSelectProduct={product => {
                onSelectProduct(product);
                onClose();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
