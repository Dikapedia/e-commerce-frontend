import { ArrowRight } from 'lucide-react';
import type { Product } from '../../../types/product';

interface SearchResultsProps {
  query: string;
  results: Product[];
  onSelectProduct: (product: Product) => void;
}

export function SearchResults({ query, results, onSelectProduct }: SearchResultsProps) {
  return (
    <div className="mt-6 space-y-3">
      <div className="flex justify-between items-center text-xs text-slate-400 uppercase tracking-wider mb-2">
        <span>{results.length} {results.length === 1 ? 'result' : 'results'}</span>
      </div>

      {results.length > 0 ? (
        <div className="divide-y divide-white/10 border border-white/10 bg-[#13161f]/80">
          {results.map(product => (
            <button
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-cover border border-white/10"
                />
                <div>
                  <h4 className="font-['Cormorant_Garamond',serif] text-lg text-white group-hover:text-amber-200/90 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-xs text-slate-400">{product.tagline}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-right">
                <span className="font-mono text-xs text-slate-300">
                  Rp{product.price.toLocaleString('id-ID')}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400 py-6 text-center border border-white/10">
          No timepieces found matching "{query}".
        </p>
      )}
    </div>
  );
}
