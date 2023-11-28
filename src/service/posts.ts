import path from 'path';
import { readFile } from 'fs/promises';

export type Post = {
  title: string;
  description: string;
  date: Date;
  tag: string;
  path: string;
  isPublic: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'post.json');
    const postsData = await readFile(filePath, 'utf8');
    const posts: Post[] = JSON.parse(postsData);
    const sortedPosts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
    return sortedPosts;
  } catch (error) {
    return [];
  }
}

export async function getAllPublicPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.isPublic));
}
