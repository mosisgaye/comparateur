import { getBlogPosts } from '@/app/lib/contentful';
import BlogList  from '@/components/blog/BlogList';


export default async function Home() {
  const { items: posts, error } = await getBlogPosts();

  if (error) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-destructive">{error}</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Our Blog
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Discover insightful articles, expert opinions, and the latest trends in technology,
          design, and development.
        </p>
      </div>
      <BlogList posts={posts} />
    </main>
  );
}
