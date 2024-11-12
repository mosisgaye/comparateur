// lib/contentful.js
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default client;

export async function fetchBlogPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost', 
  });
  return entries.items;
}

