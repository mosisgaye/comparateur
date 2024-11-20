import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';

interface NotesProps {
  title: string;
  description: string;
}

export default async function Notes({ title, description }: NotesProps) {
  const supabase = createClient();
  const { data: articles, error } = await supabase.from('articles').select();

  if (error) {
    return <p>Error fetching: {error.message}</p>;
  }

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          {description} - Découvrez notre comparateur pour les meilleurs téléphones et box internet en France.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/articles/${article.id}`} key={article.id} passHref>
              <div className="group bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                <div className="relative w-full h-52">
                  <Image
                    src={article.image_url}
                    alt={article.titre}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full mb-4">
                    {article.categorie || 'Actualité'}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
                    {article.titre}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {article.description}
                  </p>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
