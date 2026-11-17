import { X } from 'lucide-react';
import type { CartItem } from '../../../types/product';
import { CartItemRow } from './CartItemRow';
import { CartEmptyState } from './CartEmptyState';
import { CartSummary } from './CartSummary';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  totalCartCount: number;
  totalCartPrice: number;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export function CartDrawer({
  open,
  onClose,
  cartItems,
  totalCartCount,
  totalCartPrice,
  onUpdateQuantity
}: CartDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={onClose} />
      <div className="relative w-full max-w-md bg-[#0e1118] border-l border-white/10 p-6 flex flex-col justify-between z-10">

        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-white">Your Shopping Bag ({totalCartCount})</h3>
            <button onClick={onClose} className="p-2 border border-white/20 text-slate-300 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <CartEmptyState />
          ) : (
            <div className="mt-6 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {cartItems.map(item => (
                <CartItemRow key={item.product.id} item={item} onUpdateQuantity={onUpdateQuantity} />
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && <CartSummary totalCartPrice={totalCartPrice} />}

      </div>
    </div>
  );
}
