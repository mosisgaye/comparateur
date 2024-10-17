import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/go',
          '/archives/category/%E3%81%82%E3%81%9D%E3%81%B3%E3%81%82%E3%81%9D%E3%81%B0%E3%81%9B',
          '/archives/category/%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA%EF%BC%86%E3%83%91%E3%83%B3%E3%83%84%E3%82%A1%E3%83%BC',
          '/archives/category/%E7%B7%B4%E7%BF%92%E5%89%8D%E3%81%A0%E3%81%91%E3%81%A9%E6%88%91%E6%85%A2%E5%87%BA%E6%9D%A5%E3%81%AA%E3%81%84%E3%81%A7%E3%81%99',
          '/archives/category/%E5%BE%A1%E5%9F%8E%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88',
          '/archives/56760.html'
        ],
      },
    ],
    sitemap: 'https://compareprix.net/sitemap.xml',
  };
}
