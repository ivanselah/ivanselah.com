import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/service/posts';

type PostCardProps = {
  post: Post,
};

export default function PostCard({
  post: { title, description, date, path },
}: PostCardProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="dark:border-solid dark:border-2 dark:border-neutral-400 rounded-md overflow-hidden shadow-lg hover:shadow-slate-100 dark:hover:shadow-slate-800">
        <Image
          className="w-full h-52"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={300}
          priority
        />
        <div className="flex flex-col items-center p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <div className="w-full h-full border-t-2 border-neutral-100 dark:border-neutral-800 mt-5 pt-3 text-center">
            <time>{date.toString()}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
