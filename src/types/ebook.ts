export interface Ebook {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  colorKey: string;
  colors: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  coverEmoji: string;
  coverImage: string;
  features: string[];
  toc: TocItem[];
  fileKey: string;
  purchaseUrl: string;
  previewUrl?: string;
  pageCount: number;
  publishedDate: string;
}

export interface TocItem {
  chapter: string;
  title: string;
  items?: string[];
}
