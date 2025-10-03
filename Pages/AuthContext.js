import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

const SECURE_TOKEN_KEY = 'auth_token';

export const AuthContext = createContext({
  isLoading: false,
  isSignedIn: false,
  user: null,
  signIn: async (email, password) => {},
  signOut: async () => {},
});

async function saveSecureItem(key, value) {
  try {
    await SecureStore.setItemAsync(key, value, {
      keychainService: 'reikiapp.auth',
    });
  } catch (_) {
    // noop: in production, report to logging
  }
}

async function getSecureItem(key) {
  try {
    return await SecureStore.getItemAsync(key, { keychainService: 'reikiapp.auth' });
  } catch (_) {
    return null;
  }
}

async function deleteSecureItem(key) {
  try {
    await SecureStore.deleteItemAsync(key, { keychainService: 'reikiapp.auth' });
  } catch (_) {
    // noop
  }
}

// Exponential backoff helper
async function withBackoff(fn, { retries = 2, baseDelayMs = 300 } = {}) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      // small jitter
      if (attempt > 0) {
        const delay = baseDelayMs * Math.pow(2, attempt - 1) + Math.floor(Math.random() * 100);
        await new Promise(res => setTimeout(res, delay));
      }
      return await fn();
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error('Unknown error');
}

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Restore token on app start
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const token = await getSecureItem(SECURE_TOKEN_KEY);
      if (!isMounted) return;
      if (token) {
        setIsSignedIn(true);
        setUser({ email: 'persisted@user', token });
      }
      setIsLoading(false);
    })();
    return () => { isMounted = false; };
  }, []);

  const signIn = useCallback(async (email, password) => {
    // Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Please enter a valid email');
    }
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const doLogin = async () => {
      // Simulate network call and server-side validation
      await new Promise(res => setTimeout(res, 500));
      // Replace with real API call; for now accept demo credentials
      if (email === 'test@example.com' && password === 'password') {
        return { token: 'demo-token', email };
      }
      // Simulate server error for wrong creds
      const err = new Error('Invalid email or password');
      err.code = 'INVALID_CREDENTIALS';
      throw err;
    };

    try {
      const result = await withBackoff(doLogin, { retries: 2, baseDelayMs: 300 });
      await saveSecureItem(SECURE_TOKEN_KEY, result.token);
      setIsSignedIn(true);
      setUser({ email: result.email, token: result.token });
    } catch (err) {
      // Bubble up error for UI
      throw err;
    }
  }, []);

  const signOut = useCallback(async () => {
    await deleteSecureItem(SECURE_TOKEN_KEY);
    setIsSignedIn(false);
    setUser(null);
  }, []);

  const value = useMemo(() => ({ isLoading, isSignedIn, user, signIn, signOut }), [isLoading, isSignedIn, user, signIn, signOut]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


