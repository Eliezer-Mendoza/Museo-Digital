import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default is false (Modo Claro - Tema Nicaragua Patrio: Blanco, Azul y Dorado)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('museo_theme');
      return saved ? saved === 'dark' : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark');
        localStorage.setItem('museo_theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('museo_theme', 'light');
      }
    } catch (e) {
      console.warn('Error al sincronizar tema:', e);
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
