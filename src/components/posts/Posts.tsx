import React from 'react';
import PostsGrid from '@/components/posts/PostsGrid';
import { getAllPublicPosts } from '@/service/posts';

export default async function Posts() {
  const posts = await getAllPublicPosts();
  return (
    <section>
      <h2>Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
