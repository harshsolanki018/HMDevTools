import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('==================================================');
console.log('🧪 HMDevTools Comprehensive Automated QA & Audit');
console.log('==================================================\n');

let passedTests = 0;
let failedTests = 0;
const bugsFound = [];

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${message}`);
    failedTests++;
    bugsFound.push(message);
  }
}

// 1. Tool Registry Audit
console.log('--- 1. Tool Registry Audit ---');

const toolsContent = fs.readFileSync(path.join(rootDir, 'client/src/registry/tools.js'), 'utf8');
const componentMapContent = fs.readFileSync(path.join(rootDir, 'client/src/registry/componentMap.js'), 'utf8');

// Parse active tools from tools.js
const toolIdMatches = toolsContent.match(/id:\s*['"]([^'"]+)['"]/g) || [];
const toolSlugMatches = toolsContent.match(/slug:\s*['"]([^'"]+)['"]/g) || [];
const toolStatusMatches = toolsContent.match(/status:\s*['"]([^'"]+)['"]/g) || [];
const toolComponentMatches = toolsContent.match(/component:\s*['"]([^'"]+)['"]/g) || [];

assert(toolIdMatches.length > 0, `Total tools parsed in tools.js: ${toolIdMatches.length}`);

let activeCount = 0;
let comingSoonCount = 0;

toolStatusMatches.forEach((s, idx) => {
  const status = s.split(':')[1].replace(/['"\s]/g, '');
  const comp = toolComponentMatches[idx] ? toolComponentMatches[idx].split(':')[1].replace(/['"\s]/g, '') : '';
  const slug = toolSlugMatches[idx] ? toolSlugMatches[idx].split(':')[1].replace(/['"\s]/g, '') : '';

  if (status === 'active') {
    activeCount++;
    const isMapped = componentMapContent.includes(comp);
    assert(isMapped, `Active tool slug "${slug}" has component binding "${comp}" in COMPONENT_MAP`);
  } else if (status === 'coming-soon') {
    comingSoonCount++;
  }
});

console.log(`\n  Active Tools Count: ${activeCount}`);
console.log(`  Coming-Soon Tools Count: ${comingSoonCount}`);

// 2. Route Check
console.log('\n--- 2. Frontend Routes Audit ---');
const appContent = fs.readFileSync(path.join(rootDir, 'client/src/App.jsx'), 'utf8');
const requiredRoutes = [
  '/', '/tools', '/tools/:slug', '/categories', '/about', '/how-it-works',
  '/resources', '/blog', '/changelog', '/roadmap', '/faq', '/contact',
  '/api', '/api/docs', '/privacy', '/terms', '/cookies', '/sitemap', '*'
];

requiredRoutes.forEach(r => {
  assert(appContent.includes(`path="${r}"`) || appContent.includes(`path='${r}'`), `Route "${r}" registered in App.jsx`);
});

// 3. Security & Cleanliness Audit
console.log('\n--- 3. Security, Placeholders & Secrets Audit ---');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (file.startsWith('.') || file === 'node_modules' || file === 'dist' || file === 'scratch') return;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const sourceFiles = [
  ...walkDir(path.join(rootDir, 'client/src')),
  ...walkDir(path.join(rootDir, 'server/src')),
  ...walkDir(path.join(rootDir, 'shared'))
];

let todoCount = 0;
let fixmeCount = 0;
let exposedSecret = false;
let fakeAuthVisible = false;

sourceFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('TODO:')) todoCount++;
  if (content.includes('FIXME:')) fixmeCount++;
  if (content.includes('sk-proj-') || content.includes('AI_API_KEY=sk-')) exposedSecret = true;

  // Check if Header/MobileNav contain visible auth links
  if (file.endsWith('Header.jsx') || file.endsWith('MobileNav.jsx')) {
    if (content.includes('/login') || content.includes('/register') || content.includes('/profile')) {
      fakeAuthVisible = true;
    }
  }
});

assert(todoCount === 0, `Zero TODO comments found (actual: ${todoCount})`);
assert(fixmeCount === 0, `Zero FIXME comments found (actual: ${fixmeCount})`);
assert(!exposedSecret, `Zero hardcoded API secrets exposed`);
assert(!fakeAuthVisible, `Zero fake auth routes exposed in user-facing navigation`);

console.log('\n==================================================');
console.log(`QA Audit Complete: ${passedTests} Passed, ${failedTests} Failed.`);
console.log('==================================================\n');
