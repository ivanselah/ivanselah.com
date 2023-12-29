'use client';
import { useLayoutEffect, useEffect } from 'react';

import { ThemeProvider, useTheme } from 'next-themes';
import { homeBody } from '@/config';

import Footer from '@/components/Footer';
import { useCheckPathname } from '@/hooks/useCheckPathname';

type Props = {
  children: React.ReactNode;
};

export default function RootProviders({ children }: Props) {
  const { theme, setTheme } = useTheme();
  const { isMatch } = useCheckPathname({ targetPathname: '/' });

  useLayoutEffect(() => {
    const previousThemeMode = window.localStorage.getItem('theme');
    const themeMode = previousThemeMode ?? 'light';
    window.localStorage.setItem('theme', themeMode);
    console.log(themeMode);
    setTheme(themeMode);
  }, [theme, setTheme]);

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) {
      return;
    }
    if (isMatch) {
      htmlElement.style.overflow = 'hidden';
      return;
    }
    htmlElement.style.overflow = 'auto';
  }, [isMatch]);

  return (
    <body
      style={
        isMatch
          ? {
              background: `linear-gradient(136deg,${homeBody.gradientColors})`,
              backgroundSize: '1200% 1200%',
              overflow: 'hidden',
            }
          : undefined
      }
      className="bgStyle flex flex-col max-w-screen-xl mx-auto bg-transparent"
    >
      <div id="stars" style={isMatch ? undefined : { display: 'none' }} />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
        {!isMatch && <Footer />}
      </ThemeProvider>
    </body>
  );
}
