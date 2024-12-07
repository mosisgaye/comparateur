export const getImageUrl = (image, options = {}) => {
  if (!image?.fields?.file?.url) {
    return null;
  }

  let url = image.fields.file.url;
  
  // Ensure HTTPS
  if (url.startsWith('//')) {
    url = `https:${url}`;
  }

  // Add query parameters for image optimization if provided
  const queryParams = new URLSearchParams();
  if (options.width) queryParams.append('w', options.width);
  if (options.height) queryParams.append('h', options.height);
  if (options.quality) queryParams.append('q', options.quality);
  if (options.format) queryParams.append('fm', options.format);
  if (options.fit) queryParams.append('fit', options.fit);

  const queryString = queryParams.toString();
  return queryString ? `${url}?${queryString}` : url;
};