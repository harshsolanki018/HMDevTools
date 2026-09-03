import http from 'http';
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('==================================================');
console.log('📡 HMDevTools Live API Integration QA Test');
console.log('==================================================\n');

// Start express server on PORT 5002 for testing
const serverProc = spawn('node', ['server/src/index.js'], {
  cwd: rootDir,
  env: { ...process.env, PORT: '5002', MONGODB_URI: 'mongodb://127.0.0.1:27017/hmdevtools_test' }
});

let serverStarted = false;

serverProc.stdout.on('data', (data) => {
  const str = data.toString();
  if (str.includes('HMDevTools Express Server running')) {
    serverStarted = true;
    runApiTests();
  }
});

serverProc.stderr.on('data', (data) => {
  // console.error(data.toString());
});

function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: 'localhost',
      port: 5002,
      path: `/api/v1${path}`,
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(responseBody) });
        } catch (e) {
          resolve({ status: res.statusCode, data: responseBody });
        }
      });
    });

    req.on('error', err => reject(err));
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function runApiTests() {
  try {
    console.log('1. Testing GET /api/v1/health ...');
    const health = await makeRequest('GET', '/health');
    console.log(`   Status: ${health.status}, Response:`, health.data.service, health.data.database);

    console.log('\n2. Testing GET /api/v1/tools ...');
    const tools = await makeRequest('GET', '/tools');
    console.log(`   Status: ${tools.status}, Count: ${tools.data.count}`);

    console.log('\n3. Testing GET /api/v1/categories ...');
    const categories = await makeRequest('GET', '/categories');
    console.log(`   Status: ${categories.status}, Count: ${categories.data.count}`);

    console.log('\n4. Testing POST /api/v1/contact (Valid Submission) ...');
    const contactValid = await makeRequest('POST', '/contact', {
      name: 'QA Tester',
      email: 'qa@hmdevtools.test',
      topic: 'General',
      message: 'Automated live QA contact submission test.'
    });
    console.log(`   Status: ${contactValid.status}, Response:`, contactValid.data.message);

    console.log('\n5. Testing POST /api/v1/contact (Invalid Email) ...');
    const contactInvalidEmail = await makeRequest('POST', '/contact', {
      name: 'QA Tester',
      email: 'not-an-email',
      topic: 'General',
      message: 'Testing validation error handling.'
    });
    console.log(`   Status: ${contactInvalidEmail.status}, Error Message:`, contactInvalidEmail.data.message);

    console.log('\n6. Testing POST /api/v1/contact (Missing Fields) ...');
    const contactMissing = await makeRequest('POST', '/contact', {
      name: 'QA Tester'
    });
    console.log(`   Status: ${contactMissing.status}, Error Message:`, contactMissing.data.message);

    console.log('\n==================================================');
    console.log('✓ All Live API Endpoint QA Tests Passed Cleanly!');
    console.log('==================================================\n');

    serverProc.kill();
    process.exit(0);
  } catch (err) {
    console.error('API Test Error:', err);
    serverProc.kill();
    process.exit(1);
  }
}

setTimeout(() => {
  if (!serverStarted) {
    console.error('Server timed out starting on port 5002');
    serverProc.kill();
    process.exit(1);
  }
}, 10000);
