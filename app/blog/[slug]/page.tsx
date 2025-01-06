import Image from 'next/image';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/app/lib/contentful';
import { UserAvatar } from '@/components/common/UserAvatar';
import { getImageUrl, renderRichText } from '@/utils/contentful';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const { items: posts } = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.fields.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { post, error } = await getBlogPost(params.slug);

  if (error || !post) {
    notFound();
  }

  const { title, content, publishedDate, featuredImage, author } = post.fields;
  const imageUrl = getImageUrl(featuredImage.fields.file.url);

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <div className="flex items-center space-x-4">
          <UserAvatar 
            src={author.avatar} 
            name={author.name} 
            className="h-10 w-10"
          />
          <div>
            <p className="font-medium">{author.name}</p>
            <p className="text-3xl text-muted-foreground">
              {format(new Date(publishedDate), 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert text-2xl text-justify leading-10">
        {renderRichText(content)}
      </div>
    </article>
  );
}