import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPost } from '@/app/lib/types/contentful';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.sys.id} post={post} />
      ))}
    </div>
  );
}