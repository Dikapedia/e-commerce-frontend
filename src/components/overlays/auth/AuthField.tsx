import type { AuthValues } from '../../../lib/auth';

interface AuthFieldProps {
  label: string;
  name: keyof AuthValues;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}

export function AuthField({ label, name, value, onChange, error, type = 'text', autoComplete }: AuthFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={event => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full bg-transparent border-b py-2 text-sm text-white focus:outline-none transition-colors ${
          error ? 'border-rose-400' : 'border-white/20 focus:border-white/70'
        }`}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
