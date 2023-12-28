'use client';

import { CommonUtils } from '@/utils/common';
import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export default function PostArrowUp() {
  const [isView, setIsView] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number | undefined>(undefined);
  const arrowUpEnableTargetRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (typeof contentHeight === 'undefined') {
      return;
    }
    if (latest >= Math.abs(contentHeight / 2)) {
      setIsView(true);
    } else {
      setIsView(false);
    }
  });

  useEffect(() => {
    const content = document.body.querySelector('.content');
    setContentHeight(content?.getBoundingClientRect().height);
  }, []);

  const onScrollUpClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div ref={arrowUpEnableTargetRef}></div>
      <div
        className={CommonUtils.combineClassName(
          'fixed bottom-36 right-10 max-[1000px]:hidden xl:right-32 bg-teal-400 p-3 rounded-full text-neutral-100 text-xl cursor-pointer z-10',
          isView ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={onScrollUpClick}
      >
        <FaArrowUp />
      </div>
    </>
  );
}
