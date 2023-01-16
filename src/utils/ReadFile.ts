import fs from 'fs';

import matter from 'gray-matter';

export function getMarkdownData(path: string): { data: any; content: string } {
  // Read the .md file
  const markdownContent = fs.readFileSync(path, 'utf8');

  // Parse the front matter and content of the file
  const { data, content } = matter(markdownContent);

  return { data, content };
}
