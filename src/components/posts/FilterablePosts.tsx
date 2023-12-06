'use client';

import React from 'react';
import { Post } from '@/service/posts';
import PostsGrid from '@/components/posts/PostsGrid';
import Tags from '@/components/posts/Tags';
import { useSelectTagStore } from '@/store/store';

type FilterablePostsProps = {
  posts: Post[],
  tags: string[],
};

const ALL_POSTS = '전체보기';

export default function FilterablePosts({ posts, tags }: FilterablePostsProps) {
  const { selectedTag, setSelectedTag } = useSelectTagStore();
  const filteredPosts =
    selectedTag === ALL_POSTS
      ? posts
      : posts.filter(post => post.tags.includes(selectedTag));

  const onTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <section className="flex flex-col md:flex-row mt-15">
      <Tags
        tags={[ALL_POSTS, ...tags]}
        selectedTag={selectedTag}
        onClick={onTagClick}
      />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
}
