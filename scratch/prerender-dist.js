import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'client/dist');
const templatePath = path.resolve(distDir, 'index.html');

console.log('====================================================');
console.log('🚀 HMDevTools Static Prerender HTML Generator');
console.log('====================================================\n');

if (!fs.existsSync(templatePath)) {
  console.error('Error: client/dist/index.html not found. Run "npm run build --prefix client" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf8');

// Read tools data from tools.js
const toolsFilePath = path.resolve(rootDir, 'client/src/registry/tools.js');
const toolsContent = fs.readFileSync(toolsFilePath, 'utf8');

// Extract active tools info using regex parser
const activeTools = [];
const toolBlockMatches = [...toolsContent.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?description:\s*['"]([^'"]+)['"][\s\S]*?status:\s*['"]active['"]/g)];

toolBlockMatches.forEach(m => {
  activeTools.push({
    id: m[1],
    name: m[2],
    slug: m[3],
    description: m[4]
  });
});

const pagesToPrerender = [
  { route: '/tools', title: 'All Developer Tools & Utilities — HMDevTools', desc: 'Browse our complete catalog of developer tools: JSON formatters, Base64 encoders, UUID generators, regex testers, and more.' },
  { route: '/categories', title: 'Developer Tool Categories Index — HMDevTools', desc: 'Explore developer utilities categorized by data formats, encodings, web formatters, dates, regex, SQL, and code generators.' },
  { route: '/about', title: 'About HMDevTools — Fast, Private Developer Utilities', desc: 'HMDevTools provides practical, privacy-conscious online developer tools powered by browser-local processing.' },
  { route: '/how-it-works', title: 'How HMDevTools Works — Local Processing Architecture', desc: 'Learn how HMDevTools processes data inside your browser memory context for maximum security and sub-10ms performance.' },
  { route: '/resources', title: 'Developer Guides & Learning Resources — HMDevTools', desc: 'Comprehensive guides, cheat sheets, and tutorials for web developers and backend engineers.' },
  { route: '/faq', title: 'Frequently Asked Questions — HMDevTools', desc: 'Answers to common questions regarding HMDevTools privacy, security, and developer utilities.' },
  { route: '/contact', title: 'Contact Engineering Team — HMDevTools', desc: 'Get in touch with the HMDevTools engineering team for feedback, feature requests, or custom utility inquiries.' },
  { route: '/api', title: 'Developer API Overview — HMDevTools', desc: 'Integrate HMDevTools utility APIs directly into your backend services.' },
  { route: '/privacy', title: 'Privacy Policy — HMDevTools', desc: 'HMDevTools privacy policy detailing browser-local computation and zero-tracking commitment.' },
  { route: '/terms', title: 'Terms of Service — HMDevTools', desc: 'HMDevTools terms of service and usage guidelines.' },
  { route: '/cookies', title: 'Cookie Policy — HMDevTools', desc: 'HMDevTools cookie policy.' },
  { route: '/sitemap', title: 'HTML Sitemap — HMDevTools', desc: 'Index of all HMDevTools pages and active tools.' }
];

// Add active tool pages
activeTools.forEach(t => {
  pagesToPrerender.push({
    route: `/tools/${t.slug}`,
    title: `${t.name} Online | HMDevTools`,
    desc: t.description,
    h1: t.name
  });
});

let count = 0;

pagesToPrerender.forEach(p => {
  const pageHtml = templateHtml
    .replace('<title>HMDevTools — Developer tools that just work.</title>', `<title>${p.title}</title>`)
    .replace('<meta name="description" content="Fast, practical, privacy-focused online developer utilities." />', `<meta name="description" content="${p.desc}" />\n    <meta property="og:title" content="${p.title}" />\n    <meta property="og:description" content="${p.desc}" />\n    <link rel="canonical" href="https://hmdevtools.com${p.route}" />`)
    .replace('<div id="root"></div>', `<div id="root"><main style="max-width:1200px;margin:0 auto;padding:2rem 1rem;"><h1>${p.h1 || p.title}</h1><p>${p.desc}</p></main></div>`);

  const relDir = p.route.startsWith('/') ? p.route.slice(1) : p.route;
  const targetDir = path.resolve(distDir, relDir);

  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageHtml, 'utf8');
  count++;
});

console.log(`✓ Prerendered ${count} static HTML pages in client/dist/! Crawlers will now receive pre-hydrated HTML markup!`);
