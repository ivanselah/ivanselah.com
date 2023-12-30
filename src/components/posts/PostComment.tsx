'use client';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useCheckPathname } from '@/hooks/useCheckPathname';
import { CommonUtils } from '@/utils/common';

const UTTERANCES = 'iframe.utterances-frame';

export default function PostComment() {
  const { resolvedTheme } = useTheme();
  const utterancesTheme = resolvedTheme === 'dark' ? 'photon-dark' : 'github-light';
  const pathname = usePathname();
  const [isBothPreAndNextButton, setIsBothPreAndNextButton] = useState<boolean>(true);
  const commentsSectionRef = useRef<HTMLElement>(null);
  const scriptElChild = useRef<HTMLScriptElement>();
  const { isMatch } = useCheckPathname({ targetPathname: 'posts' });

  useLayoutEffect(() => {
    const existingScript = commentsSectionRef.current?.querySelector(UTTERANCES) as HTMLIFrameElement;
    if (existingScript) {
      const isAbnomalBody = existingScript.querySelector('body')?.childNodes.length === 0;
      if (isAbnomalBody && scriptElChild.current) {
        commentsSectionRef.current?.removeChild(scriptElChild.current);
      }
      existingScript.contentWindow?.postMessage({ type: 'set-theme', theme: utterancesTheme }, 'https://utteranc.es/');
      return;
    }
    const scriptEl = document.createElement('script');
    scriptEl.async = false;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('class', 'comment');
    scriptEl.setAttribute('repo', 'ivanselah/ivanselah.com');
    scriptEl.setAttribute('issue-term', 'pathname');
    scriptEl.setAttribute('theme', utterancesTheme);
    scriptEl.setAttribute('crossorigin', 'anonymous');
    commentsSectionRef.current?.appendChild(scriptEl);
    scriptElChild.current = scriptEl;
  }, [utterancesTheme]);

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

  return (
    <section
      ref={commentsSectionRef}
      className={CommonUtils.combineClassName('px-4', isBothPreAndNextButton ? 'max-md:mt-32' : 'max-md:mt-3')}
    />
  );
}
