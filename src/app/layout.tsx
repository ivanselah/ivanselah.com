import type { Metadata } from 'next';

import { Roboto } from 'next/font/google';

import '@/styles/index.css';

import RootProviders from '@/app/rootProviders';
import Header from '@/components/Header';

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
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <RootProviders>
        <Header />
        <main className="w-full mx-auto pt-16 md:pt-24 lg:pt-32 grow">{children}</main>
      </RootProviders>
    </html>
  );
}
