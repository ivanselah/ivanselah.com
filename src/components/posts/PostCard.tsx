import React from 'react';
import Link from 'next/link';
import { Post } from '@/service/posts';

type PostCardProps = {
  post: Post,
};

export default function PostCard({
  post: { title, description, date, path },
}: PostCardProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="h-fit border-2 dark:border-solid dark:border-2 dark:border-neutral-400 rounded-md overflow-hidden shadow-lg hover:shadow-slate-100 dark:hover:shadow-slate-800">
        <div className="flex flex-col p-4">
          <h3 className="text-xl font-bold text-left mb-4">{title}</h3>
          <p className="w-full truncate">{description}</p>
          <div className="w-full h-full border-t-2 border-neutral-100 dark:border-neutral-800 mt-5 pt-3 text-center">
            <time>{date.toString()}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}
