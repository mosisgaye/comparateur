export const CONTENT_TYPES = {
    BLOG_POST: 'blogPost',  
    POST: 'post'
  };
  
  export const ERROR_MESSAGES = {
    POSTS_FETCH_ERROR: 'Unable to load blog posts at this time',
    POST_FETCH_ERROR: 'Unable to load this blog post',
    POST_NOT_FOUND: 'Blog post not found'
  };
  
  export const LOADING_STATES = {
    INITIAL: 'initial',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
  };



  export type Post = {
    title: string;
    shortDescription?: string;
    slug: string;
    featuredImage?: {
      url: string;
      description?: string;
    };
    publishedDate?: string;
    author?: {
      name: string;
      avatar?: string;
    };
  };
  