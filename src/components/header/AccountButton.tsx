import { User } from 'lucide-react';

interface AccountButtonProps {
  onClick: () => void;
}

// ponytail: client-only session until backend auth exists
export function AccountButton({ onClick }: AccountButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border border-white/20 p-2.5 rounded-none hover:border-white/60 hover:bg-white/5 transition-all focus:outline-none"
      aria-label="Login or register"
    >
      <User className="w-4 h-4 text-slate-200" />
    </button>
  );
}
