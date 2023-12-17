'use client';

import React from 'react';
import Link from 'next/link';
import { Post } from '@/service/posts';
import { useSelectTagStore } from '@/store/store';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post: { title, description, date, path, tags } }: PostCardProps) {
  const { setSelectedTag } = useSelectTagStore();

  return (
    <section className="h-fit dark:border-solid border dark:border dark:border-neutral-400 rounded-md overflow-hidden hover:shadow-lg hover:shadow-neutral-100 dark:hover:shadow-neutral-800">
      <Link href={`/posts/${path}`} scroll={false}>
        <article>
          <div className="flex flex-col p-4">
            <h3 className="text-xl max-sm:text-sm font-bold text-left mb-4">{title}</h3>
            <p className="w-full max-sm:text-sm truncate">{description}</p>
          </div>
        </article>
      </Link>
      <ul className="flex mt-1 cursor-pointer pl-3">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="bg-slate-100 m-1 p-1 px-3 rounded-2xl text-teal-500 hover:text-teal-300 dark:bg-neutral-800"
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="w-full h-full border-t-2 border-neutral-100 dark:border-neutral-800 mt-5 p-3 text-center">
        <time className="block text-left pl-1 max-sm:text-sm">{date.toString()}</time>
      </div>
    </section>
  );
}
