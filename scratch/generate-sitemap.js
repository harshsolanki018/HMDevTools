import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const domain = 'https://hmdevtools.com';

// Read tools registry
const toolsFilePath = path.resolve(rootDir, 'client/src/registry/tools.js');
const toolsFileContent = fs.readFileSync(toolsFilePath, 'utf8');

// Extract active tool slugs using regex
const activeSlugMatches = [...toolsFileContent.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?status:\s*['"]active['"]/g)];
const activeSlugs = activeSlugMatches.map(m => m[1]);

const staticPages = [
  '',
  '/tools',
  '/categories',
  '/about',
  '/how-it-works',
  '/resources',
  '/faq',
  '/contact',
  '/api',
  '/api/docs',
  '/privacy',
  '/terms',
  '/cookies',
  '/sitemap'
];

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Static pages
staticPages.forEach(p => {
  xml += `  <url>\n`;
  xml += `    <loc>${domain}${p}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p === '' ? 'daily' : 'weekly'}</changefreq>\n`;
  xml += `    <priority>${p === '' ? '1.0' : '0.8'}</priority>\n`;
  xml += `  </url>\n`;
});

// Active Tool pages
activeSlugs.forEach(slug => {
  xml += `  <url>\n`;
  xml += `    <loc>${domain}/tools/${slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.9</priority>\n`;
  xml += `  </url>\n`;
});

xml += `</urlset>\n`;

const sitemapPath = path.resolve(rootDir, 'client/public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');

console.log(`✓ Reconciled Sitemap generated at ${sitemapPath} with ${staticPages.length + activeSlugs.length} indexable URLs!`);
