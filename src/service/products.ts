import path from 'path';
import { promises as fs } from 'fs';

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

export async function getProduct(id: string) {
  return (await getProducts()).find((product) => product.id === id);
}
