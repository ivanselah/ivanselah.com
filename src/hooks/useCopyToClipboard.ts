'use client';

import { useState, useCallback } from 'react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = useCallback((copyText: string) => {
    navigator.clipboard
      .writeText(copyText) //
      .then(() => {
        setIsCopied(true);
      })
      .catch(() => {
        setIsCopied(false);
      });
  }, []);

  return { isCopied, copyToClipboard };
};
