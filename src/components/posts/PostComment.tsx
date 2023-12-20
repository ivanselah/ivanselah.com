'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { CommonUtils } from '@/utils/common';

const COMMENTS_SECTION = 'commentsSection';

export default function PostComment() {
  const { resolvedTheme } = useTheme();
  const pathname = usePathname();
  const utterancesTheme = resolvedTheme === 'dark' ? 'photon-dark' : 'github-light';
  const [isBothPreAndNextButton, setIsBothPreAndNextButton] = useState<boolean>(true);
  const commentsSectionRef = useRef<HTMLElement>(null);
  const { isMatch } = useCheckPathname({ targetPathname: 'posts' });

  useEffect(() => {
    if (!isMatch) {
      return;
    }
    const hasBothPreAndNextButton = document.querySelectorAll('#preNext').length === 2;
    if (hasBothPreAndNextButton) {
      setIsBothPreAndNextButton(true);
      return;
    }
    setIsBothPreAndNextButton(false);
  }, [pathname, isMatch]);

  useEffect(() => {
    if (!commentsSectionRef.current) {
      return;
    }
    const scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', 'ivanselah/ivanselah.com');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', utterancesTheme);
    scriptEl.setAttribute('crossorigin', 'anonymous');
    commentsSectionRef.current.appendChild(scriptEl);
    return () => {
      const comments = document.getElementById(COMMENTS_SECTION);
      if (comments) {
        comments.innerHTML = '';
      }
    };
  }, [utterancesTheme]);

  return (
    <section
      id={COMMENTS_SECTION}
      ref={commentsSectionRef}
      className={CommonUtils.combineClassName('px-4', isBothPreAndNextButton ? 'max-md:mt-32' : 'max-md:mt-3')}
    />
  );
}
