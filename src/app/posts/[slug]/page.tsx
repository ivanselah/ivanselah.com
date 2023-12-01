import React from 'react';
import { getPostData } from '@/service/posts';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPostData(slug);

  return <div>{post.content}</div>;
}
