import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('==================================================');
console.log('🧪 HMDevTools Comprehensive Automated QA & Audit');
console.log('==================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// 1. Tool Registry & Component Mapping Audit
const toolsFilePath = path.resolve(rootDir, 'client/src/registry/tools.js');
const componentMapPath = path.resolve(rootDir, 'client/src/registry/componentMap.js');
const resourcesFilePath = path.resolve(rootDir, 'client/src/registry/resources.js');

const toolsContent = fs.readFileSync(toolsFilePath, 'utf8');
const componentMapContent = fs.readFileSync(componentMapPath, 'utf8');
const resourcesContent = fs.readFileSync(resourcesFilePath, 'utf8');

// Match active tool entries in tools.js
const activeStatusMatches = [...toolsContent.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?component:\s*['"]([^'"]+)['"][\s\S]*?status:\s*['"]active['"]/g)];
const altStatusMatches = [...toolsContent.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?status:\s*['"]active['"][\s\S]*?component:\s*['"]([^'"]+)['"]/g)];

const activeTools = [...activeStatusMatches, ...altStatusMatches].map(m => ({ id: m[1], component: m[2] }));
const uniqueActiveTools = Array.from(new Set(activeTools.map(t => t.id))).map(id => activeTools.find(t => t.id === id));

assert(uniqueActiveTools.length === 50, `50 active operational tools registered in tools.js (actual: ${uniqueActiveTools.length})`);

uniqueActiveTools.forEach(t => {
  const isBound = componentMapContent.includes(t.component);
  assert(isBound, `Active tool "${t.id}" has component binding "${t.component}" in COMPONENT_MAP`);
});

// 2. Resource Guides Audit
const topLevelResourceMatches = [...resourcesContent.matchAll(/id:\s*['"]([^'"]+)['"][\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]/g)];
assert(topLevelResourceMatches.length === 6, `6 developer reference resources registered in resources.js (actual: ${topLevelResourceMatches.length})`);

// 3. Frontend Routes Audit
const appPath = path.resolve(rootDir, 'client/src/App.jsx');
const appContent = fs.readFileSync(appPath, 'utf8');

const requiredRoutes = [
  '/', '/tools', '/tools/:slug', '/categories', '/about', '/how-it-works',
  '/resources', '/resources/:slug', '/blog', '/changelog', '/roadmap', '/faq', '/contact',
  '/api', '/api/docs', '/privacy', '/terms', '/cookies', '/sitemap', '*'
];

console.log('\n--- 3. Frontend Routes Audit ---');
requiredRoutes.forEach(r => {
  const hasRoute = appContent.includes(`path="${r}"`);
  assert(hasRoute, `Route "${r}" registered in App.jsx`);
});

// 4. Git Hygiene & Security Audit
console.log('\n--- 4. Git Hygiene & Security Audit ---');
const gitignorePath = path.resolve(rootDir, '.gitignore');
assert(fs.existsSync(gitignorePath), 'Root .gitignore file exists');

if (fs.existsSync(gitignorePath)) {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  assert(gitignoreContent.includes('node_modules'), '.gitignore ignores node_modules');
  assert(gitignoreContent.includes('.env'), '.gitignore ignores .env files');
  assert(gitignoreContent.includes('dist'), '.gitignore ignores build dist directories');
}

const srcDir = path.resolve(rootDir, 'client/src');

function scanDirectory(dir, filterExt = ['.jsx', '.js', '.css']) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(scanDirectory(fullPath, filterExt));
    } else if (filterExt.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }
  return files;
}

const allSrcFiles = scanDirectory(srcDir);
let todoCount = 0;
let fixmeCount = 0;

allSrcFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const todos = (content.match(/\/\/\s*TODO/gi) || []).length;
  const fixmes = (content.match(/\/\/\s*FIXME/gi) || []).length;
  todoCount += todos;
  fixmeCount += fixmes;
});

assert(todoCount === 0, `Zero TODO comments found (actual: ${todoCount})`);
assert(fixmeCount === 0, `Zero FIXME comments found (actual: ${fixmeCount})`);
assert(!appContent.includes('sk_test_') && !appContent.includes('AI_SECRET_KEY'), 'Zero hardcoded API secrets exposed');
assert(!appContent.includes('/account') && !appContent.includes('/login'), 'Zero fake auth routes exposed in user-facing navigation');

console.log('\n==================================================');
console.log(`QA Audit Complete: ${passCount} Passed, ${failCount} Failed.`);
console.log('==================================================\n');

if (failCount > 0) process.exit(1);
