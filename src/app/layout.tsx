import type { Metadata } from 'next';

import { Open_Sans } from 'next/font/google';

import '@/styles/index.css';

import RootProviders from '@/app/rootProviders';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ivanselah.',
  description: 'About me, blog posted about front end development',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={openSans.className}>
      <RootProviders>
        <Header />
        <main className='w-full mx-auto pt-10 grow'>{children}</main>
      </RootProviders>
    </html>
  );
}
