import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const STORAGE_KEY = 'theme';

const getInitialTheme = () => {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage unavailable; the toggle still works for this visit
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="icon-button"
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
};

export default ThemeToggle;
