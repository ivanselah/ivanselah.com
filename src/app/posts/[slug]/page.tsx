import React from 'react';
import { getAllPublicPosts, getPostData } from '@/service/posts';
import MarkdownViewer from '@/components/posts/MarkdownViewer';
import Image from 'next/image';
import PreNextPostCard from '@/components/posts/PreNextPostCard';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: PostPageProps) {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const { content, path, title, description, prevPost, nextPost } = await getPostData(slug);
  console.log('prevPost', prevPost);
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
        <div className="w-60 border-2 border-sky-600 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
      <section className="w-full h-32 py-7 max-md:flex-col md:relative">
        {prevPost && <PreNextPostCard post={prevPost} type="prev" isLastPost={nextPost === null} />}
        {nextPost && <PreNextPostCard post={nextPost} type="next" isLastPost={prevPost === null} />}
      </section>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPublicPosts();
  return posts.map(post => ({
    slug: post.path,
  }));
}
