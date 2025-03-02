import { useCallback, useEffect, useMemo, useState } from 'react';
import store from 'store2';

type UserPreference = 'light' | 'dark' | 'system';

const useTheme = () => {
  const [userPreference, setUserPreference] = useState<UserPreference>(() => {
    const stored = store.get('themePreference') as UserPreference | null;
    return stored ?? 'system';
  });

  const getSystemPreference = () => {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  };
  const [systemPreference, setSystemPreference] = useState<'light' | 'dark'>(getSystemPreference());

  const mode = useMemo(
    () => (userPreference === 'system' ? systemPreference : userPreference),
    [userPreference, systemPreference],
  );

  useEffect(() => {
    if (userPreference === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (event: MediaQueryListEvent) => {
        setSystemPreference(event.matches ? 'dark' : 'light');
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [userPreference]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'themePreference') {
        const newPreference =
          event.newValue && ['light', 'dark', 'system'].includes(event.newValue)
            ? (event.newValue as UserPreference)
            : 'system';
        setUserPreference(newPreference);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const cycleThroughPreference = useCallback(() => {
    const nextPreferenceMap = { system: 'light', light: 'dark', dark: 'system' };
    const nextPreference = nextPreferenceMap[userPreference] as UserPreference;
    store.set('themePreference', nextPreference);
    setUserPreference(nextPreference);
  }, [userPreference]);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  return { mode, userPreference, cycleThroughPreference };
};

export default useTheme;
