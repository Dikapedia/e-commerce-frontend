import { Minus, Plus } from 'lucide-react';
import type { CartItem } from '../../../types/product';

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export function CartItemRow({ item, onUpdateQuantity }: CartItemRowProps) {
  return (
    <div className="flex gap-4 pb-6 border-b border-white/5">
      <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover bg-black/40 border border-white/10" />
      <div className="flex-1">
        <h4 className="font-['Cormorant_Garamond',serif] text-lg text-white">{item.product.name}</h4>
        <p className="text-xs text-slate-400">Rp{item.product.price.toLocaleString('id-ID')}</p>

        <div className="flex items-center space-x-3 mt-3">
          <button
            onClick={() => onUpdateQuantity(item.product.id, -1)}
            className="p-1 border border-white/20 hover:bg-white/10 text-slate-300"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-xs font-mono">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.product.id, 1)}
            className="p-1 border border-white/20 hover:bg-white/10 text-slate-300"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
