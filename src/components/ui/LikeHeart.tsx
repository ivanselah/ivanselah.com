'use client';

import { usePostLikeHeartStore } from '@/store/store';
import { CommonUtils } from '@/utils/common';
import { useEffect, useState } from 'react';
import { GoHeartFill as Like, GoShare } from 'react-icons/go';

type LikeHeartProps = {
  slug: string;
};

export default function LikeHeart({ slug }: LikeHeartProps) {
  const { postLikeHeart, setTotalPostLikeCount } = usePostLikeHeartStore();

  useEffect(() => {
    // TODO from DB, slug
    // Post 별 DB로 부터 가져와서 store 에 설정 필요
  }, []);

  const onLikeIconClick = () => {
    setTotalPostLikeCount(postLikeHeart.isPostLike ? -1 : 1);
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
          postLikeHeart.isPostLike ? 'text-rose-500' : 'text-neutral-500',
        )}
        onClick={onLikeIconClick}
      >
        <Like />
      </div>
      <span className="-mt-2 text-sm">{postLikeHeart.totalPostLikeCount}</span>
      <div className="text-2xl cursor-pointer rounded-3xl p-2 border border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800">
        <GoShare />
      </div>
    </div>
  );
}
