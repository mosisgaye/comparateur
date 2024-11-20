import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', 
        allow: '/',
        disallow: [
          '/go', 
        ],
      },
      {
        userAgent: 'BadBot', 
        disallow: '/', 
      },
    ],
    sitemap: 'https://compareprix.net/sitemap.xml',
    host: 'https://compareprix.net',
  };
}
