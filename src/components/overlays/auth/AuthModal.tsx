import { useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import {
  validateAuth,
  saveSession,
  readSession,
  clearSession,
  type AuthMode,
  type AuthValues,
  type AuthErrors
} from '../../../lib/auth';
import { AuthTabs } from './AuthTabs';
import { AuthForm } from './AuthForm';
import { SignedInPanel } from './SignedInPanel';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

const EMPTY: AuthValues = { name: '', email: '', password: '', confirm: '' };

export function AuthModal({ open, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [values, setValues] = useState<AuthValues>(EMPTY);
  const [errors, setErrors] = useState<AuthErrors>({});
  const [account, setAccount] = useState<string | null>(() => readSession());

  if (!open) return null;

  const onFieldChange = (field: keyof AuthValues, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const switchMode = (next: AuthMode) => {
    setMode(next);
    setErrors({});
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateAuth(mode, values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const email = values.email.trim().toLowerCase();
    saveSession(email);
    setAccount(email);
    setValues(EMPTY);
  };

  const signOut = () => {
    clearSession();
    setAccount(null);
    switchMode('login');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Login or register"
        className="relative w-full max-w-md bg-[#0e1118] border-l border-white/10 p-6 z-10"
      >
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="font-['Cormorant_Garamond',serif] text-xl tracking-[0.3em] font-semibold text-white">
            TIMELESS
          </span>
          <button onClick={onClose} className="p-2 border border-white/20 text-slate-300 hover:text-white" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {account ? (
          <SignedInPanel account={account} onContinue={onClose} onSignOut={signOut} />
        ) : (
          <>
            <AuthTabs mode={mode} onSwitch={switchMode} />
            <AuthForm
              mode={mode}
              values={values}
              errors={errors}
              onFieldChange={onFieldChange}
              onSubmit={onSubmit}
            />
          </>
        )}
      </div>
    </div>
  );
}
