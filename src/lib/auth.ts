export type AuthMode = 'login' | 'register';

export interface AuthValues {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export type AuthErrors = Partial<Record<keyof AuthValues, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateAuth(mode: AuthMode, values: AuthValues): AuthErrors {
  const errors: AuthErrors = {};

  if (mode === 'register' && values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (mode === 'register' && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.';
  }
  if (mode === 'login' && values.password.length === 0) {
    errors.password = 'Password is required.';
  }
  if (mode === 'register' && values.confirm !== values.password) {
    errors.confirm = 'Passwords do not match.';
  }

  return errors;
}

const SESSION_KEY = 'timeless.session';

// ponytail: client-only session, no password verification. Swap for real API/auth provider when backend exists.
export function saveSession(email: string) {
  localStorage.setItem(SESSION_KEY, email.trim().toLowerCase());
}

export function readSession(): string | null {
  return localStorage.getItem(SESSION_KEY);
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}
