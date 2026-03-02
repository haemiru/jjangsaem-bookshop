import { Ebook } from "@/types/ebook";
import { BlogPost } from "@/types/blog";

const SITE_URL = "https://jjangsaem.vercel.app";

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "짱샘의 치유책방",
    url: SITE_URL,
    description:
      "발달장애 아동의 후각 훈련, 수면 개선, 부모 치유를 위한 감각 기반 치유 전자책",
    author: {
      "@type": "Person",
      name: "짱샘",
    },
  };
}

export function generateBookSchema(ebook: Ebook) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: ebook.title,
    description: ebook.description,
    author: {
      "@type": "Person",
      name: ebook.author,
    },
    url: `${SITE_URL}/ebook/${ebook.slug}`,
    bookFormat: "EBook",
    numberOfPages: ebook.pageCount,
    datePublished: ebook.publishedDate,
    inLanguage: "ko",
    offers: {
      "@type": "Offer",
      price: ebook.price,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
      url: ebook.purchaseUrl,
    },
  };
}

export function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: "짱샘",
    },
    url: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "ko",
  };
}
