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

export type PostData = Post & { content: string };

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

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);
  const metadata = await getAllPublicPosts() //
    .then((posts) => posts.find((post) => post.path === fileName));
  if (!metadata) {
    throw new Error(`${fileName}에 해당하는 포스트가 없습니다.`);
  }
  const content = await readFile(filePath, 'utf8');
  return { ...metadata, content };
}
