export const toolsRegistry = [
  // -------------------------------------------------------------
  // JSON & DATA (8 Active)
  // -------------------------------------------------------------
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    slug: 'json-formatter',
    category: 'json-data',
    description: 'Format, beautify, and inspect raw JSON data with customizable indentation (2 spaces, 4 spaces, or tabs) and instant syntax error detection.',
    shortDescription: 'Format and beautify raw JSON data.',
    icon: 'FileJson',
    keywords: ['json formatter', 'json beautifier', 'format json', 'json pretty printer', 'json parser'],
    primaryKeyword: 'JSON Formatter',
    relatedKeywords: ['JSON beautifier', 'format JSON online', 'JSON pretty print', 'indent JSON'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'JsonFormatter',
    seoTitle: 'JSON Formatter & Beautifier Online | HMDevTools',
    seoDescription: 'Format, beautify, and parse raw JSON strings instantly in your web browser. Privacy-focused local processing with zero server uploads.',
    howItWorks: 'Paste your unformatted or minified JSON string into the input area. Select your preferred indentation spacing (2 spaces, 4 spaces, or tabs) and click Format JSON to instantly structure and inspect your data.',
    features: [
      'Configurable indentation spacing (2 spaces, 4 spaces, tab indentation)',
      'Real-time syntax validation with exact error diagnostics',
      'One-click copy to clipboard and sample data loading',
      '100% browser-local execution with zero data transmission'
    ],
    useCases: [
      'Formatting minified API responses for debugging',
      'Inspecting complex configuration files like package.json or tsconfig.json',
      'Validating nested payload structures before backend integration'
    ],
    examples: [
      {
        title: 'Beautify Minified JSON Payload',
        input: '{"service":"HMDevTools","active":true,"features":["format","validate"]}',
        output: '{\n  "service": "HMDevTools",\n  "active": true,\n  "features": [\n    "format",\n    "validate"\n  ]\n}'
      }
    ],
    faq: [
      { question: 'Is my JSON payload transmitted to any server?', answer: 'No. Formatting is computed 100% locally in your browser JavaScript memory context.' },
      { question: 'How are JSON syntax errors handled?', answer: 'If your JSON contains syntax issues (such as missing quotes or trailing commas), an error message pinpointing the issue will appear.' }
    ],
    relatedTools: ['json-validator', 'json-minifier', 'json-viewer', 'json-to-csv', 'json-to-yaml', 'json-to-typescript']
  },
  {
    id: 'json-validator',
    name: 'JSON Validator',
    slug: 'json-validator',
    category: 'json-data',
    description: 'Validate JSON syntax compliance against RFC 8259 specifications with exact error locations and syntax diagnostics.',
    shortDescription: 'Validate JSON syntax and RFC 8259 compliance.',
    icon: 'CheckCircle2',
    keywords: ['json validator', 'validate json', 'json syntax checker', 'rfc 8259 validator'],
    primaryKeyword: 'JSON Validator',
    relatedKeywords: ['validate JSON online', 'JSON syntax checker', 'RFC 8259 compliance'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'JsonValidator',
    seoTitle: 'JSON Validator & Syntax Checker Online | HMDevTools',
    seoDescription: 'Validate your JSON strings against official RFC 8259 specifications with instant syntax diagnostics and line error detection.',
    howItWorks: 'Paste your JSON data into the editor. The validator checks quote placement, bracket balancing, trailing commas, and data types according to RFC 8259.',
    features: [
      'Instant validation status feedback',
      'Detailed syntax error reporting',
      'Supports large JSON files in client memory'
    ],
    useCases: [
      'Verifying webhook payloads before testing',
      'Catching syntax bugs in REST API responses',
      'Ensuring strict RFC 8259 JSON compliance'
    ],
    examples: [
      { title: 'Valid RFC 8259 JSON', input: '{"status": "ok", "code": 200}' }
    ],
    faq: [
      { question: 'What JSON standards are validated?', answer: 'Strict RFC 8259 rules including double-quoted keys, proper boolean/number literals, and no unescaped control characters.' }
    ],
    relatedTools: ['json-formatter', 'json-minifier', 'json-viewer', 'json-to-csv']
  },
  {
    id: 'json-minifier',
    name: 'JSON Minifier',
    slug: 'json-minifier',
    category: 'json-data',
    description: 'Compress and minify raw JSON by stripping whitespace, unneeded newlines, and indentation for minimal payload transfer size.',
    shortDescription: 'Minify and compress JSON strings.',
    icon: 'Minimize2',
    keywords: ['json minifier', 'minify json', 'compress json', 'compact json'],
    primaryKeyword: 'JSON Minifier',
    relatedKeywords: ['compress JSON', 'strip JSON whitespace', 'compact JSON string'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'JsonMinifier',
    seoTitle: 'JSON Minifier & Compressor Online | HMDevTools',
    seoDescription: 'Compress and minify JSON strings instantly in your browser to reduce network transfer size.',
    howItWorks: 'Paste formatted JSON into the input box to instantly output a single-line minified string.',
    features: [
      'Strips all unneeded indentation and newlines',
      'Reduces HTTP payload sizes',
      'Calculates minified string output instantly'
    ],
    useCases: [
      'Reducing JSON string size for database storage',
      'Minifying configuration objects for web requests',
      'Preparing compact payloads for API bandwidth optimization'
    ],
    examples: [
      { title: 'Minify JSON Example', input: '{\n  "foo": "bar"\n}', output: '{"foo":"bar"}' }
    ],
    faq: [
      { question: 'Does minifying alter payload values?', answer: 'No, minifying only removes non-semantic whitespace and indentation.' }
    ],
    relatedTools: ['json-formatter', 'json-validator', 'json-viewer']
  },
  {
    id: 'json-viewer',
    name: 'JSON Viewer',
    slug: 'json-viewer',
    category: 'json-data',
    description: 'Interactive tree viewer to explore nested JSON objects and arrays with expand/collapse nodes and data type indicators.',
    shortDescription: 'Interactive tree view for nested JSON.',
    icon: 'Eye',
    keywords: ['json viewer', 'json tree view', 'inspect json', 'explore json'],
    primaryKeyword: 'JSON Viewer',
    relatedKeywords: ['inspect JSON', 'collapsible JSON tree', 'JSON object explorer'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'JsonViewer',
    seoTitle: 'Interactive JSON Viewer & Inspector | HMDevTools',
    seoDescription: 'Explore deep nested JSON objects and arrays with an interactive collapsible tree view and type indicators.',
    howItWorks: 'Paste raw JSON into the input panel to render an interactive node tree representation.',
    features: [
      'Collapsible object and array nodes',
      'Color-coded data types (strings, numbers, booleans, nulls)',
      'Item count indicators for array and object nodes'
    ],
    useCases: [
      'Exploring complex multi-level API responses',
      'Navigating deep JSON trees without manual scrolling',
      'Inspecting object structures and array indices'
    ],
    examples: [
      { title: 'Nested JSON Object', input: '{"user":{"id":1,"roles":["admin","dev"]}}' }
    ],
    faq: [
      { question: 'Can I expand/collapse nested nodes?', answer: 'Yes, click on any object or array node header to collapse or expand its children.' }
    ],
    relatedTools: ['json-formatter', 'json-validator', 'json-to-csv']
  },
  {
    id: 'json-to-csv',
    name: 'JSON to CSV',
    slug: 'json-to-csv',
    category: 'json-data',
    description: 'Convert JSON object arrays into tabular CSV format for spreadsheets, data analytics, and database imports.',
    shortDescription: 'Convert JSON arrays to CSV spreadsheets.',
    icon: 'FileSpreadsheet',
    keywords: ['json to csv', 'convert json to csv', 'json csv converter', 'export csv'],
    primaryKeyword: 'JSON to CSV',
    relatedKeywords: ['convert JSON array to CSV', 'export JSON to Excel', 'JSON to spreadsheet'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: true,
    component: 'JsonToCsv',
    seoTitle: 'JSON to CSV Converter Online | HMDevTools',
    seoDescription: 'Convert JSON object arrays into clean CSV format for Excel, Google Sheets, or database imports locally.',
    howItWorks: 'Paste a JSON array containing objects. The tool extracts property headers and converts rows into comma-separated values.',
    features: [
      'Extracts property names as CSV header row',
      'Handles quotes and commas in strings correctly',
      'Instant browser-local conversion'
    ],
    useCases: [
      'Converting API dataset responses into CSV for Excel analysis',
      'Preparing JSON data for SQL database bulk import',
      'Exporting user/record tables to spreadsheets'
    ],
    examples: [
      { title: 'JSON Array to CSV', input: '[{"name":"Alice","age":30},{"name":"Bob","age":25}]', output: 'name,age\nAlice,30\nBob,25' }
    ],
    faq: [
      { question: 'Does it handle commas in text fields?', answer: 'Yes, fields containing commas are automatically wrapped in double quotes.' }
    ],
    relatedTools: ['csv-to-json', 'json-to-yaml', 'json-formatter']
  },
  {
    id: 'csv-to-json',
    name: 'CSV to JSON',
    slug: 'csv-to-json',
    category: 'json-data',
    description: 'Parse CSV tabular spreadsheets into structured JSON object arrays.',
    shortDescription: 'Parse CSV files and text into structured JSON.',
    icon: 'FileCode',
    keywords: ['csv to json', 'convert csv to json', 'parse csv', 'csv parser'],
    primaryKeyword: 'CSV to JSON',
    relatedKeywords: ['parse CSV string', 'convert spreadsheet to JSON', 'CSV data parser'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: true,
    component: 'CsvToJson',
    seoTitle: 'CSV to JSON Converter Online | HMDevTools',
    seoDescription: 'Convert CSV tabular data into structured JSON array objects locally in your browser memory.',
    howItWorks: 'Paste comma-separated rows with a header row to generate a structured JSON object array.',
    features: [
      'Automatic header row parsing',
      'Trims unneeded whitespace and quotes',
      'Generates formatted JSON array'
    ],
    useCases: [
      'Converting exported spreadsheets into JSON for frontend rendering',
      'Parsing legacy CSV dumps into modern REST API payloads',
      'Transforming tab/comma delimited text into objects'
    ],
    examples: [
      { title: 'CSV to JSON Array', input: 'id,name\n101,Dev', output: '[\n  {\n    "id": "101",\n    "name": "Dev"\n  }\n]' }
    ],
    faq: [
      { question: 'What delimiter is expected?', answer: 'Commas are standard. Quote-wrapped values are parsed automatically.' }
    ],
    relatedTools: ['json-to-csv', 'json-formatter', 'json-to-yaml']
  },
  {
    id: 'json-to-yaml',
    name: 'JSON to YAML',
    slug: 'json-to-yaml',
    category: 'json-data',
    description: 'Convert JSON documents into human-readable YAML configurations for Docker, Kubernetes, and CI/CD pipelines.',
    shortDescription: 'Convert JSON into clean YAML format.',
    icon: 'FileText',
    keywords: ['json to yaml', 'convert json to yaml', 'json yaml converter', 'k8s yaml'],
    primaryKeyword: 'JSON to YAML',
    relatedKeywords: ['convert JSON to YAML', 'Kubernetes YAML generator', 'Docker compose YAML'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'JsonToYaml',
    seoTitle: 'JSON to YAML Converter Online | HMDevTools',
    seoDescription: 'Convert JSON structures to YAML configurations instantly for Kubernetes, Docker, and Ansible.',
    howItWorks: 'Paste JSON content into the editor to generate standard formatted YAML output.',
    features: [
      'Clean 2-space YAML indentation',
      'Supports nested objects and arrays',
      'Zero server roundtrips'
    ],
    useCases: [
      'Converting JSON configs to Kubernetes manifest YAMLs',
      'Transforming JSON object definitions into Ansible playbooks',
      'Converting OpenAPI/Swagger JSON to YAML'
    ],
    examples: [
      { title: 'JSON Config to YAML', input: '{"version":"3","services":{"web":{"image":"nginx"}}}' }
    ],
    faq: [
      { question: 'Which YAML version is generated?', answer: 'Produces standard YAML 1.2 compliant key-value structures.' }
    ],
    relatedTools: ['yaml-to-json', 'json-formatter', 'json-to-typescript']
  },
  {
    id: 'yaml-to-json',
    name: 'YAML to JSON',
    slug: 'yaml-to-json',
    category: 'json-data',
    description: 'Convert YAML configuration files into valid JSON data structures.',
    shortDescription: 'Convert YAML configs into valid JSON.',
    icon: 'FileJson',
    keywords: ['yaml to json', 'convert yaml to json', 'yaml parser', 'parse yaml'],
    primaryKeyword: 'YAML to JSON',
    relatedKeywords: ['parse YAML online', 'convert YAML to JSON', 'YAML config parser'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'YamlToJson',
    seoTitle: 'YAML to JSON Converter Online | HMDevTools',
    seoDescription: 'Parse YAML configurations into formatted JSON objects in your browser with validation.',
    howItWorks: 'Paste YAML key-value pairs into the editor to calculate equivalent JSON data.',
    features: [
      'Parses strings, numbers, booleans, and nested structures',
      'Ignore comments automatically',
      'Outputs formatted JSON'
    ],
    useCases: [
      'Converting CI/CD YAML files to JSON for automated tools',
      'Parsing Docker/Kubernetes YAML into JSON payloads',
      'Validating YAML structures against JSON schemas'
    ],
    examples: [
      { title: 'YAML Key-Value to JSON', input: 'name: HMDevTools\ntype: utility' }
    ],
    faq: [
      { question: 'Are YAML comments included in JSON?', answer: 'No, YAML comments are stripped as JSON does not support comments.' }
    ],
    relatedTools: ['json-to-yaml', 'json-formatter', 'json-validator']
  },

  // -------------------------------------------------------------
  // ENCODING & DECODING (5 Active)
  // -------------------------------------------------------------
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder',
    slug: 'base64-encoder',
    category: 'encoding',
    description: 'Encode plain text or multi-byte UTF-8 strings into standard Base64 format.',
    shortDescription: 'Encode plain text into Base64 format.',
    icon: 'Binary',
    keywords: ['base64 encoder', 'encode base64', 'base64 string', 'text to base64'],
    primaryKeyword: 'Base64 Encoder',
    relatedKeywords: ['encode to Base64', 'UTF-8 Base64 encoder', 'string to Base64'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'Base64Encoder',
    seoTitle: 'Base64 Encoder Online | HMDevTools',
    seoDescription: 'Encode text strings and UTF-8 characters to Base64 format locally in your web browser.',
    howItWorks: 'Paste text or strings to compute Base64 encoded output instantly using browser memory.',
    features: [
      'Full multi-byte UTF-8 and Unicode character support',
      'Real-time encoding output',
      'Zero server upload guarantee'
    ],
    useCases: [
      'Encoding basic auth headers (username:password)',
      'Preparing data URLs for HTML/CSS embedding',
      'Encoding binary string payloads for API parameters'
    ],
    examples: [
      { title: 'Text to Base64', input: 'Hello World', output: 'SGVsbG8gV29ybGQ=' }
    ],
    faq: [
      { question: 'Does it support Unicode and emojis?', answer: 'Yes, full UTF-8 byte array handling ensures special characters and emojis encode correctly.' }
    ],
    relatedTools: ['base64-decoder', 'url-encoder', 'jwt-decoder']
  },
  {
    id: 'base64-decoder',
    name: 'Base64 Decoder',
    slug: 'base64-decoder',
    category: 'encoding',
    description: 'Decode Base64 encoded strings back into human-readable text and UTF-8 characters.',
    shortDescription: 'Decode Base64 strings back to text.',
    icon: 'Binary',
    keywords: ['base64 decoder', 'decode base64', 'base64 to text', 'base64 string decode'],
    primaryKeyword: 'Base64 Decoder',
    relatedKeywords: ['decode Base64 online', 'Base64 to text', 'Base64 UTF-8 decoder'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'Base64Decoder',
    seoTitle: 'Base64 Decoder Online | HMDevTools',
    seoDescription: 'Decode Base64 strings back into original text or UTF-8 characters safely in your browser.',
    howItWorks: 'Paste Base64 encoded content to see decoded plain text immediately.',
    features: [
      'Decodes standard and URL-safe Base64',
      'Detects malformed Base64 padding errors',
      '100% browser local execution'
    ],
    useCases: [
      'Decoding authorization header tokens',
      'Inspecting obfuscated parameter values',
      'Extracting decoded payload text from Base64'
    ],
    examples: [
      { title: 'Base64 to Text', input: 'SGVsbG8gV29ybGQ=', output: 'Hello World' }
    ],
    faq: [
      { question: 'What happens if input is invalid Base64?', answer: 'A clear decoding error message will alert you to invalid characters or missing padding.' }
    ],
    relatedTools: ['base64-encoder', 'jwt-decoder', 'url-decoder']
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder',
    slug: 'url-encoder',
    category: 'encoding',
    description: 'Encode characters in URLs into percent-encoded format for safe web transmission.',
    shortDescription: 'Percent-encode special characters in URLs.',
    icon: 'Link',
    keywords: ['url encoder', 'percent encoding', 'uri encode', 'url string encode'],
    primaryKeyword: 'URL Encoder',
    relatedKeywords: ['percent encode URL', 'encodeURIComponent online', 'URI encoder'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'UrlEncoder',
    seoTitle: 'URL Encoder (Percent Encoding) Online | HMDevTools',
    seoDescription: 'Encode query parameters and URLs using RFC 3986 percent-encoding in your browser.',
    howItWorks: 'Paste query parameter values or URLs. Choose between encodeURIComponent (query values) or encodeURI (full URL).',
    features: [
      'Supports encodeURIComponent and encodeURI modes',
      'Encodes spaces to %20',
      'Instant local processing'
    ],
    useCases: [
      'Encoding search queries for URL parameters',
      'Escaping special characters in web links',
      'Preparing safe redirect query strings'
    ],
    examples: [
      { title: 'Query Parameter Encoding', input: 'hello world & foo=bar', output: 'hello%20world%20%26%20foo%3Dbar' }
    ],
    faq: [
      { question: 'What is the difference between encodeURI and encodeURIComponent?', answer: 'encodeURI preserves URL structure characters (: / ? #), whereas encodeURIComponent encodes all non-alphanumeric characters for safe query parameter values.' }
    ],
    relatedTools: ['url-decoder', 'url-parser', 'base64-encoder']
  },
  {
    id: 'url-decoder',
    name: 'URL Decoder',
    slug: 'url-decoder',
    category: 'encoding',
    description: 'Decode percent-encoded URL strings back into plain unescaped text.',
    shortDescription: 'Decode percent-encoded URL strings.',
    icon: 'Link2Off',
    keywords: ['url decoder', 'percent decode', 'uri decode', 'decode url parameter'],
    primaryKeyword: 'URL Decoder',
    relatedKeywords: ['percent decode URL', 'decodeURIComponent online', 'URI decoder'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'UrlDecoder',
    seoTitle: 'URL Decoder Online | HMDevTools',
    seoDescription: 'Decode percent-encoded URL strings back into readable text locally in your web browser.',
    howItWorks: 'Paste percent-encoded URL strings to decode %20 and special characters.',
    features: [
      'Decodes %20 and percent sequences',
      'Error validation for invalid percent sequences',
      'Fast client-side execution'
    ],
    useCases: [
      'Decoding incoming web tracking parameters',
      'Inspecting escaped query values from server logs',
      'Reading human text from encoded redirect URLs'
    ],
    examples: [
      { title: 'Percent Decoded', input: 'hello%20world%21', output: 'hello world!' }
    ],
    faq: [
      { question: 'Does it decode + as spaces?', answer: 'Standard decodeURIComponent converts percent codes. You can also clean + symbols.' }
    ],
    relatedTools: ['url-encoder', 'url-parser', 'base64-decoder']
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    slug: 'jwt-decoder',
    category: 'encoding',
    description: 'Decode JSON Web Tokens (JWT) to inspect header claims, payload values, and expiration timestamps.',
    shortDescription: 'Inspect header, payload, and claims of JWTs.',
    icon: 'Key',
    keywords: ['jwt decoder', 'decode jwt', 'json web token', 'jwt inspector', 'auth token'],
    primaryKeyword: 'JWT Decoder',
    relatedKeywords: ['decode JWT online', 'JWT payload inspector', 'JSON Web Token decoder'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'JwtDecoder',
    seoTitle: 'JWT Decoder & Claims Inspector Online | HMDevTools',
    seoDescription: 'Decode JSON Web Tokens safely in your browser. Inspect header claims and token expiration without sending keys to any server.',
    howItWorks: 'Paste a 3-part JWT token (header.payload.signature) to view decoded JSON header and payload claims.',
    features: [
      'Decodes header and payload claims',
      'Checks token exp timestamp expiration status',
      'Explicit security disclaimer (decoding vs signature verification)',
      '100% browser-local computation'
    ],
    useCases: [
      'Inspecting user roles and permissions inside OAuth tokens',
      'Checking JWT token expiration date/time',
      'Debugging authentication header issues during API development'
    ],
    examples: [
      { title: 'Sample JWT', input: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' }
    ],
    faq: [
      { question: 'Does decoding a JWT verify its signature?', answer: 'No. Decoding extracts and parses the JSON claims payload. Verification requires secret keys on your server.' }
    ],
    relatedTools: ['base64-decoder', 'uuid-generator', 'json-formatter']
  },
  {
    id: 'html-encoder',
    name: 'HTML Encoder',
    slug: 'html-encoder',
    category: 'encoding',
    description: 'Convert special HTML characters to HTML entities (&lt;, &gt;, &amp;).',
    shortDescription: 'Convert special characters to HTML entities.',
    icon: 'Code',
    keywords: ['html encode', 'entities', 'escape html'],
    primaryKeyword: 'HTML Encoder',
    relatedKeywords: ['escape HTML entities'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'HTML Encoder — HMDevTools',
    seoDescription: 'Escape special HTML characters into entities.'
  },
  {
    id: 'html-decoder',
    name: 'HTML Decoder',
    slug: 'html-decoder',
    category: 'encoding',
    description: 'Convert HTML entities back to plain text characters.',
    shortDescription: 'Decode HTML entities back to plain text.',
    icon: 'Code',
    keywords: ['html decode', 'unescape html'],
    primaryKeyword: 'HTML Decoder',
    relatedKeywords: ['unescape HTML entities'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'HTML Decoder — HMDevTools',
    seoDescription: 'Decode HTML entities to plain text.'
  },
  {
    id: 'unicode-converter',
    name: 'Unicode Converter',
    slug: 'unicode-converter',
    category: 'encoding',
    description: 'Convert text to Unicode escape sequences (\\uXXXX) and UTF-8 code points.',
    shortDescription: 'Convert text to Unicode escape sequences.',
    icon: 'Binary',
    keywords: ['unicode', 'code points', 'utf8'],
    primaryKeyword: 'Unicode Converter',
    relatedKeywords: ['unicode escape converter'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Unicode Converter — HMDevTools',
    seoDescription: 'Convert text to Unicode code points.'
  },

  // -------------------------------------------------------------
  // GENERATORS (3 Active)
  // -------------------------------------------------------------
  {
    id: 'uuid-generator',
    name: 'UUID Generator',
    slug: 'uuid-generator',
    category: 'generators',
    description: 'Generate bulk cryptographically secure UUID v4 (Universally Unique Identifiers) in lowercase or uppercase.',
    shortDescription: 'Generate secure Version 4 UUIDs.',
    icon: 'Fingerprint',
    keywords: ['uuid generator', 'guid generator', 'uuid v4', 'random uuid', 'generate guid'],
    primaryKeyword: 'UUID Generator',
    relatedKeywords: ['RFC 4122 UUID v4', 'GUID generator online', 'bulk UUID generator'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'UuidGenerator',
    seoTitle: 'UUID v4 / GUID Generator Online | HMDevTools',
    seoDescription: 'Generate random RFC 4122 Version 4 UUIDs and GUIDs in bulk locally using Web Crypto.',
    howItWorks: 'Select quantity (1 to 100) and format preferences (uppercase, hyphens) to generate unique RFC 4122 v4 UUIDs.',
    features: [
      'Cryptographically secure randomness via window.crypto',
      'Configurable bulk quantity (up to 100)',
      'Uppercase and hyphen toggles'
    ],
    useCases: [
      'Generating unique database primary keys',
      'Creating transaction tracking IDs',
      'Mocking unique identifiers for unit testing'
    ],
    examples: [
      { title: 'Single UUID v4', output: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' }
    ],
    faq: [
      { question: 'Are these UUIDs cryptographically random?', answer: 'Yes, generated using the native Web Crypto API (crypto.getRandomValues).' }
    ],
    relatedTools: ['password-generator', 'jwt-decoder', 'word-counter']
  },
  {
    id: 'password-generator',
    name: 'Random Password Generator',
    slug: 'password-generator',
    category: 'generators',
    description: 'Generate strong, customizable passwords with configurable length, symbols, numbers, and entropy calculation.',
    shortDescription: 'Generate cryptographically strong passwords.',
    icon: 'ShieldCheck',
    keywords: ['password generator', 'random password', 'strong password', 'secure password generator'],
    primaryKeyword: 'Password Generator',
    relatedKeywords: ['strong password generator', 'random string generator', 'secure password'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'PasswordGenerator',
    seoTitle: 'Random Password Generator Online | HMDevTools',
    seoDescription: 'Generate strong random passwords locally using Web Crypto API with customizable character sets and length controls.',
    howItWorks: 'Adjust length slider (8 to 64 characters) and toggle uppercase, numbers, and symbol character sets to generate passwords.',
    features: [
      'Cryptographically strong Web Crypto randomness',
      'Length control (8 to 64 characters)',
      'Character set toggles (uppercase, numbers, symbols)',
      '100% browser-local generation'
    ],
    useCases: [
      'Generating strong database and server passwords',
      'Creating secure API access secrets',
      'Generating random test credentials'
    ],
    examples: [
      { title: '16 Character Password', output: 'k9#mP2$xL8!vQ4@z' }
    ],
    faq: [
      { question: 'Are generated passwords saved on a server?', answer: 'Never. Passwords are generated inside client JS memory and wiped when closed.' }
    ],
    relatedTools: ['uuid-generator', 'base64-encoder', 'jwt-decoder']
  },
  {
    id: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum-generator',
    category: 'generators',
    description: 'Generate placeholder text by paragraphs, sentences, or words for UI wireframes and copy testing.',
    shortDescription: 'Generate placeholder text for design.',
    icon: 'FileText',
    keywords: ['lorem ipsum generator', 'placeholder text', 'dummy text generator', 'lorem text'],
    primaryKeyword: 'Lorem Ipsum Generator',
    relatedKeywords: ['dummy text generator', 'lorem ipsum text', 'placeholder generator'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'LoremIpsumGenerator',
    seoTitle: 'Lorem Ipsum Generator Online | HMDevTools',
    seoDescription: 'Generate standard pseudo-Latin placeholder paragraphs, sentences, or words for layout designs.',
    howItWorks: 'Select count and output type (paragraphs, sentences, or words) to produce placeholder text.',
    features: [
      'Generates paragraphs, sentences, or individual words',
      'Option to start with "Lorem ipsum dolor sit amet"',
      'Instant copy button'
    ],
    useCases: [
      'Filling mockup layouts with realistic text length',
      'Testing text overflow in UI components',
      'Creating placeholder content for web templates'
    ],
    examples: [
      { title: 'Sample Paragraph', output: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' }
    ],
    faq: [
      { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is standard placeholder text derived from Classical Latin literature, used in typography and design since the 1500s.' }
    ],
    relatedTools: ['word-counter', 'case-converter', 'html-formatter']
  },
  {
    id: 'random-json-generator',
    name: 'Random JSON Generator',
    slug: 'random-json-generator',
    category: 'generators',
    description: 'Generate mock JSON data arrays for API testing.',
    shortDescription: 'Generate mock JSON dataset.',
    icon: 'Wand2',
    keywords: ['mock json', 'fake data', 'test json'],
    primaryKeyword: 'Random JSON Generator',
    relatedKeywords: ['mock JSON generator'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Random JSON Generator — HMDevTools',
    seoDescription: 'Generate mock JSON objects.'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    slug: 'hash-generator',
    category: 'generators',
    description: 'Generate SHA-256, SHA-512, and MD5 cryptographic hashes.',
    shortDescription: 'Generate SHA-256 and MD5 hashes.',
    icon: 'Key',
    keywords: ['hash', 'sha256', 'md5'],
    primaryKeyword: 'Hash Generator',
    relatedKeywords: ['crypto hash generator'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Cryptographic Hash Generator — HMDevTools',
    seoDescription: 'Generate cryptographic hashes.'
  },

  // -------------------------------------------------------------
  // WEB & FORMATTING (4 Active)
  // -------------------------------------------------------------
  {
    id: 'url-parser',
    name: 'URL Parser',
    slug: 'url-parser',
    category: 'web-dev',
    description: 'Break down complex URLs into protocol, domain, port, pathname, query params table, and hash fragment.',
    shortDescription: 'Parse and inspect URL components & parameters.',
    icon: 'Compass',
    keywords: ['url parser', 'parse url', 'query params parser', 'url string inspector'],
    primaryKeyword: 'URL Parser',
    relatedKeywords: ['parse URL query parameters', 'URL inspector online', 'break down URL'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'UrlParser',
    seoTitle: 'URL Parser & Query Parameter Inspector | HMDevTools',
    seoDescription: 'Parse any web URL into hostname, path, port, scheme, and structured query key-value parameters.',
    howItWorks: 'Paste a full web URL into the editor to extract and display all structural parts and query parameters.',
    features: [
      'Extracts scheme, hostname, port, pathname, and hash',
      'Displays query parameters in a key-value table',
      'Browser-local URL object parsing'
    ],
    useCases: [
      'Inspecting marketing campaign tracking parameters (UTM tags)',
      'Debugging query string values in web requests',
      'Verifying absolute vs relative URL structures'
    ],
    examples: [
      { title: 'Parsed Query', input: 'https://example.com/search?q=devtools&page=2' }
    ],
    faq: [
      { question: 'Must the URL include a protocol?', answer: 'Yes, full absolute URLs (starting with http:// or https://) ensure correct domain and query parsing.' }
    ],
    relatedTools: ['url-encoder', 'url-decoder', 'json-formatter']
  },
  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    slug: 'html-formatter',
    category: 'web-dev',
    description: 'Beautify HTML markup with clean indentation, proper tag nesting, and line breaks.',
    shortDescription: 'Format and beautify HTML markup.',
    icon: 'Code',
    keywords: ['html formatter', 'beautify html', 'format html', 'html prettify'],
    primaryKeyword: 'HTML Formatter',
    relatedKeywords: ['beautify HTML markup', 'format HTML online', 'HTML prettifier'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'HtmlFormatter',
    seoTitle: 'HTML Formatter & Beautifier Online | HMDevTools',
    seoDescription: 'Format raw unindented HTML tags with clean indentation locally in your web browser.',
    howItWorks: 'Paste raw or minified HTML to auto-format nested elements with clean spacing.',
    features: [
      'Clean 2-space tag indentation',
      'Preserves element nesting structure',
      'Fast client-side execution'
    ],
    useCases: [
      'Beautifying minified HTML template strings',
      'Inspecting legacy HTML code structures',
      'Formatting component render markup'
    ],
    examples: [
      { title: 'HTML Formatting', input: '<div><p>Hello</p></div>' }
    ],
    faq: [
      { question: 'Does it support self-closing tags?', answer: 'Yes, tags like <img> and <br> are handled without corrupting nesting.' }
    ],
    relatedTools: ['css-formatter', 'js-formatter', 'lorem-ipsum-generator']
  },
  {
    id: 'css-formatter',
    name: 'CSS Formatter',
    slug: 'css-formatter',
    category: 'web-dev',
    description: 'Beautify messy CSS stylesheets with consistent selector spacing, indentation, and declaration rules.',
    shortDescription: 'Format and beautify CSS stylesheets.',
    icon: 'Palette',
    keywords: ['css formatter', 'beautify css', 'format css', 'css prettify'],
    primaryKeyword: 'CSS Formatter',
    relatedKeywords: ['beautify CSS styles', 'format CSS online', 'CSS prettifier'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'CssFormatter',
    seoTitle: 'CSS Formatter & Beautifier Online | HMDevTools',
    seoDescription: 'Beautify CSS stylesheets and rulesets with clean formatting and selector indentation.',
    howItWorks: 'Paste messy CSS rules to re-format declarations and selectors with consistent indentation.',
    features: [
      'Formats selectors and CSS declarations',
      'Ensures clean multi-line rulesets',
      'Zero server upload'
    ],
    useCases: [
      'Formatting compressed CSS rulesets',
      'Cleaning up inline stylesheet declarations',
      'Standardizing CSS code style for review'
    ],
    examples: [
      { title: 'CSS Format', input: 'body{margin:0;padding:0}' }
    ],
    faq: [
      { question: 'Does it support media queries?', answer: 'Yes, nested media query blocks are formatted with clean indentation.' }
    ],
    relatedTools: ['html-formatter', 'js-formatter', 'case-converter']
  },
  {
    id: 'js-formatter',
    name: 'JavaScript Formatter',
    slug: 'js-formatter',
    category: 'web-dev',
    description: 'Beautify JavaScript/ECMAScript code with configurable indentation and syntax formatting.',
    shortDescription: 'Beautify JavaScript and ES6 code.',
    icon: 'FileCode2',
    keywords: ['js formatter', 'javascript beautifier', 'format javascript', 'es6 prettify'],
    primaryKeyword: 'JavaScript Formatter',
    relatedKeywords: ['beautify JavaScript online', 'format JS code', 'ES6 prettifier'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'JsFormatter',
    seoTitle: 'JavaScript Formatter & Beautifier Online | HMDevTools',
    seoDescription: 'Format and prettify JavaScript code strings directly in your browser memory.',
    howItWorks: 'Paste JavaScript code to produce clean, readable formatted scripts with proper indentation.',
    features: [
      'Formats ES6+ JavaScript syntax',
      'Cleans up statement indentation',
      'Browser-local parsing'
    ],
    useCases: [
      'De-obfuscating single-line JavaScript snippets',
      'Formatting inline event handler code',
      'Cleaning up raw ES6 script blocks'
    ],
    examples: [
      { title: 'JS Format', input: 'function test(){return true;}' }
    ],
    faq: [
      { question: 'Does formatting execute your JavaScript?', answer: 'No. Formatting is purely static text parsing.' }
    ],
    relatedTools: ['html-formatter', 'css-formatter', 'json-formatter']
  },
  {
    id: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    slug: 'meta-tag-generator',
    category: 'web-dev',
    description: 'Generate OpenGraph and meta tags for web pages.',
    shortDescription: 'Generate OpenGraph and meta tags.',
    icon: 'Tag',
    keywords: ['meta tags', 'opengraph', 'seo'],
    primaryKeyword: 'Meta Tag Generator',
    relatedKeywords: ['generate opengraph tags'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Meta Tag Generator — HMDevTools',
    seoDescription: 'Generate meta tags.'
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML',
    slug: 'markdown-to-html',
    category: 'web-dev',
    description: 'Convert markdown text to HTML tags.',
    shortDescription: 'Convert markdown to HTML.',
    icon: 'FileText',
    keywords: ['markdown', 'html', 'converter'],
    primaryKeyword: 'Markdown to HTML',
    relatedKeywords: ['convert markdown'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Markdown to HTML — HMDevTools',
    seoDescription: 'Convert markdown to HTML.'
  },
  {
    id: 'html-to-markdown',
    name: 'HTML to Markdown',
    slug: 'html-to-markdown',
    category: 'web-dev',
    description: 'Convert HTML elements to Markdown syntax.',
    shortDescription: 'Convert HTML to Markdown syntax.',
    icon: 'FileCode',
    keywords: ['html', 'markdown', 'converter'],
    primaryKeyword: 'HTML to Markdown',
    relatedKeywords: ['convert HTML to markdown'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'HTML to Markdown — HMDevTools',
    seoDescription: 'Convert HTML to markdown.'
  },

  // -------------------------------------------------------------
  // DATES & TIME (3 Active)
  // -------------------------------------------------------------
  {
    id: 'unix-timestamp-converter',
    name: 'Unix Timestamp Converter',
    slug: 'unix-timestamp-converter',
    category: 'dates-time',
    description: 'Convert Unix epoch timestamps (seconds or milliseconds) to ISO dates, UTC, and local time, or convert dates to epoch.',
    shortDescription: 'Convert between Unix timestamps and human dates.',
    icon: 'Clock',
    keywords: ['unix timestamp converter', 'epoch converter', 'timestamp to date', 'epoch to UTC'],
    primaryKeyword: 'Unix Timestamp Converter',
    relatedKeywords: ['convert epoch timestamp', 'timestamp to ISO date', 'epoch to local time'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'UnixTimestampConverter',
    seoTitle: 'Unix Timestamp / Epoch Converter Online | HMDevTools',
    seoDescription: 'Convert seconds and milliseconds epoch timestamps to human-readable ISO and UTC dates and vice-versa.',
    howItWorks: 'Enter a numeric timestamp (seconds or ms) to instantly calculate ISO 8601, UTC, and local calendar dates.',
    features: [
      'Auto-detects 10-digit seconds vs 13-digit milliseconds',
      'Outputs UTC, ISO 8601, and local timezone strings',
      'One-click "Set to Current Time" button'
    ],
    useCases: [
      'Debugging database timestamp integers',
      'Converting API createdAt/updatedAt epoch values',
      'Verifying expiration timestamps in tokens'
    ],
    examples: [
      { title: 'Epoch to Date', input: '1700000000', output: '2023-11-14T22:13:20.000Z' }
    ],
    faq: [
      { question: 'What is Unix epoch time?', answer: 'Unix epoch time is the total number of seconds elapsed since January 1, 1970 00:00:00 UTC (excluding leap seconds).' }
    ],
    relatedTools: ['timestamp-to-date', 'date-to-timestamp', 'jwt-decoder']
  },
  {
    id: 'timestamp-to-date',
    name: 'Timestamp to Date',
    slug: 'timestamp-to-date',
    category: 'dates-time',
    description: 'Convert numeric Unix epoch timestamps directly into human-readable date formats across timezones.',
    shortDescription: 'Convert Unix epoch numbers to readable dates.',
    icon: 'Calendar',
    keywords: ['timestamp to date', 'epoch to date', 'convert timestamp to readable date'],
    primaryKeyword: 'Timestamp to Date',
    relatedKeywords: ['epoch to human date', 'convert Unix timestamp to date'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'TimestampToDate',
    seoTitle: 'Timestamp to Date Converter Online | HMDevTools',
    seoDescription: 'Convert Unix timestamps into readable local and UTC date strings in your browser.',
    howItWorks: 'Paste a numeric timestamp integer to calculate exact calendar date and time representation.',
    features: [
      'Supports seconds and milliseconds',
      'Displays UTC and local time string outputs',
      'Instant client-side calculation'
    ],
    useCases: [
      'Converting server log timestamps to readable dates',
      'Inspecting database record creation times',
      'Debugging analytics event timestamps'
    ],
    examples: [
      { title: 'Sample Epoch', input: '1609459200', output: '2021-01-01 00:00:00 UTC' }
    ],
    faq: [
      { question: 'Does it support negative timestamps?', answer: 'Yes, negative timestamps represent dates prior to January 1, 1970.' }
    ],
    relatedTools: ['unix-timestamp-converter', 'date-to-timestamp', 'jwt-decoder']
  },
  {
    id: 'date-to-timestamp',
    name: 'Date to Timestamp',
    slug: 'date-to-timestamp',
    category: 'dates-time',
    description: 'Pick or enter calendar dates to generate exact Unix epoch timestamp numbers in seconds and milliseconds.',
    shortDescription: 'Convert calendar date/time into epoch timestamps.',
    icon: 'CalendarCheck',
    keywords: ['date to timestamp', 'date to epoch', 'generate timestamp from date'],
    primaryKeyword: 'Date to Timestamp',
    relatedKeywords: ['convert date to Unix epoch', 'generate epoch timestamp'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'DateToTimestamp',
    seoTitle: 'Date to Unix Timestamp Converter Online | HMDevTools',
    seoDescription: 'Convert any calendar date and time into Unix epoch seconds and milliseconds.',
    howItWorks: 'Select a date and time using the picker to generate exact Unix epoch integers.',
    features: [
      'Interactive date & time picker input',
      'Calculates both seconds and milliseconds',
      'Outputs UTC and ISO strings'
    ],
    useCases: [
      'Generating database query timestamp boundaries',
      'Creating expiration epoch timestamps for test tokens',
      'Converting schedule dates into epoch numbers'
    ],
    examples: [
      { title: 'Date Input', input: '2026-01-01T00:00:00Z', output: '1767225600' }
    ],
    faq: [
      { question: 'Is UTC or local time used?', answer: 'The date picker uses your system local time, but outputs both UTC ISO strings and Unix seconds.' }
    ],
    relatedTools: ['unix-timestamp-converter', 'timestamp-to-date']
  },
  {
    id: 'timezone-converter',
    name: 'Timezone Converter',
    slug: 'timezone-converter',
    category: 'dates-time',
    description: 'Convert date and time values across global timezones.',
    shortDescription: 'Convert dates across timezones.',
    icon: 'Globe',
    keywords: ['timezone', 'utc', 'est', 'pst'],
    primaryKeyword: 'Timezone Converter',
    relatedKeywords: ['convert timezones'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Timezone Converter — HMDevTools',
    seoDescription: 'Convert dates across timezones.'
  },
  {
    id: 'cron-expression-helper',
    name: 'Cron Expression Helper',
    slug: 'cron-expression-helper',
    category: 'dates-time',
    description: 'Build and explain cron expressions.',
    shortDescription: 'Build and explain cron schedules.',
    icon: 'Clock',
    keywords: ['cron', 'schedule', 'cron expression'],
    primaryKeyword: 'Cron Expression Helper',
    relatedKeywords: ['cron schedule builder'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Cron Expression Helper — HMDevTools',
    seoDescription: 'Build cron expressions.'
  },

  // -------------------------------------------------------------
  // REGEX (1 Active)
  // -------------------------------------------------------------
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    slug: 'regex-tester',
    category: 'regex',
    description: 'Test and debug JavaScript regular expressions with real-time match highlighting, regex flags, and capture groups.',
    shortDescription: 'Test regular expressions with instant match highlighting.',
    icon: 'Regex',
    keywords: ['regex tester', 'regular expression tester', 'test regex online', 'js regex matcher'],
    primaryKeyword: 'Regex Tester',
    relatedKeywords: ['regular expression matcher', 'test JS regex', 'regex debug online'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'RegexTester',
    seoTitle: 'Regex Tester & Matcher Online | HMDevTools',
    seoDescription: 'Test JavaScript regular expressions with real-time match highlighting, regex flags, and capture group diagnostics.',
    howItWorks: 'Enter your regular expression pattern, select flags (g, i, m), and paste a test string to inspect matched values and indices.',
    features: [
      'Supports standard flags (global, case-insensitive, multiline)',
      'Displays match count, index position, and matched values',
      'Safety length guards to prevent browser freezing'
    ],
    useCases: [
      'Testing email and phone number validation patterns',
      'Debugging URL regex rewrite rules',
      'Extracting regex match groups from text blocks'
    ],
    examples: [
      { title: 'Email Matcher Pattern', input: 'Pattern: [a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}' }
    ],
    faq: [
      { question: 'Which regular expression engine is used?', answer: 'Uses the native V8 JavaScript RegExp engine.' }
    ],
    relatedTools: ['text-diff', 'word-counter', 'case-converter']
  },
  {
    id: 'regex-explainer',
    name: 'Regex Explainer',
    slug: 'regex-explainer',
    category: 'regex',
    description: 'Break down complex regex patterns into plain English.',
    shortDescription: 'Explain regex patterns in plain English.',
    icon: 'HelpCircle',
    keywords: ['regex explain', 'regex breakdown'],
    primaryKeyword: 'Regex Explainer',
    relatedKeywords: ['explain regex'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Regex Explainer — HMDevTools',
    seoDescription: 'Explain regex in plain English.'
  },

  // -------------------------------------------------------------
  // SQL & DATABASES (1 Active)
  // -------------------------------------------------------------
  {
    id: 'sql-formatter',
    name: 'SQL Formatter',
    slug: 'sql-formatter',
    category: 'sql-databases',
    description: 'Format and beautify complex SQL queries (SELECT, INSERT, UPDATE, JOINs) with standardized keyword capitalization and line wraps.',
    shortDescription: 'Format and beautify SQL queries.',
    icon: 'Database',
    keywords: ['sql formatter', 'beautify sql', 'format sql query', 'sql query prettify'],
    primaryKeyword: 'SQL Formatter',
    relatedKeywords: ['beautify SQL query', 'format SQL online', 'SQL query beautifier'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'SqlFormatter',
    seoTitle: 'SQL Formatter & Beautifier Online | HMDevTools',
    seoDescription: 'Format SQL queries with clean keyword capitalization and statement indentation in your browser.',
    howItWorks: 'Paste raw or single-line SQL queries to format keywords (SELECT, FROM, WHERE, JOIN) onto clean new lines.',
    features: [
      'Capitalizes standard SQL keywords',
      'Formats SELECT, JOIN, WHERE, and GROUP BY clauses',
      'Browser-local text formatting'
    ],
    useCases: [
      'Formatting unformatted database query logs',
      'Beautifying complex multi-table SQL JOIN queries',
      'Preparing readable SQL queries for documentation'
    ],
    examples: [
      { title: 'Raw SELECT Query', input: 'select u.id,u.name from users u where u.status="active"' }
    ],
    faq: [
      { question: 'Which SQL dialects are supported?', answer: 'Supports standard ANSI SQL, MySQL, PostgreSQL, SQLite, and SQL Server statement patterns.' }
    ],
    relatedTools: ['json-formatter', 'text-diff', 'case-converter']
  },
  {
    id: 'sql-minifier',
    name: 'SQL Minifier',
    slug: 'sql-minifier',
    category: 'sql-databases',
    description: 'Compress SQL statements to single-line string queries.',
    shortDescription: 'Minify SQL queries to single line.',
    icon: 'Minimize2',
    keywords: ['sql minify', 'compress sql'],
    primaryKeyword: 'SQL Minifier',
    relatedKeywords: ['compress SQL statement'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'SQL Minifier — HMDevTools',
    seoDescription: 'Minify SQL queries.'
  },

  // -------------------------------------------------------------
  // TEXT UTILITIES (4 Active)
  // -------------------------------------------------------------
  {
    id: 'word-counter',
    name: 'Word Counter',
    slug: 'word-counter',
    category: 'text-utilities',
    description: 'Count words, characters, sentences, paragraphs, and estimated reading time for any document or text snippet.',
    shortDescription: 'Count words, characters, and reading time.',
    icon: 'AlignLeft',
    keywords: ['word counter', 'character counter', 'count words', 'reading time calculator'],
    primaryKeyword: 'Word Counter',
    relatedKeywords: ['count words online', 'character counter with spaces', 'text length counter'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'WordCounter',
    seoTitle: 'Word & Character Counter Online | HMDevTools',
    seoDescription: 'Count words, characters (with & without spaces), lines, and reading duration in real-time.',
    howItWorks: 'Type or paste text into the input panel to see live word count, character count, line count, and estimated reading time.',
    features: [
      'Live real-time word and character count',
      'Differentiates character count with and without spaces',
      'Calculates estimated reading duration'
    ],
    useCases: [
      'Verifying blog post word counts against target guidelines',
      'Checking meta description character limits (150-160 chars)',
      'Measuring text length for social media posts'
    ],
    examples: [
      { title: 'Sample Text Stats', input: 'HMDevTools provides 50 developer utilities.' }
    ],
    faq: [
      { question: 'How is reading time calculated?', answer: 'Estimated assuming an average reading speed of 200 words per minute.' }
    ],
    relatedTools: ['case-converter', 'remove-duplicate-lines', 'lorem-ipsum-generator']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    slug: 'case-converter',
    category: 'text-utilities',
    description: 'Transform text case between UPPERCASE, lowercase, camelCase, PascalCase, snake_case, kebab-case, and Title Case.',
    shortDescription: 'Convert text case (camelCase, snake_case, etc.).',
    icon: 'Type',
    keywords: ['case converter', 'camelcase converter', 'snake_case', 'kebab-case', 'uppercase converter'],
    primaryKeyword: 'Case Converter',
    relatedKeywords: ['convert string case', 'camelCase generator', 'snake_case converter'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'CaseConverter',
    seoTitle: 'Text Case Converter (camelCase, snake_case) | HMDevTools',
    seoDescription: 'Convert text between programming variable styles (camelCase, snake_case, kebab-case, PascalCase) and standard text cases.',
    howItWorks: 'Paste text or variable names and select your target case format button to transform your text.',
    features: [
      'Supports camelCase, PascalCase, snake_case, kebab-case, UPPERCASE, lowercase, Title Case',
      'One-click format switching',
      'Preserves string numbers and words'
    ],
    useCases: [
      'Converting database column names to camelCase JS properties',
      'Transforming text headings into kebab-case URL slugs',
      'Converting string constants to UPPER_CASE'
    ],
    examples: [
      { title: 'camelCase Conversion', input: 'hello world', output: 'helloWorld' }
    ],
    faq: [
      { question: 'Does it support multi-word strings?', answer: 'Yes, space, hyphen, and underscore delimiters are handled correctly.' }
    ],
    relatedTools: ['word-counter', 'remove-duplicate-lines', 'html-formatter']
  },
  {
    id: 'remove-duplicate-lines',
    name: 'Remove Duplicate Lines',
    slug: 'remove-duplicate-lines',
    category: 'text-utilities',
    description: 'Deduplicate text lists by removing repeated identical lines, with optional case sensitivity.',
    shortDescription: 'Remove duplicate lines from text lists.',
    icon: 'ListFilter',
    keywords: ['remove duplicate lines', 'deduplicate list', 'unique lines', 'text deduplication'],
    primaryKeyword: 'Remove Duplicate Lines',
    relatedKeywords: ['deduplicate text list', 'filter unique lines', 'remove duplicate rows'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: false,
    component: 'RemoveDuplicateLines',
    seoTitle: 'Remove Duplicate Lines Online | HMDevTools',
    seoDescription: 'Deduplicate text lists and filter unique lines instantly in your web browser.',
    howItWorks: 'Paste a list of text lines into the input area. The tool filters duplicate entries and outputs unique lines.',
    features: [
      'Instant deduplication',
      'Case-sensitive or case-insensitive toggle',
      'Preserves list ordering'
    ],
    useCases: [
      'Deduplicating lists of URLs or email addresses',
      'Filtering duplicate database ID queries',
      'Cleaning up text log entries'
    ],
    examples: [
      { title: 'Deduplicate List', input: 'apple\nbanana\napple\ncherry', output: 'apple\nbanana\ncherry' }
    ],
    faq: [
      { question: 'Does it preserve original line order?', answer: 'Yes, the first occurrence of each unique line is kept in its original order.' }
    ],
    relatedTools: ['word-counter', 'text-diff', 'case-converter']
  },
  {
    id: 'text-diff',
    name: 'Text Diff',
    slug: 'text-diff',
    category: 'text-utilities',
    description: 'Compare two text strings or code files side-by-side to highlight added, removed, and modified lines.',
    shortDescription: 'Compare two text snippets for differences.',
    icon: 'GitCompare',
    keywords: ['text diff', 'compare text', 'diff checker', 'code diff online', 'line comparison'],
    primaryKeyword: 'Text Diff',
    relatedKeywords: ['compare text online', 'diff checker tool', 'side by side text compare'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'TextDiff',
    seoTitle: 'Text Diff & Code Comparator Online | HMDevTools',
    seoDescription: 'Compare two text blocks or code files side-by-side with line difference highlights in your browser.',
    howItWorks: 'Paste the original text in the left panel and modified text in the right panel to see highlighted line additions and removals.',
    features: [
      'Line-by-line diff comparison',
      'Color-coded addition (+) and removal (-) highlights',
      '100% browser-local execution'
    ],
    useCases: [
      'Comparing two versions of a code snippet or config file',
      'Checking text changes between document drafts',
      'Verifying output differences in API responses'
    ],
    examples: [
      { title: 'Text Difference', input: 'Left vs Right text blocks' }
    ],
    faq: [
      { question: 'Are files sent to any server for comparison?', answer: 'No, comparison logic runs 100% locally in your client JavaScript.' }
    ],
    relatedTools: ['word-counter', 'remove-duplicate-lines', 'regex-tester']
  },
  {
    id: 'character-counter',
    name: 'Character Counter',
    slug: 'character-counter',
    category: 'text-utilities',
    description: 'Count characters and bytes with encoding options.',
    shortDescription: 'Count total characters and bytes.',
    icon: 'AlignLeft',
    keywords: ['character count', 'bytes'],
    primaryKeyword: 'Character Counter',
    relatedKeywords: ['count characters online'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Character Counter — HMDevTools',
    seoDescription: 'Count characters and bytes.'
  },
  {
    id: 'whitespace-cleaner',
    name: 'Whitespace Cleaner',
    slug: 'whitespace-cleaner',
    category: 'text-utilities',
    description: 'Strip leading, trailing, and duplicate spaces from text.',
    shortDescription: 'Clean extra whitespace from text.',
    icon: 'ListFilter',
    keywords: ['clean whitespace', 'trim spaces'],
    primaryKeyword: 'Whitespace Cleaner',
    relatedKeywords: ['strip extra spaces'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'Whitespace Cleaner — HMDevTools',
    seoDescription: 'Clean extra spaces from text.'
  },

  // -------------------------------------------------------------
  // CODE CONVERSION (3 Active)
  // -------------------------------------------------------------
  {
    id: 'json-to-typescript',
    name: 'JSON to TypeScript',
    slug: 'json-to-typescript',
    category: 'code-conversion',
    description: 'Convert JSON object samples into strongly typed TypeScript interface or type definitions.',
    shortDescription: 'Convert JSON payload to TypeScript interfaces.',
    icon: 'FileCode',
    keywords: ['json to typescript', 'json to ts', 'generate typescript interface', 'ts type generator'],
    primaryKeyword: 'JSON to TypeScript',
    relatedKeywords: ['convert JSON to TS interface', 'generate TypeScript types', 'JSON to TS'],
    status: 'active',
    processingMode: 'client',
    isPopular: true,
    isNew: false,
    component: 'JsonToTypescript',
    seoTitle: 'JSON to TypeScript Interface Converter | HMDevTools',
    seoDescription: 'Generate clean TypeScript interface and type definitions from JSON object payloads locally in your browser.',
    howItWorks: 'Paste a JSON payload to automatically derive and generate TypeScript interface definitions.',
    features: [
      'Generates TypeScript interface syntax',
      'Maps numbers, strings, booleans, arrays, and objects',
      'Client-side generation'
    ],
    useCases: [
      'Generating TypeScript interfaces for REST API responses',
      'Creating type definitions for JSON config files',
      'Typing state payloads in React/Next.js projects'
    ],
    examples: [
      { title: 'Generate Interface', input: '{"id":1,"username":"dev"}', output: 'export interface RootObject {\n  id: number;\n  username: string;\n}' }
    ],
    faq: [
      { question: 'Does it support nested JSON objects?', answer: 'Yes, generates typed properties for nested arrays and object keys.' }
    ],
    relatedTools: ['json-to-python', 'json-to-go', 'json-formatter', 'json-validator']
  },
  {
    id: 'json-to-python',
    name: 'JSON to Python',
    slug: 'json-to-python',
    category: 'code-conversion',
    description: 'Convert JSON objects into Python dictionary or Dataclass models.',
    shortDescription: 'Convert JSON objects into Python Dataclasses/dicts.',
    icon: 'Code2',
    keywords: ['json to python', 'json to dataclass', 'python dataclass generator', 'json to dict'],
    primaryKeyword: 'JSON to Python',
    relatedKeywords: ['convert JSON to Python Dataclass', 'generate Python class from JSON'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: true,
    component: 'JsonToPython',
    seoTitle: 'JSON to Python Dataclass Converter | HMDevTools',
    seoDescription: 'Convert JSON payloads into Python 3 Dataclass models and type-annotated code in your browser.',
    howItWorks: 'Paste JSON content to produce Python 3 @dataclass classes with typing annotations.',
    features: [
      'Generates Python 3.7+ @dataclass syntax',
      'Maps int, float, str, bool, List, and Optional types',
      'Browser-local execution'
    ],
    useCases: [
      'Creating Python data models for FastAPI or Django backends',
      'Parsing JSON payloads into typed Python dataclasses',
      'Converting API responses for Python scripts'
    ],
    examples: [
      { title: 'Python Dataclass', input: '{"name":"item","price":19.99}' }
    ],
    faq: [
      { question: 'Which Python version is supported?', answer: 'Generates standard Python 3.7+ dataclass and typing annotations.' }
    ],
    relatedTools: ['json-to-typescript', 'json-to-go', 'json-formatter']
  },
  {
    id: 'json-to-go',
    name: 'JSON to Go',
    slug: 'json-to-go',
    category: 'code-conversion',
    description: 'Convert JSON payloads into Golang struct definitions with json field tags.',
    shortDescription: 'Convert JSON payloads into Go struct definitions.',
    icon: 'Cpu',
    keywords: ['json to go', 'json to golang struct', 'go struct generator', 'golang json tags'],
    primaryKeyword: 'JSON to Go',
    relatedKeywords: ['convert JSON to Go struct', 'generate Go struct from JSON'],
    status: 'active',
    processingMode: 'client',
    isPopular: false,
    isNew: true,
    component: 'JsonToGo',
    seoTitle: 'JSON to Go Struct Generator | HMDevTools',
    seoDescription: 'Convert JSON objects into idiomatic Go struct types with json struct field tags.',
    howItWorks: 'Paste a JSON sample payload to output Golang struct type definitions with json:"key" tags.',
    features: [
      'Generates idiomatic Go struct types',
      'Includes json field tags',
      'Maps Go int, float64, string, bool, and slices'
    ],
    useCases: [
      'Generating Go structs for API unmarshaling (json.Unmarshal)',
      'Creating Go data models for backend microservices',
      'Converting JSON configs to Go types'
    ],
    examples: [
      { title: 'Go Struct', input: '{"user_id":42,"email":"dev@example.com"}' }
    ],
    faq: [
      { question: 'Are json field tags included?', answer: 'Yes, fields include standard `json:"key_name"` struct tags.' }
    ],
    relatedTools: ['json-to-typescript', 'json-to-python', 'json-formatter']
  },
  {
    id: 'json-to-javascript',
    name: 'JSON to JavaScript',
    slug: 'json-to-javascript',
    category: 'code-conversion',
    description: 'Convert JSON to ES6 JavaScript object literal declaration.',
    shortDescription: 'Convert JSON to JavaScript object code.',
    icon: 'FileCode2',
    keywords: ['json to js', 'js object'],
    primaryKeyword: 'JSON to JavaScript',
    relatedKeywords: ['convert JSON to JS object'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'JSON to JavaScript Converter — HMDevTools',
    seoDescription: 'Convert JSON to JS object code.'
  },
  {
    id: 'json-to-java',
    name: 'JSON to Java',
    slug: 'json-to-java',
    category: 'code-conversion',
    description: 'Convert JSON to Java POJO class models.',
    shortDescription: 'Convert JSON to Java POJO models.',
    icon: 'Code',
    keywords: ['json to java', 'pojo'],
    primaryKeyword: 'JSON to Java',
    relatedKeywords: ['convert JSON to Java class'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'JSON to Java POJO Converter — HMDevTools',
    seoDescription: 'Convert JSON to Java classes.'
  },
  {
    id: 'json-to-csharp',
    name: 'JSON to C#',
    slug: 'json-to-csharp',
    category: 'code-conversion',
    description: 'Convert JSON to C# class model definitions.',
    shortDescription: 'Convert JSON to C# classes.',
    icon: 'Code2',
    keywords: ['json to c#', 'csharp class'],
    primaryKeyword: 'JSON to C#',
    relatedKeywords: ['convert JSON to C# class'],
    status: 'coming-soon',
    processingMode: 'client',
    component: 'GenericToolFallback',
    seoTitle: 'JSON to C# Converter — HMDevTools',
    seoDescription: 'Convert JSON to C# class models.'
  },

  // -------------------------------------------------------------
  // AI DEVELOPER TOOLS (1 Coming Soon)
  // -------------------------------------------------------------
  {
    id: 'ai-code-explainer',
    name: 'AI Code Explainer',
    slug: 'ai-code-explainer',
    category: 'ai-tools',
    description: 'AI-assisted code analysis and error explanation.',
    shortDescription: 'AI code explanation and diagnostics.',
    icon: 'Sparkles',
    keywords: ['ai code', 'error explainer', 'code analysis'],
    primaryKeyword: 'AI Code Explainer',
    relatedKeywords: ['explain code with AI'],
    status: 'coming-soon',
    processingMode: 'external-api',
    component: 'GenericToolFallback',
    seoTitle: 'AI Code Explainer — HMDevTools',
    seoDescription: 'AI-assisted code analysis.'
  }
];

export const getToolBySlug = (slug) => {
  return toolsRegistry.find(t => t.slug === slug || t.id === slug);
};

export const getToolsByCategory = (categorySlug) => {
  return toolsRegistry.filter(t => t.category === categorySlug);
};

export const getPopularTools = () => {
  return toolsRegistry.filter(t => t.isPopular);
};

export const getNewTools = () => {
  return toolsRegistry.filter(t => t.isNew);
};
