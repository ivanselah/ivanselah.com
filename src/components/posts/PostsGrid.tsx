import React from 'react';
import { Post } from '@/service/posts';
import PostCard from '@/components/posts/PostCard';

type PostsGridProps = {
  posts: Post[],
};

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className="min-w-[80%] mx-auto p-1 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      {posts.map(post => {
        return (
          <li key={post.path}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}
