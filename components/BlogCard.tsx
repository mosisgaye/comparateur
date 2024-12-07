import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

// Define the type for the 'post' prop
interface Post {
  fields: {
    title: string;
    excerpt?: string; // Optional property
    slug: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    publishDate?: string; // Optional property
  };
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, excerpt, slug, featuredImage, publishDate } = post.fields;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {featuredImage?.fields?.file?.url && (
        <img 
          src={featuredImage.fields.file.url}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          {publishDate && format(new Date(publishDate), 'MMMM dd, yyyy')}
        </p>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {excerpt && <p className="text-gray-600 mb-4">{excerpt}</p>}
        <Link 
          href={`/post/${slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
