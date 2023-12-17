'use client';

import { useState, useCallback } from 'react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = useCallback(async (copyText: string) => {
    try {
      await navigator.clipboard.writeText(copyText);
      setIsCopied(true);
      // TODO 임시 처리
      alert('클립보드에 복사되었습니다.');
    } catch (error) {
      setIsCopied(false);
    }
  }, []);

  return { isCopied, copyToClipboard };
};
