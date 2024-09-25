// pages/blog/[slug].tsx

import { createClient } from '@/utils/supabase/server';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default async function BlogPost() {
  const router = useRouter();
  const { slug } = router.query; // Récupère le slug de l'URL

  const supabase = createClient();
  
  // Récupère l'article correspondant au slug (ID de l'article)
  const { data: article, error } = await supabase
    .from('articles')
    .select('id, titre, description, categorie, date, image_url')
    .eq('id', slug)
    .single(); // Utilise .single() pour obtenir un seul résultat

  if (error || !article) {
    return <p>Article not found: {error?.message}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src={article.image_url}
            alt={article.titre}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{article.titre}</h1>
          <p className="text-gray-700 mb-4">{article.description}</p>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-4">
            {article.categorie}
          </span>
          <p className="text-gray-500 text-sm mb-8">
            Publié le {new Date(article.date).toLocaleDateString()}
          </p>
        </div>
      </article>
    </div>
  );
}
