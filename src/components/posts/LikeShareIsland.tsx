'use client';

import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { usePostLikeHeartStore } from '@/store/store';
import { CommonUtils } from '@/utils/common';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import { GoHeartFill as Like, GoShare } from 'react-icons/go';

type LikeShareIslandProps = {
  slug: string;
};

const LIKE_SHARE_INCON_CALSS =
  'text-2xl cursor-pointer rounded-3xl p-2 border border-neutral-300 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800';

export default function LikeShareIsland({ slug }: LikeShareIslandProps) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { postLikeHeart, setTotalPostLikeCount } = usePostLikeHeartStore();
  const { isPostLike, totalPostLikeCount } = postLikeHeart;
  const { copyToClipboard } = useCopyToClipboard();

  useLayoutEffect(() => {
    // TODO from DB, slug
    // Post 별 DB로 부터 가져와서 store 에 설정 필요
    setIsMounted(true);
  }, []);

  const onLikeIconClick = () => {
    setTotalPostLikeCount(isPostLike ? -1 : 1);
  };

  const onShareIconClick = () => {
    copyToClipboard(origin + pathname);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={CommonUtils.combineClassName(
        'select-none fixed flex flex-col items-center justify-around top-36 translate-x-24 bg-neutral-100 dark:bg-neutral-800 h-36 rounded-3xl p-3',
        'max-[1200px]:hidden z-10',
      )}
    >
      <div
        className={CommonUtils.combineClassName(
          LIKE_SHARE_INCON_CALSS,
          isPostLike ? 'text-rose-500' : 'text-neutral-500',
        )}
        onClick={onLikeIconClick}
      >
        <Like />
      </div>
      <span className="-mt-2 text-sm">{totalPostLikeCount}</span>
      <div className={LIKE_SHARE_INCON_CALSS} onClick={onShareIconClick}>
        <GoShare />
      </div>
    </div>
  );
}
