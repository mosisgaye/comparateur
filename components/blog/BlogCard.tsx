"use client";

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { UserAvatar } from '@/components/common/UserAvatar';
import { BlogPost } from '@/app/lib/types/contentful';
import { getImageUrl } from '@/utils/contentful';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const { title, slug, excerpt, publishedDate, featuredImage, author } = post.fields;
  const imageUrl = getImageUrl(featuredImage.fields.file.url);
  
  return (
    <Link href={`/blog/${slug}`}>
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h3 className="mb-2 text-2xl font-bold tracking-tight">{title}</h3>
          <p className="mb-4 text-muted-foreground">{excerpt}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center space-x-4">
            <UserAvatar 
              src={author.avatar} 
              name={author.name} 
              className="h-8 w-8"
            />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{author.name}</p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(publishedDate), 'MMMM d, yyyy')}
              </p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}