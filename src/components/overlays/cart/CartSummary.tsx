interface CartSummaryProps {
  totalCartPrice: number;
}

export function CartSummary({ totalCartPrice }: CartSummaryProps) {
  return (
    <div className="pt-6 border-t border-white/10 space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-400">Subtotal</span>
        <span className="font-mono text-white text-base">Rp{totalCartPrice.toLocaleString('id-ID')}</span>
      </div>
      <p className="text-[11px] text-slate-500">Shipping & taxes calculated at checkout.</p>
      <button
        onClick={() => alert('Proceeding to secure luxury checkout...')}
        className="w-full bg-white text-black py-3.5 text-xs uppercase tracking-widest font-semibold hover:bg-slate-200 transition-colors"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}
