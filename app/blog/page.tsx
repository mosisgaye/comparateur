import { getBlogPosts } from '@/app/lib/contentful';
import { BlogGrid } from '@/components/blog/BlogGrid';

export default async function page() {
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
        Comment Choisir Votre Box Internet et Forfait Mobile
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
        Trouvez la box internet qui vous convient le mieux grâce à notre guide d'achat complet. Apprenez tout sur la fibre optique et comment augmenter le débit de votre connexion. - Découvrez notre comparateur pour les meilleurs téléphones et box internet en France.
        </p>
      </div>
      <BlogGrid posts={posts} />
    </main>
  );
}