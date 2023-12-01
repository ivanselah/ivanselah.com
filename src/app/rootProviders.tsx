'use client';
import { useEffect } from 'react';

import { ThemeProvider } from 'next-themes';
import { homeBody } from '@/config';

import Footer from '@/components/Footer';
import { useCheckPathname } from '@/hooks/useCheckPathname';

type Props = {
  children: React.ReactNode,
};

export default function RootProviders({ children }: Props) {
  const { isMatch } = useCheckPathname({ targetPathname: '/' });

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
      <div id="stars" style={isMatch ? undefined : { visibility: 'hidden' }} />
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
        {!isMatch && <Footer />}
      </ThemeProvider>
    </body>
  );
}
