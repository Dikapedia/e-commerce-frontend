import { ShoppingBag } from 'lucide-react';

export function CartEmptyState() {
  return (
    <div className="py-20 text-center text-slate-400 space-y-4">
      <ShoppingBag className="w-12 h-12 mx-auto stroke-1 text-slate-600" />
      <p className="text-sm font-light">Your shopping bag is currently empty.</p>
    </div>
  );
}
