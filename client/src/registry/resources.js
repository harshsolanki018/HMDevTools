export const resourcesRegistry = [
  {
    id: 'json-cheat-sheet',
    slug: 'json-cheat-sheet',
    title: 'JSON Syntax Cheat Sheet & Data Types Reference',
    category: 'json-data',
    shortDescription: 'Comprehensive guide to RFC 8259 JSON syntax rules, valid data types, structure formatting, and common mistakes.',
    seoTitle: 'JSON Syntax Cheat Sheet & Data Types Reference | HMDevTools',
    seoDescription: 'Complete JSON cheat sheet covering RFC 8259 syntax rules, data types (objects, arrays, strings, numbers, booleans, null), syntax errors, and tool links.',
    intro: 'JSON (JavaScript Object Notation) is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute-value pairs and arrays. This cheat sheet details RFC 8259 specification compliance rules.',
    quickReference: [
      { concept: 'Object', syntax: '{"key": "value"}', notes: 'Keys MUST be wrapped in double quotes' },
      { concept: 'Array', syntax: '["a", "b", "c"]', notes: 'Ordered list of values separated by commas' },
      { concept: 'String', syntax: '"Hello World"', notes: 'Must use double quotes (single quotes invalid)' },
      { concept: 'Number', syntax: '42, 3.14, -10, 1.2e3', notes: 'No leading zeros, hex, or NaN/Infinity allowed' },
      { concept: 'Boolean', syntax: 'true / false', notes: 'Must be lowercase' },
      { concept: 'Null', syntax: 'null', notes: 'Must be lowercase' }
    ],
    commonErrors: [
      { error: 'Single Quotes', wrong: "{'name': 'Alice'}", correct: '{"name": "Alice"}', explanation: 'JSON keys and string values must strictly use double quotes.' },
      { error: 'Trailing Commas', wrong: '{"a": 1, "b": 2,}', correct: '{"a": 1, "b": 2}', explanation: 'Trailing commas after the last property or array element are invalid in JSON.' },
      { error: 'Comments', wrong: '{"a": 1} // comment', correct: '{"a": 1}', explanation: 'Standard JSON specifications do not support single-line or multi-line comments.' }
    ],
    relatedTools: [
      { name: 'JSON Formatter', slug: 'json-formatter' },
      { name: 'JSON Validator', slug: 'json-validator' },
      { name: 'JSON Minifier', slug: 'json-minifier' },
      { name: 'JSON Viewer', slug: 'json-viewer' },
      { name: 'JSON to CSV', slug: 'json-to-csv' },
      { name: 'JSON to XML', slug: 'json-to-xml' },
      { name: 'JSON to TypeScript', slug: 'json-to-typescript' },
      { name: 'JSON to Python', slug: 'json-to-python' },
      { name: 'JSON to Go', slug: 'json-to-go' },
      { name: 'JSON to Java', slug: 'json-to-java' },
      { name: 'JSON to C#', slug: 'json-to-csharp' }
    ]
  },
  {
    id: 'http-status-codes',
    slug: 'http-status-codes',
    title: 'HTTP Status Codes & Headers Quick Reference',
    category: 'web-dev',
    shortDescription: 'Complete reference for HTTP response status codes (1xx, 2xx, 3xx, 4xx, 5xx), request/response headers, and REST API conventions.',
    seoTitle: 'HTTP Status Codes & Headers Reference Cheat Sheet | HMDevTools',
    seoDescription: 'Explore all HTTP response status codes by category (200 OK, 401 Unauthorized, 404 Not Found, 500 Internal Server Error) and standard headers.',
    intro: 'HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped into five classes: Informational (1xx), Successful (2xx), Redirection (3xx), Client Errors (4xx), and Server Errors (5xx).',
    quickReference: [
      { concept: '200 OK', syntax: '200 OK', notes: 'Standard response for successful HTTP requests' },
      { concept: '201 Created', syntax: '201 Created', notes: 'Request succeeded and a new resource was created' },
      { concept: '301 Moved Permanently', syntax: '301 Moved Permanently', notes: 'URI of target resource assigned a new permanent URI' },
      { concept: '400 Bad Request', syntax: '400 Bad Request', notes: 'Server cannot process request due to client syntax error' },
      { concept: '401 Unauthorized', syntax: '401 Unauthorized', notes: 'Authentication credentials required' },
      { concept: '403 Forbidden', syntax: '403 Forbidden', notes: 'Server understands request but refuses authorization' },
      { concept: '404 Not Found', syntax: '404 Not Found', notes: 'Requested resource could not be found' },
      { concept: '500 Internal Server Error', syntax: '500 Internal Server Error', notes: 'Server encountered an unexpected condition' }
    ],
    commonErrors: [
      { error: '401 vs 403 Confusion', wrong: 'Returning 401 when user is logged in but lacks admin role', correct: 'Return 403 Forbidden', explanation: 'Use 401 when user is unauthenticated; use 403 when user is authenticated but unauthorized.' }
    ],
    relatedTools: [
      { name: 'URL Parser', slug: 'url-parser' },
      { name: 'JWT Decoder', slug: 'jwt-decoder' },
      { name: 'Base64 Encoder', slug: 'base64-encoder' },
      { name: 'URL Encoder', slug: 'url-encoder' }
    ]
  },
  {
    id: 'regex-cheat-sheet',
    slug: 'regex-cheat-sheet',
    title: 'Regular Expressions (Regex) Cheat Sheet & Patterns',
    category: 'regex',
    shortDescription: 'Quick reference guide for regular expression character classes, quantifiers, anchors, capture groups, and common code patterns.',
    seoTitle: 'Regex Cheat Sheet & Character Class Reference | HMDevTools',
    seoDescription: 'Master regular expressions with this comprehensive cheat sheet covering character classes, quantifiers, lookaheads, and email/URL examples.',
    intro: 'Regular expressions (regex) are pattern-matching strings used in search, text replacement, and input validation algorithms across programming languages.',
    quickReference: [
      { concept: 'Start Anchor', syntax: '^', notes: 'Matches start of line/string' },
      { concept: 'End Anchor', syntax: '$', notes: 'Matches end of line/string' },
      { concept: 'Digit Class', syntax: '\\d', notes: 'Matches any single digit [0-9]' },
      { concept: 'Word Class', syntax: '\\w', notes: 'Matches word char [a-zA-Z0-9_]' },
      { concept: 'Whitespace', syntax: '\\s', notes: 'Matches space, tab, newline' },
      { concept: 'Zero or More', syntax: '*', notes: 'Matches 0 or more occurrences' },
      { concept: 'One or More', syntax: '+', notes: 'Matches 1 or more occurrences' },
      { concept: 'Optional', syntax: '?', notes: 'Matches 0 or 1 occurrence' }
    ],
    commonErrors: [
      { error: 'Unescaped Special Chars', wrong: 'domain.com', correct: 'domain\\.com', explanation: 'A literal dot must be escaped with a backslash; unescaped dot matches any character.' }
    ],
    relatedTools: [
      { name: 'Regex Tester', slug: 'regex-tester' },
      { name: 'Regex Explainer', slug: 'regex-explainer' },
      { name: 'Text Diff', slug: 'text-diff' }
    ]
  },
  {
    id: 'cron-cheat-sheet',
    slug: 'cron-cheat-sheet',
    title: 'Cron Expression Cheat Sheet & Field Reference',
    category: 'dates-time',
    shortDescription: 'Standard 5-field cron syntax reference guide, crontab examples, special characters (* / , -), and schedule patterns.',
    seoTitle: 'Cron Expression Cheat Sheet & Schedule Syntax | HMDevTools',
    seoDescription: 'Quick reference for 5-field crontab syntax (minute, hour, day, month, weekday) with common schedule examples and explanations.',
    intro: 'Cron is a time-based job scheduler in Unix-like operating systems. Cron expressions define execution frequencies for background commands.',
    quickReference: [
      { concept: 'Every Minute', syntax: '* * * * *', notes: 'Executes once every minute' },
      { concept: 'Every 5 Minutes', syntax: '*/5 * * * *', notes: 'Executes every 5 minutes' },
      { concept: 'Hourly', syntax: '0 * * * *', notes: 'Executes at minute 0 of every hour' },
      { concept: 'Daily Midnight', syntax: '0 0 * * *', notes: 'Executes every day at 00:00 UTC' },
      { concept: 'Weekly Sunday', syntax: '0 0 * * 0', notes: 'Executes every Sunday at midnight' }
    ],
    commonErrors: [
      { error: 'Field Count Error', wrong: '* * * *', correct: '* * * * *', explanation: 'Standard crontab expects 5 fields: minute, hour, day of month, month, day of week.' }
    ],
    relatedTools: [
      { name: 'Cron Expression Helper', slug: 'cron-expression-helper' },
      { name: 'Unix Timestamp Converter', slug: 'unix-timestamp-converter' }
    ]
  },
  {
    id: 'encoding-cheat-sheet',
    slug: 'encoding-cheat-sheet',
    title: 'Base64, URL & Web Encodings Cheat Sheet',
    category: 'encoding',
    shortDescription: 'Guide to Base64, percent URL encoding, HTML entities, and Unicode escape sequences (\\uXXXX).',
    seoTitle: 'Base64, URL & Web Encodings Reference Cheat Sheet | HMDevTools',
    seoDescription: 'Comprehensive guide covering Base64 text/image encoding, percent-encoding in query strings, HTML entities, and Unicode escapes.',
    intro: 'Encoding converts data into specialized string formats for safe network transmission, binary representation, or HTML rendering.',
    quickReference: [
      { concept: 'Base64', syntax: 'SGVsbG8=', notes: 'Converts binary data into 64 ASCII characters' },
      { concept: 'URL Encoding', syntax: 'hello%20world', notes: 'Replaces reserved URI characters with percent codes' },
      { concept: 'HTML Entities', syntax: '&lt;div&gt;', notes: 'Escapes reserved HTML markup tags (&, <, >, ")' },
      { concept: 'Unicode Escape', syntax: '\\u0048', notes: 'Represents characters using 4-digit hex code points' }
    ],
    commonErrors: [
      { error: 'Confusing Encoding with Encryption', wrong: 'Using Base64 to protect sensitive passwords', correct: 'Use SHA-256 or bcrypt hashing', explanation: 'Base64 is an encoding format, NOT an encryption scheme, and can be decoded by anyone.' }
    ],
    relatedTools: [
      { name: 'Base64 Encoder', slug: 'base64-encoder' },
      { name: 'Base64 Decoder', slug: 'base64-decoder' },
      { name: 'URL Encoder', slug: 'url-encoder' },
      { name: 'URL Decoder', slug: 'url-decoder' },
      { name: 'HTML Encoder', slug: 'html-encoder' },
      { name: 'HTML Decoder', slug: 'html-decoder' },
      { name: 'Unicode Converter', slug: 'unicode-converter' },
      { name: 'Hash Generator', slug: 'hash-generator' }
    ]
  },
  {
    id: 'web-dev-cheat-sheet',
    slug: 'web-dev-cheat-sheet',
    title: 'Web Developer Cheat Sheet (HTML, CSS, JS & Markdown)',
    category: 'web-dev',
    shortDescription: 'Quick reference for HTML5 tags, CSS flexbox/grid layout properties, JavaScript ES6 syntax, and Markdown formatting.',
    seoTitle: 'Web Developer Cheat Sheet (HTML, CSS, JS & Markdown) | HMDevTools',
    seoDescription: 'Essential reference guide for modern web development covering HTML tags, CSS Flexbox, ES6 JavaScript, and Markdown syntax.',
    intro: 'A unified reference sheet compiling core syntax rules, code structures, and layout guidelines for modern web developers.',
    quickReference: [
      { concept: 'HTML5 Header', syntax: '<header>...</header>', notes: 'Semantic top navigation and page header block' },
      { concept: 'CSS Flex Center', syntax: 'display: flex; justify-content: center; align-items: center;', notes: 'Centers child items vertically and horizontally' },
      { concept: 'JS Arrow Function', syntax: 'const add = (a, b) => a + b;', notes: 'Concise ES6 function expression syntax' },
      { concept: 'Markdown Heading', syntax: '# Heading 1', notes: 'Translates to <h1> HTML tag' }
    ],
    commonErrors: [
      { error: 'Missing Viewport Meta Tag', wrong: 'Omitting <meta name="viewport">', correct: '<meta name="viewport" content="width=device-width, initial-scale=1.0">', explanation: 'Without the viewport meta tag, mobile browsers render desktop scale.' }
    ],
    relatedTools: [
      { name: 'HTML Formatter', slug: 'html-formatter' },
      { name: 'CSS Formatter', slug: 'css-formatter' },
      { name: 'JavaScript Formatter', slug: 'js-formatter' },
      { name: 'CSS Minifier', slug: 'css-minifier' },
      { name: 'JavaScript Minifier', slug: 'js-minifier' },
      { name: 'Markdown to HTML', slug: 'markdown-to-html' },
      { name: 'HTML to Markdown', slug: 'html-to-markdown' }
    ]
  }
];

export const getResourceBySlug = (slug) => {
  return resourcesRegistry.find(r => r.slug === slug || r.id === slug);
};
