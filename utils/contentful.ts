import { BlogPost } from '@/app/lib/types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

export function getImageUrl(url: string): string {
  return url.startsWith('//') ? `https:${url}` : url;
}

export function serializeBlogPost(post: any): BlogPost {
  return {
    id: post.sys.id,
    fields: {
      title: post.fields.title,
      slug: post.fields.slug,
      excerpt: post.fields.excerpt,
      content: post.fields.content,
      publishedDate: post.fields.publishedDate,
      author: {
        name: post.fields.author.fields.name,
        avatar: post.fields.author.fields.avatar,
      },
      featuredImage: {
        fields: {
          file: {
            url: post.fields.featuredImage.fields.file.url,
          },
        },
      },
      tags: post.fields.tags || [],
    },
    sys: {
      id: post.sys.id,
    },
  };
}

export function renderRichText(content: Document) {
  return documentToReactComponents(content);
}