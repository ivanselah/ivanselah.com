import React from 'react';
import PostsGrid from '@/components/posts/PostsGrid';
import { getAllPublicPosts } from '@/service/posts';

export default async function Posts() {
  const posts = await getAllPublicPosts();
  return (
    <section>
      <h1 className='text-2xl font-bold mb-10'>Featured Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
