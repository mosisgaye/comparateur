import { createClient } from 'contentful';
import { BlogPost, ContentfulResponse } from '@/app/lib/types/contentful';
import { serializeBlogPost } from '@/utils/contentful';

// Configuration du client Contentful
const client = createClient({
  space: 'uwj2nz7k72gm',
  accessToken: '6S9881x_GMSedikiJYQJu58JPx9YZGo3i-c2zrJR-I8',
  environment: 'master',
});

// Fonction pour récupérer tous les articles de blog
export const getBlogPosts = async (): Promise<ContentfulResponse<BlogPost>> => {
  try {
    // Récupération des entrées depuis Contentful
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2, 
    });

    // Sérialisation des articles récupérés
    const serializedPosts = response.items.map(serializeBlogPost);

    return {
      items: serializedPosts,
      total: response.total,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching blog posts:', {
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : null,
    });

    return {
      items: [],
      total: 0,
      error: 'Failed to fetch blog posts. Please try again later.',
    };
  }
};

// Fonction pour récupérer un article de blog spécifique par slug
export const getBlogPost = async (slug: string): Promise<{
  post: BlogPost | null;
  error: string | null;
}> => {
  try {
    // Récupération de l'article avec le slug correspondant
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      'fields.slug': slug,
      limit: 1,
      include: 2, // Inclure les relations (liens) jusqu'à une profondeur de 2
    });

    // Si aucun article n'est trouvé
    if (!response.items.length) {
      return {
        post: null,
        error: 'Post not found.',
      };
    }

    // Sérialisation de l'article trouvé
    const serializedPost = serializeBlogPost(response.items[0]);

    return {
      post: serializedPost,
      error: null,
    };
  } catch (error) {
    console.error('Error fetching blog post:', {
      message: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : null,
    });

    return {
      post: null,
      error: 'Failed to fetch blog post. Please try again later.',
    };
  }
};
