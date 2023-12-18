import React from 'react';
import { Post } from '@/service/posts';
import PostCard from '@/components/posts/PostCard';

type PostsGridProps = {
  posts: Post[];
};

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className="min-w-[100%] md:min-w-[80%] mx-auto p-1 max-sm:p-3 max-md:p-2 grid gap-4 grid-cols-1">
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
