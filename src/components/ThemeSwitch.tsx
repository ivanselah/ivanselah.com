'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { IoMoon as DarkMode } from 'react-icons/io5';
import { MdLightMode as LightMode } from 'react-icons/md';
import { CommonUtils } from '@/utils/common';

export default function ThemeSwitch() {
  const [themeMounted, setThemeMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setThemeMounted(true);
  }, []);

  const onThemeChange = (event?: ChangeEvent<HTMLSelectElement>) => {
    if (event) {
      setTheme(event.target.value);
      return;
    }
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  if (!themeMounted) {
    return null;
  }

  const themeAnimation = isDarkMode
    ? 'text-yellow-300 animate-[themeDarkIconRotate_0.3s_linear]'
    : 'text-red-600 animate-[themeLightIconRotate_0.3s_linear]';

  return (
    <>
      <div
        className={CommonUtils.combineClassName(
          'hidden lg:block cursor-pointer fixed top-20 p-2 rounded-full hover:shadow-inner',
          isDarkMode ? 'hover:shadow-yellow-300' : 'hover:shadow-red-600',
          'transition-shadow',
        )}
        onClick={() => onThemeChange()}
      >
        <div className={CommonUtils.combineClassName('text-4xl', themeAnimation)}>
          {isDarkMode ? <DarkMode /> : <LightMode />}
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-end">
        {isDarkMode ? <MoonIcon className="w-4 h-4 mr-2" /> : <SunIcon className="w-4 h-4 mr-2" />}
        <select name="themeSwitch" value={theme} onChange={onThemeChange}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
    </>
  );
}
