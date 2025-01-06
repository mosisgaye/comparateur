import { Document } from '@contentful/rich-text-types';

export interface BlogPost {
  id: string;
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: Document;
    publishedDate: string;
    author: {
      name: string;
      avatar: ContentfulImage;
    };
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    tags: string[];
  };
  sys: {
    id: string;
  };
}

export interface ContentfulImage {
  fields: {
    file: {
      url: string;
    };
  };
}

export interface ContentfulResponse<T> {
  items: T[];
  total: number;
  error: string | null;
}