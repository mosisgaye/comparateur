import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://compareprix.net/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
    // Ajoutez ici d'autres articles de blog dynamiques, si nécessaire.
  ];
}
