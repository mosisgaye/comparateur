import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

export default client;

export const getBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      include: 2
    });

    return {
      items: response.items,
      total: response.total,
      error: null
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      items: [],
      total: 0,
      error: 'Failed to fetch blog posts. Please try again later.'
    };
  }
};

export const getBlogPost = async (slug: string) => {
  try {
    const response = await client.getEntries({
      content_type: 'pageBlogPost',
      'fields.slug': slug,
      limit: 1,
      include: 2
    });

    return {
      post: response.items[0] || null,
      error: null
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      post: null,
      error: 'Failed to fetch blog post. Please try again later.'
    };
  }
};