import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { toolsRegistry } from '../client/src/registry/tools.js';
import { COMPONENT_MAP } from '../client/src/registry/componentMap.js';

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
const activeTools = toolsRegistry.filter(t => t.status === 'active');

assert(activeTools.length === 46, `46 active operational tools registered in tools.js (actual: ${activeTools.length})`);

activeTools.forEach(t => {
  const hasBinding = Boolean(COMPONENT_MAP[t.component]);
  assert(hasBinding, `Active tool slug "${t.slug}" has component binding "${t.component}" in COMPONENT_MAP`);
});

// 2. Frontend Routes Audit
const appPath = path.resolve(rootDir, 'client/src/App.jsx');
const appContent = fs.readFileSync(appPath, 'utf8');

const requiredRoutes = [
  '/', '/tools', '/tools/:slug', '/categories', '/about', '/how-it-works',
  '/resources', '/blog', '/changelog', '/roadmap', '/faq', '/contact',
  '/api', '/api/docs', '/privacy', '/terms', '/cookies', '/sitemap', '*'
];

console.log('\n--- 2. Frontend Routes Audit ---');
requiredRoutes.forEach(r => {
  const hasRoute = appContent.includes(`path="${r}"`);
  assert(hasRoute, `Route "${r}" registered in App.jsx`);
});

// 3. Security, Placeholders & Secrets Audit
console.log('\n--- 3. Security, Placeholders & Secrets Audit ---');
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
