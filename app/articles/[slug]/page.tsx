import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

interface BlogPostProps {
  params: { slug: string };
}

// Fonction pour générer des Metadata dynamiques
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const supabase = createClient();
  const { data: article } = await supabase
    .from('articles')
    .select('titre, description, paragraphe')
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
      <NewsletterSignup/>
      <article className="bg-white dark:bg-[#012737] shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative h-80 bg-gray-200">
          <img 
            src={article.image_url} 
            alt={article.titre} 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-[#111] dark:text-[#fff] mb-6">{article.titre}</h1>
          <p className="text-lg text-gray-700 mb-6 dark:text-[#ddd] leading-relaxed">{article.description}</p>
          
          {/* Paragraph Section */}
          <p className="text-md dark:text-[#eee] mb-6 leading-8">{article.paragraphe}</p> 

          {/* Additional Information */}
          <div className="flex justify-between items-center text-sm dark:text-[#ccc]">
            <span>Publié le : {new Date(article.created_at).toLocaleDateString()}</span>
            <span>{article.author}</span>
          </div>
        </div>
      </article>

      {/* Back to Articles Button */}
      <div className="mt-12 text-center">
        <a href="/articles" className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white py-3 px-6 rounded-full shadow-lg hover:from-blue-700 hover:to-blue-500 transition-all duration-300 ease-in-out">
          Retour aux articles
        </a>
      </div>
    </div>
  );
}
