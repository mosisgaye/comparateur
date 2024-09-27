import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogPostProps {
  params: { slug: string };
}

// Fonction pour générer des Metadata dynamiques
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const supabase = createClient();
  const { data: article } = await supabase
    .from('articles')
    .select('titre, description')
    .eq('id', params.slug)
    .single();

  if (!article) {
    return {
      title: 'Article non trouvé',
      description: 'Cet article est introuvable ou a été supprimé.',
    };
  }

  return {
    title: `${article.titre} - Blog Télécom & Énergie`,
    description: article.description,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const supabase = createClient();
  const { data: article, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.slug)
    .single();

  if (error || !article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative h-64 bg-gray-200">
          <img 
            src={article.image_url} 
            alt={article.titre} 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{article.titre}</h1>
          <p className="text-gray-600 mb-6">{article.description}</p>

          {/* Additional Information */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>Publié le : {new Date(article.created_at).toLocaleDateString()}</span>
            <span>{article.author}</span>
          </div>
        </div>
      </article>

      {/* Back to Articles Button */}
      <div className="mt-8">
        <a href="/articles" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300 ease-in-out">
          Retour aux articles
        </a>
      </div>
    </div>
  );
}
