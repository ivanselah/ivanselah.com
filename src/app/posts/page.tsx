import React from 'react';
import { getAllPublicPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';

export default async function PostsPage() {
  const posts = await getAllPublicPosts();
  const tags = Array.from(new Set(posts.map(post => post.tag)));

  return (
    <>
      <FilterablePosts posts={posts} tags={tags} />
    </>
  );
}
