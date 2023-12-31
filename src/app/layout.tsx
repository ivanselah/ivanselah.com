import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import '@/styles/index.css';

import RootProviders from '@/app/rootProviders';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ivanselah.',
    template: 'Ivanselah | %s',
  },
  description: '프론트엔드 개발자 Ivanselah의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning className={roboto.className}>
      <head>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        /> */}
      </head>
      <RootProviders>{children}</RootProviders>
    </html>
  );
}
