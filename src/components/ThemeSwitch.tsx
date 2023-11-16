'use client';

import { ChangeEvent } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const onThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <div className='flex items-center justify-end'>
      <SunIcon className='w-4 h-4 mr-2' />
      <select name='themeSwitch' value={theme} onChange={onThemeChange}>
        <option value='system'>System</option>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </div>
  );
}
