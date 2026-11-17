import { CheckCircle2 } from 'lucide-react';

export function SubscribedNotice() {
  return (
    <div className="flex items-center justify-center space-x-2 text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 p-4">
      <CheckCircle2 className="w-5 h-5" />
      <span className="text-sm tracking-wide">Thank you for subscribing to TIMELESS Private Journal.</span>
    </div>
  );
}
