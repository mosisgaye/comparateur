export interface BlogPost {
    id: string;
    fields: {
      title: string;
      slug: string;
      excerpt: string;
      content: string; 
      shortDescription: string;
      publishedDate: string;
      author: {
        fields: string;
        name: string;
        avatar: string;
      };
      featuredImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      tags: string[];
    };
    sys: {
      id: string;
    };
  }
  
  export interface ContentfulResponse<T> {
    items: T[];
    total: number;
    error: string | null;
  }