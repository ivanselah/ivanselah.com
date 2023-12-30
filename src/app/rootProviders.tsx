'use client';
import { useLayoutEffect, useEffect } from 'react';

import { ThemeProvider } from 'next-themes';
import { homeBody } from '@/config';

import Footer from '@/components/Footer';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import Header from '@/components/Header';
import { usePathname } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export default function RootProviders({ children }: Props) {
  const pathname = usePathname();
  const { isMatch } = useCheckPathname({ targetPathname: '/' });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      className="bgStyle flex flex-col max-w-screen-xl mx-auto"
    >
      <div id="stars" style={isMatch ? undefined : { display: 'none' }} />
      <Header />
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
        <main className="w-full mx-auto pt-16 md:pt-24 lg:pt-32 grow">{children}</main>
        {!isMatch && <Footer />}
      </ThemeProvider>
    </body>
  );
}
