'use client';

import React, { useState, useEffect, createContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type CreateThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeContextProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<CreateThemeContext | null>(null);

export default function ThemeContextProvider({ children }: ThemeContextProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  console.log();

  useEffect(() => {
    const theme = (window.localStorage.getItem('theme') as Theme) || null;
    if (theme) {
      setTheme(theme);

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
