'use client';

import { ChangeEvent, useLayoutEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { CommonUtils } from '@/utils/common';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const onThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const currentTheme = event.target.value;
    if (CommonUtils.getLocalStorage('theme') === currentTheme) {
      return;
    }
    CommonUtils.setLocalStorage('theme', currentTheme);
    setTheme(event.target.value);
  };

  return (
    <div className="flex items-center justify-end">
      {theme === 'dark' ? <MoonIcon className="w-4 h-4 mr-2" /> : <SunIcon className="w-4 h-4 mr-2" />}
      {theme && (
        <select name="themeSwitch" value={theme} onChange={onThemeChange}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      )}
    </div>
  );
}
