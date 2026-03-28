import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://www.cadgetools.com' });

const pages = [
  '/',
  '/about',
  '/products',
  '/services',
  '/contact'
];

(async () => {
  const stream = sitemap;
  pages.forEach(url => stream.write({ url }));
  stream.end();

  const data = await streamToPromise(stream);
  writeFileSync('./public/sitemap.xml', data.toString());
})();