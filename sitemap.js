import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'fs'

const sitemap = new SitemapStream({ hostname: 'https://www.onlinesportstech.com' });

// Correctly handle the writable stream
const writeStream = createWriteStream('./public/sitemap.xml');

// Make sure you pipe before writing URLs
sitemap.pipe(writeStream);

// Add URLs correctly
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.7 });

// End the sitemap properly
sitemap.end();

// Handle stream events properly
writeStream.on('finish', () => {
  console.log('Sitemap successfully created!');
});

writeStream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
});