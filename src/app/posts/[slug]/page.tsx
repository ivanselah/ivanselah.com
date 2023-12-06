import React from 'react';
import { getPostData } from '@/service/posts';
import MarkdownViewer from '@/components/posts/MarkdownViewer';
import Image from 'next/image';

type PostPageProps = {
  params: {
    slug: string,
  },
};

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const { content, path, title, description } = await getPostData(slug);

  return (
    <article className="max-w-[850px] mx-auto  m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={500}
        height={400}
      />
      <section className="flex flex-col p-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="w-60 border-2 border-sky-600 mt-4 mb-8"></div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
