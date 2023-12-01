'use client';
import { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { homeBody } from '@/config';

import Footer from '@/components/Footer';

type Props = {
  children: React.ReactNode,
};

export default function RootProviders({ children }: Props) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) {
      return;
    }
    if (isHome) {
      htmlElement.style.overflow = 'hidden';
      return;
    }
    htmlElement.style.overflow = 'auto';
  }, [isHome]);

  return (
    <body
      style={
        isHome
          ? {
              background: `linear-gradient(136deg,${homeBody.gradientColors})`,
              backgroundSize: '1200% 1200%',
              overflow: 'hidden',
            }
          : undefined
      }
      className="bgStyle flex flex-col w-full max-w-screen-xl mx-auto p-4 bg-transparent"
    >
      <div id="stars" style={isHome ? undefined : { visibility: 'hidden' }} />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
        {!isHome && <Footer />}
      </ThemeProvider>
    </body>
  );
}
