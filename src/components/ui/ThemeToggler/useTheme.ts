import { useState, useEffect, useCallback } from 'react';

interface UseThemeProp {
  theme?: 'light' | 'dark';
}

const useTheme = ({ theme = 'light' }: UseThemeProp) => {
  const getDefaultMode = () => {
    const storedMode = localStorage.getItem('sessionMode');

    return storedMode ? (storedMode as 'light' | 'dark') : theme;
  };

  const [mode, setMode] = useState<'light' | 'dark'>(getDefaultMode);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (mode === 'dark') {
      root.classList.add('dark');
      body.style.backgroundColor = '#1F2937';
    } else {
      root.classList.remove('dark');
      body.style.backgroundColor = 'white';
    }

    localStorage.setItem('sessionMode', mode);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  return { mode, toggleMode };
};

export default useTheme;
