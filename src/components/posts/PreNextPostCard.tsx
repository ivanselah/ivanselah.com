import { Post } from '@/service/posts';
import { CommonUtils } from '@/utils/common';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type PreNextPostCardProps = {
  post: Post;
  type: 'prev' | 'next';
  isLastPost: boolean;
};

const ICON_CLASS = 'text-3xl m-4 text-yellow-300 transition-all group-hover:text-6xl';

export default function PreNextPostCard({ post: { path, title }, type, isLastPost }: PreNextPostCardProps) {
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
        {type === 'prev' && (
          <FaArrowLeft className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl  text-teal-300 transition-all group-hover:text-4xl" />
        )}
        {type === 'next' && (
          <FaArrowRight className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl  text-teal-300 transition-all group-hover:text-4xl" />
        )}
        <span className="text-sm font-bold">{type === 'prev' ? '이전 포스트' : '다음 포스트'}</span>
        <h3 className="text-xl my-1 font-bold truncate">{title}</h3>
      </div>
    </Link>
  );
}
