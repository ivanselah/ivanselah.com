import React from 'react';
import PostsGrid from '@/components/posts/PostsGrid';
import { getAllPosts } from '@/service/posts';

export default async function Posts() {
  const item = await getAllPosts();
  return (
    <section>
      <h2>Posts</h2>
      <PostsGrid />
    </section>
  );
}
