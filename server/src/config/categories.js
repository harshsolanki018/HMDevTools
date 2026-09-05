export const CATEGORIES = [
  {
    id: 'json-data',
    name: 'JSON & Data',
    slug: 'json-data',
    description: 'Format, validate, minifying, view, and convert JSON data structures.',
    icon: 'FileJson',
    order: 1
  },
  {
    id: 'encoding',
    name: 'Encoding & Decoding',
    slug: 'encoding',
    description: 'Base64, URL, HTML entity, Unicode, and JWT token encoders and decoders.',
    icon: 'Binary',
    order: 2
  },
  {
    id: 'generators',
    name: 'Generators',
    slug: 'generators',
    description: 'Generate UUIDs, passwords, placeholder text, QR codes, and cryptographic hashes.',
    icon: 'Wand2',
    order: 3
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    slug: 'web-dev',
    description: 'Formatters, parsers, meta tag generators, and HTML/CSS/JS web utilities.',
    icon: 'Code2',
    order: 4
  },
  {
    id: 'dates-time',
    name: 'Dates & Time',
    slug: 'dates-time',
    description: 'Unix timestamps, timezone conversions, date formatting, and cron expression helpers.',
    icon: 'Clock',
    order: 5
  },
  {
    id: 'regex',
    name: 'Regex',
    slug: 'regex',
    description: 'Test, build, debug, and analyze regular expressions.',
    icon: 'Regex',
    order: 6
  },
  {
    id: 'sql-databases',
    name: 'SQL & Databases',
    slug: 'sql-databases',
    description: 'Format, beautify, minify, and inspect SQL queries.',
    icon: 'Database',
    order: 7
  },
  {
    id: 'text-utilities',
    name: 'Text Utilities',
    slug: 'text-utilities',
    description: 'Word counters, case converters, line deduplication, whitespace cleaners, and text diffing.',
    icon: 'FileText',
    order: 8
  },
  {
    id: 'code-conversion',
    name: 'Code Conversion',
    slug: 'code-conversion',
    description: 'Convert JSON structures to TypeScript, JavaScript, Python, Go, Java, and C# types.',
    icon: 'ArrowLeftRight',
    order: 9
  },
  {
    id: 'ai-tools',
    name: 'AI Developer Tools',
    slug: 'ai-tools',
    description: 'AI-assisted code analysis, error explanation, and automated doc generation.',
    icon: 'Sparkles',
    order: 10
  }
];

export const CATEGORY_MAP = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = cat;
  acc[cat.slug] = cat;
  return acc;
}, {});
