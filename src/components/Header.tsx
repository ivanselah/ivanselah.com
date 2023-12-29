'use client';

import Link from 'next/link';
import { homeBody } from '@/config';
import { FaGithub } from 'react-icons/fa';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { CommonUtils } from '@/utils/common';

export default function Header() {
  const { isMatch: isRootPathMatch } = useCheckPathname({ targetPathname: '/' });

  return (
    <header
      className={CommonUtils.combineClassName(
        'fixed top-0 left-0 right-0 z-10',
        isRootPathMatch ? 'bg-transparent' : 'bg-neutral-50/[0.3] backdrop-blur-sm shadow-sm dark:bg-neutral-900/[0.9]',
      )}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between items-center p-4 max-[360px]:p-2">
        <Link href="/" className="max-[360px]:text-xs text-sm md:text-xl">
          {`<${homeBody.name} />`}
        </Link>
        <nav className="flex items-center gap-3 md:gap-5 max-[360px]:text-xs text-sm md:text-xl">
          <a href="https://about.ivanselah.com" target="_blank" rel="noopener noreferrer">
            About
          </a>
          <Link href="/posts">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link className="flex text-2xl items-center" href={homeBody.github} target="_blank">
            <FaGithub />
          </Link>
        </nav>
      </div>
    </header>
  );
}
