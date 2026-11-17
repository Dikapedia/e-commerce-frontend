import type { Product } from '../../../types/product';

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  return (
    <div className="mt-6 space-y-2 text-xs border-t border-b border-white/10 py-4 text-slate-300">
      <div className="flex justify-between"><span className="text-slate-500">Dial Color</span> <span>{product.dialColor}</span></div>
      <div className="flex justify-between"><span className="text-slate-500">Case Diameter</span> <span>{product.caseSize}</span></div>
      <div className="flex justify-between"><span className="text-slate-500">Strap Material</span> <span>{product.strap}</span></div>
    </div>
  );
}
