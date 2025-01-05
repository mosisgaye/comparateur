import { BlogPost } from '@/app/lib/types/contentful';

export function getAuthorInitial(author: BlogPost['fields']['author']): string {
  return author?.name ? author.name.charAt(0) : '?';
}

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
        name: post.fields.author?.name || '',
        avatar: post.fields.author?.avatar || '',
        fields: ''
      },
      featuredImage: {
        fields: {
          file: {
            url: getImageUrl(post.fields.featuredImage?.fields.file.url || ''),
          },
        },
      },
      tags: post.fields.tags || [],
      shortDescription: ''
    },
    sys: {
      id: post.sys.id,
    },
  };
}
