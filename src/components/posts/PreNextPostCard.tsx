import { Post } from '@/service/posts';
import { CommonUtils } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type PreNextPostCardProps = {
  post: Post;
  type: 'prev' | 'next';
};

const ARROW_ICON_CLASS =
  'absolute top-1/2 -translate-y-1/2 text-3xl max-md:text-2xl text-teal-300 transition-all group-hover:text-4xl max-md:group-hover:text-3xl';

export default function PreNextPostCard({ post: { path, title }, type }: PreNextPostCardProps) {
  return (
    <Link
      href={`/posts/${path}`}
      className={CommonUtils.combineClassName('w-1/2 md:absolute px-3', type === 'prev' ? 'left-0' : 'right-0')}
    >
      <div
        className={CommonUtils.combineClassName(
          'group w-full relative text-center py-2 rounded-lg bg-neutral-100 dark:bg-neutral-900',
        )}
      >
        {type === 'prev' && <FaArrowLeft className={CommonUtils.combineClassName(ARROW_ICON_CLASS, 'left-4')} />}
        {type === 'next' && <FaArrowRight className={CommonUtils.combineClassName(ARROW_ICON_CLASS, 'right-4')} />}
        <span className="text-xs font-bold">{type === 'prev' ? '이전 포스트' : '다음 포스트'}</span>
        <h3 className="text-xl max-md:text-base my-1 font-bold truncate">{title}</h3>
      </div>
    </Link>
  );
}
