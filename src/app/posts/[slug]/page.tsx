import React from 'react';
import { getAllPublicPosts, getPostData } from '@/service/posts';
import MarkdownViewer from '@/components/posts/MarkdownViewer';
import PreNextPostCard from '@/components/posts/PreNextPostCard';
import LikeShareIsland from '@/components/posts/LikeShareIsland';
import PostImage from '@/components/posts/PostImage';
import PostComment from '@/components/posts/PostComment';
import PostScrollProgressBar from '@/components/posts/PostScrollProgressBar';

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
  const { content, path, title, prevPost, nextPost } = await getPostData(slug);

  return (
    <>
      <PostScrollProgressBar />
      <LikeShareIsland slug={slug} />
      <article className="max-w-[850px] mx-auto m-4">
        <PostImage path={path} title={title} />
        <section className="flex flex-col p-4">
          <h1 className="max-md:text-2xl text-4xl font-bold">{title}</h1>
          <div className="w-60 border-2 border-sky-600 mt-4 mb-8" />
          <MarkdownViewer content={content} />
        </section>
        <section className="w-full h-32 py-7 max-md:flex-col max-md:px-4 md:relative mt-7 border-t border-neutral-300 dark:border-neutral-100">
          {prevPost && <PreNextPostCard post={prevPost} type="prev" />}
          {nextPost && <PreNextPostCard post={nextPost} type="next" />}
        </section>
      </article>
      <PostComment />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPublicPosts();
  return posts.map(post => ({
    slug: post.path,
  }));
}
