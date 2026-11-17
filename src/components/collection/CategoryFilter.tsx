import type { ProductCategoryFilter } from '../../types/product';

const CATEGORIES: ProductCategoryFilter[] = ['All', 'Elegance', 'Sport', 'Minimalist'];

interface CategoryFilterProps {
  selectedCategory: ProductCategoryFilter;
  onSelectCategory: (category: ProductCategoryFilter) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
      {CATEGORIES.map(cat => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          aria-pressed={selectedCategory === cat}
          className={`px-5 py-2 text-xs uppercase tracking-widest transition-all ${
            selectedCategory === cat
              ? 'bg-white text-black border border-white font-medium'
              : 'border border-white/20 text-slate-300 hover:border-white/50'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
