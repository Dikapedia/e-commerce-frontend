import assert from 'node:assert/strict';
import { validateAuth } from './auth.ts';

const base = { name: '', email: 'a@b.com', password: 'password1', confirm: 'password1' };

assert.deepEqual(validateAuth('register', { ...base, name: 'Al' }), {});
assert.deepEqual(validateAuth('register', { ...base, name: 'A' }).name, 'Name must be at least 2 characters.');
assert.deepEqual(validateAuth('login', { ...base, email: 'nope' }).email, 'Enter a valid email address.');
assert.deepEqual(validateAuth('register', { ...base, password: 'short' }).password, 'Password must be at least 8 characters.');
assert.deepEqual(validateAuth('register', { ...base, confirm: 'otherpass' }).confirm, 'Passwords do not match.');
assert.deepEqual(validateAuth('login', { ...base, password: '' }).password, 'Password is required.');

console.log('auth checks passed');
