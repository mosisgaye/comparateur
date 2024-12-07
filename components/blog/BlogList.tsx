import React from 'react';
import BlogCard from './BlogCard';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { ERROR_MESSAGES } from '@/app/lib/types';

// Importer ou définir le type Post utilisé par BlogCard
interface FeaturedImage {
  fields: {
    file: {
      url: string;
    };
  };
}

interface Author {
  fields: {
    name: string;
    avatar?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface Post {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    shortDescription?: string;
    slug: string;
    featuredImage?: FeaturedImage;
    publishedDate?: string;
    author?: Author;
  };
}

// Définir les props de BlogList
interface BlogListProps {
  posts: Post[];
  error?: boolean;
}

export default function BlogList({ posts, error }: BlogListProps) {
  if (error) {
    return <ErrorMessage message={ERROR_MESSAGES.POSTS_FETCH_ERROR} />;
  }

  if (!posts.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.sys.id} post={post} />
      ))}
    </div>
  );
}
