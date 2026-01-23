// types/blog.ts
export interface BlogFrontmatter {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string; // "2025-11-23"
  readTime: string; // "6 min read"
  image: string;
  category: string;
  feature?: boolean;
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  html: string; // HTML string after remark processing
  content?: string; // optional: raw markdown if you want to keep it
}
