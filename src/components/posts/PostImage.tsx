'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type PostImageProps = {
  path: string;
  title: string;
};

export default function PostImage({ path, title }: PostImageProps) {
  const [isError, setIsError] = useState<boolean>(false);
  const [fallbackPath] = useState<string>('basic-image');

  return (
    <Image
      className="w-full h-1/5 max-h-[500px] select-none rounded-md"
      src={`/images/posts/${isError ? fallbackPath : path}.png`}
      alt={title}
      width={500}
      height={400}
      onError={() => {
        setIsError(true);
      }}
    />
  );
}
