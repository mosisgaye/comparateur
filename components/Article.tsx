import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';



export default async function Notes() {
  const supabase = createClient();
  const { data: articles, error } = await supabase.from('articles').select();

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
     
 
    <div className="container mx-auto px-4 py-8">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src={article.image_url}
                  alt={article.titre}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-2">
                    {article.categorie || 'Actualité'}
                  </span>
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    {article.titre}
                  </h2>
                  <p className="text-gray-700 text-sm">{article.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-xs text-gray-500 mb-4">
                    {new Date(article.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
   
 
    </div>
  );
}
