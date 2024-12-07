import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { formatDate } from "@/utils/date";
import { getImageUrl } from "@/utils/image";
import { getBlogPost } from "@/app/lib/contentful";
import { notFound } from "next/navigation"; // Utilisé pour gérer les erreurs côté serveur
import Link from "next/link";

// Options de rendu du contenu riche
const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: React.ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: React.ReactNode) => <code className="bg-gray-100 p-1 rounded">{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_1]: (_node: any, children: React.ReactNode) => <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>,
    [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => <h2 className="text-2xl font-bold mb-3 mt-6">{children}</h2>,
    [BLOCKS.HEADING_3]: (_node: any, children: React.ReactNode) => <h3 className="text-xl font-bold mb-3 mt-6">{children}</h3>,
    [BLOCKS.UL_LIST]: (_node: any, children: React.ReactNode) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    [BLOCKS.OL_LIST]: (_node: any, children: React.ReactNode) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (_node: any, children: React.ReactNode) => <li className="mb-2">{children}</li>,
    [BLOCKS.QUOTE]: (_node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
  },
};

// Fonction pour récupérer les données (côté serveur)
async function fetchBlogPost(slug: string) {
  const { post, error }: { post: any; error: string | null } = await getBlogPost(slug);

  if (error || !post) {
    notFound(); // Redirige vers la page 404
  }

  return post;
}

// Composant principal (côté serveur)
const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await fetchBlogPost(params.slug);

  const {
    title,
    content,
    featuredImage,
    publishedDate,
    author,
    shortDescription,
    relatedBlogPosts,
  } = post.fields;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        {featuredImage && (
          <img
            src={getImageUrl(featuredImage, { width: 1200, height: 600, quality: 85 })}
            alt={title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        )}

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {shortDescription && <p className="text-xl text-gray-600 mb-6">{shortDescription}</p>}

          <div className="flex items-center">
            {author?.fields?.avatar && (
              <img
                src={getImageUrl(author.fields.avatar, { width: 48, height: 48 })}
                alt={author.fields.name}
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div>
              {author?.fields?.name && <p className="font-medium text-gray-900">{author.fields.name}</p>}
              <time className="text-gray-600">{formatDate(publishedDate)}</time>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {documentToReactComponents(content, richTextOptions)}
        </div>
      </article>

      {relatedBlogPosts && relatedBlogPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedBlogPosts.map((relatedPost: any) => (
              <Link
                key={relatedPost.sys.id}
                href={`/blog/post/${encodeURIComponent(relatedPost.fields.slug)}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {relatedPost.fields.featuredImage && (
                  <img
                    src={getImageUrl(relatedPost.fields.featuredImage, { width: 400, height: 200 })}
                    alt={relatedPost.fields.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{relatedPost.fields.title}</h3>
                  {relatedPost.fields.shortDescription && (
                    <p className="text-gray-600 line-clamp-2">{relatedPost.fields.shortDescription}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
