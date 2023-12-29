import path from 'path';
import { readFile } from 'fs/promises';
import { cache } from 'react';

export type Post = {
  title: string;
  description: string;
  date: Date;
  tags: string[];
  path: string;
  hasImage: boolean;
  isPublic: boolean;
};

export type PostData = Post & { content: string; prevPost: Post | null; nextPost: Post | null };

export const getAllPosts = cache(async () => {
  try {
    const filePath = path.join(process.cwd(), 'data', 'post.json');
    const postsData = await readFile(filePath, 'utf8');
    const posts: Post[] = JSON.parse(postsData);
    const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
    return sortedPosts;
  } catch (error) {
    return [];
  }
});

export async function getAllPublicPosts(): Promise<Post[]> {
  return getAllPosts().then(posts => posts.filter(post => post.isPublic));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const posts = await getAllPublicPosts(); //
  const metadata = posts.find(post => post.path === fileName);
  if (!metadata) {
    throw new Error(`${fileName}에 해당하는 포스트가 없습니다.`);
  }
  const targetIndex = posts.indexOf(metadata);
  const prevPost = targetIndex < posts.length ? posts[targetIndex + 1] ?? null : null;
  const nextPost = targetIndex > 0 ? posts[targetIndex - 1] ?? null : null;
  const content = await readFile(filePath, 'utf8');
  return { ...metadata, content, prevPost, nextPost };
}
