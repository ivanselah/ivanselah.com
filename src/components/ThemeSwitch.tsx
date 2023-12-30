'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { CommonUtils } from '@/utils/common';

export default function ThemeSwitch() {
  const [themeMounted, setThemeMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setThemeMounted(true);
  }, []);

  const onThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const currentTheme = event.target.value;
    if (CommonUtils.getLocalStorage('theme') === currentTheme) {
      return;
    }
    CommonUtils.setLocalStorage('theme', currentTheme);
    setTheme(event.target.value);
  };

  if (!themeMounted) {
    return null;
  }

  return (
    <div className="flex items-center justify-end">
      {theme === 'dark' ? <MoonIcon className="w-4 h-4 mr-2" /> : <SunIcon className="w-4 h-4 mr-2" />}
      <select name="themeSwitch" value={theme} onChange={onThemeChange}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
