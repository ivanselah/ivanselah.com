'use client';

import Container from '@/components/Container';
import ThemeSwitch from '@/components/ThemeSwitch';
import { CommonUtils } from '@/utils/common';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Footer() {
  const pathname = usePathname();
  const [isBothPreAndNextButton, setIsBothPreAndNextButton] = useState<boolean>(true);

  useEffect(() => {
    const { 1: postPathname } = pathname.split('/');
    const isMatch = postPathname === 'posts';
    if (!isMatch) {
      return;
    }
    const hasBothPreAndNextButton = document.querySelectorAll('#preNext').length === 2;
    if (hasBothPreAndNextButton) {
      setIsBothPreAndNextButton(true);
      return;
    }
    setIsBothPreAndNextButton(false);
  }, [pathname]);

  return (
    <Container
      className={CommonUtils.combineClassName(
        'max-w-screen-xl p-4 mt-10 border-t border-gray-100 dark:border-gray-800',
        isBothPreAndNextButton ? 'max-md:mt-32' : 'max-md:mt-10',
      )}
    >
      <div className="text-center text-sm max-md:text-xs mb-3">
        Copyright © {new Date().getFullYear()} Ivanselah. All rights reserved.
      </div>
      <ThemeSwitch />
    </Container>
  );
}
