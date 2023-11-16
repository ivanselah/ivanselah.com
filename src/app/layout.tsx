import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/app/providers';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ivanselah.',
  description: 'About me, blog posted about front end development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning className={openSans.className}>
      <body className='flex flex-col w-full max-w-screen-xl mx-auto p-4'>
        <Providers>
          <Header />
          <main className='pt-10 grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
