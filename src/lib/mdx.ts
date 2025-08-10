import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMDXContent(filePath: string) {
  const fullPath = path.join(contentDirectory, filePath);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  
  const mdxSource = await serialize(fileContent, {
    parseFrontmatter: true
  });
  
  return mdxSource;
}