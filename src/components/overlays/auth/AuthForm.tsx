import type { FormEvent } from 'react';
import type { AuthErrors, AuthMode, AuthValues } from '../../../lib/auth';
import { AuthField } from './AuthField';

interface AuthFormProps {
  mode: AuthMode;
  values: AuthValues;
  errors: AuthErrors;
  onFieldChange: (field: keyof AuthValues, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function AuthForm({ mode, values, errors, onFieldChange, onSubmit }: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} noValidate className="pt-6 space-y-5">
      {mode === 'register' && (
        <AuthField
          label="Name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={value => onFieldChange('name', value)}
          error={errors.name}
        />
      )}
      <AuthField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        value={values.email}
        onChange={value => onFieldChange('email', value)}
        error={errors.email}
      />
      <AuthField
        label="Password"
        name="password"
        type="password"
        autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
        value={values.password}
        onChange={value => onFieldChange('password', value)}
        error={errors.password}
      />
      {mode === 'register' && (
        <AuthField
          label="Confirm password"
          name="confirm"
          type="password"
          autoComplete="new-password"
          value={values.confirm}
          onChange={value => onFieldChange('confirm', value)}
          error={errors.confirm}
        />
      )}

      <button
        type="submit"
        className="w-full bg-white text-[#0b0d12] py-3 text-xs tracking-[0.3em] uppercase font-medium hover:bg-slate-200 transition-colors"
      >
        {mode === 'login' ? 'Sign in' : 'Create account'}
      </button>
    </form>
  );
}
