'use client';

import { CommonUtils } from '@/utils/common';
import { useEffect, useState } from 'react';
import { GoHeartFill as Like, GoShare } from 'react-icons/go';

export default function LikeHeart() {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0); // TODO save into DB

  useEffect(() => {
    // TODO from DB
    setLikeCount(isLike ? 1 : 0);
  }, [isLike]);

  const onLikeIconClick = () => {
    setIsLike(preIsLike => !preIsLike);
  };

  return (
    <div
      className={CommonUtils.combineClassName(
        'select-none fixed flex flex-col items-center justify-around top-36 translate-x-24 bg-neutral-100 dark:bg-neutral-800 h-36 rounded-3xl p-3',
        'max-[1200px]:hidden',
      )}
    >
      <div
        className={CommonUtils.combineClassName(
          'text-2xl cursor-pointer rounded-3xl p-2 border border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800',
          isLike ? 'text-rose-500' : 'text-neutral-500',
        )}
        onClick={onLikeIconClick}
      >
        <Like />
      </div>
      <span className="-mt-2 text-sm">{likeCount}</span>
      <div className="text-2xl cursor-pointer rounded-3xl p-2 border border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800">
        <GoShare />
      </div>
    </div>
  );
}
