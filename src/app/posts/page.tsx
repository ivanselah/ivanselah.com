import React from 'react';
import { Metadata } from 'next';
import { getAllPublicPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';

export const metadata: Metadata = {
  title: 'Blog',
  description: '프론트엔드 관련 기술 블로그 글',
};

export default async function PostsPage() {
  const posts = await getAllPublicPosts();
  const tags = posts.flatMap(post => post.tags);

  return (
    <>
      <FilterablePosts posts={posts} tags={tags} />
    </>
  );
}
