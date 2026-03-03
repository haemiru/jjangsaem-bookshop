export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishedDate: string;
  coverColor: string;
  content?: string;
  coverImage?: string;
}
