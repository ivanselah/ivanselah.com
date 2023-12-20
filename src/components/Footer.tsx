'use client';

import Container from '@/components/Container';
import ThemeSwitch from '@/components/ThemeSwitch';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { CommonUtils } from '@/utils/common';

export default function Footer() {
  const { isMatch: isPostPathMatch } = useCheckPathname({ targetPathname: 'posts' });

  return (
    <Container
      className={CommonUtils.combineClassName(
        'max-w-screen-xl p-4 mt-10 border-t border-gray-100 dark:border-gray-800',
        !isPostPathMatch && 'max-md:mt-9',
      )}
    >
      <div className="text-center text-sm max-md:text-xs mb-3">
        Copyright © {new Date().getFullYear()} Ivanselah. All rights reserved.
      </div>
      <ThemeSwitch />
    </Container>
  );
}
