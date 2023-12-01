'use client';

import Link from 'next/link';
import { homeBody } from '@/config';
import { FaGithub } from 'react-icons/fa';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { CommonUtils } from '@/utils/common';

export default function Header() {
  const { isMatch } = useCheckPathname({ targetPathname: '/' });

  return (
    <header
      className={CommonUtils.combineClassName(
        'fixed top-0 left-0 right-0',
        isMatch
          ? 'bg-transparent'
          : 'bg-neutral-100/[0.8] shadow-md dark:bg-neutral-900/[0.8]',
      )}
    >
      <div className="max-w-[1300px] mx-auto flex justify-between p-4">
        <Link href="/" className="text-sm sm:text-xl lg:text-2xl">
          {`<${homeBody.name} />`}
        </Link>
        <nav className="flex gap-4 text-sm sm:text-xl lg:text-2xl">
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
          <Link
            className="flex text-2xl items-center"
            href={homeBody.github}
            target="_blank"
          >
            <FaGithub />
          </Link>
        </nav>
      </div>
    </header>
  );
}
