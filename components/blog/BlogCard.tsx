import React from 'react';
import Link from 'next/link';
import { formatDate } from '@/utils/date';
import { getImageUrl } from '@/utils/image';

// Interface pour le type "Author"
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

// Interface pour le type "FeaturedImage"
interface FeaturedImage {
  fields: {
    file: {
      url: string;
    };
  };
}

// Interface pour le type "Post"
interface Post {
  fields: {
    title: string;
    shortDescription?: string; // Optionnel
    slug: string;
    featuredImage?: FeaturedImage; // Optionnel
    publishedDate?: string; // Optionnel
    author?: Author; // Optionnel
  };
}

// Interface pour les props du composant BlogCard
interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { 
    title, 
    shortDescription, 
    slug, 
    featuredImage, 
    publishedDate,
    author 
  } = post.fields;
  
  const imageUrl = getImageUrl(featuredImage, {
    width: 800,
    height: 400,
    quality: 80,
    fit: 'fill'
  });
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-2">
          {author?.fields?.avatar && (
            <img 
              src={getImageUrl(author.fields.avatar, { width: 40, height: 40 })}
              alt={author.fields.name}
              className="w-10 h-10 rounded-full mr-3"
            />
          )}
          <div>
            {author?.fields?.name && (
              <p className="text-sm font-medium text-gray-900">
                {author.fields.name}
              </p>
            )}
            <p className="text-sm text-gray-500">
              {publishedDate && formatDate(publishedDate)}
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h2>
        {shortDescription && (
          <p className="text-gray-600 mb-4 line-clamp-3">{shortDescription}</p>
        )}
        <Link 
          href={`/blog/post/${slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
        >
          Lire Plus 
          <svg 
            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
