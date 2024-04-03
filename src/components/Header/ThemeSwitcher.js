import React from 'react';
import { MoonIcon, SunIcon } from '../Icons'; // Sesuaikan dengan path ke ikon Anda
import { cx } from '@/src/utils';
import { useThemeSwitch } from '../Hooks/useThemeSwitch';

const ThemeSwitcher = () => {
  const [mode, setMode] = useThemeSwitch(); // Menghapus deklarasi mode dan setMode yang sudah ada sebelumnya

  return (
    <button
      onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
      className={cx(
        'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
        mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
      )}
      aria-label="Theme Switcher"
    >
      {mode === 'light' ? (
        <MoonIcon className={'fill-dark'} />
      ) : (
        <SunIcon className={'fill-dark'} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
