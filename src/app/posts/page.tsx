import React from 'react';
import { getAllPublicPosts } from '@/service/posts';
import FilterablePosts from '@/components/posts/FilterablePosts';

export default async function PostsPage() {
  const posts = await getAllPublicPosts();
  const tags = posts.flatMap(post => post.tags);

  return (
    <>
      <FilterablePosts posts={posts} tags={tags} />
    </>
  );
}
