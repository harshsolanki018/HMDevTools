# HMDevTools — Master Build Prompt for Antigravity

You are building HMDevTools, a production-quality developer utility platform.

IMPORTANT:
- Build the actual working application, not a visual prototype.
- Do not leave fake buttons, dead links, lorem ipsum, or placeholder tool functionality.
- If a feature cannot be implemented without an external service/API key, implement a clean disabled/configurable state and document the required environment variable.
- Keep the architecture extensible.
- Use JavaScript throughout. Do not convert the project to TypeScript unless explicitly requested later.

---

# 1. Product identity

Name: HMDevTools

Temporary tagline:
"Developer tools that just work."

Positioning:
Fast, practical and privacy-conscious utilities for developers.

Target users:
- Web developers
- Backend developers
- Software engineers
- Students
- QA engineers
- DevOps users
- Technical writers
- API developers

Core principles:
1. Fast
2. Simple
3. Useful
4. Private where possible
5. Professional
6. Searchable
7. Extensible

Use the supplied demo logo:
brand/hmdevtools-demo-logo.svg

Make all branding centralized so the logo/colors/name can be changed from one place later.

---

# 2. Visual design

Create a clean modern developer website without over-design.

Do NOT use:
- Excessive gradients
- Neon/glowing effects
- 3D hero graphics
- Huge decorative blobs
- Excessive animations
- Heavy glassmorphism
- Fake terminal animations
- Unnecessary parallax

Use:
- White/light gray surfaces in light mode
- Charcoal/near-black surfaces in dark mode
- Strong readable typography
- Subtle borders
- Small border radii
- Limited shadows
- Consistent spacing
- Simple icons
- Clear hierarchy

The UI should look like a serious utility product.

Theme:
- Light
- Dark
- System preference
- Persist preference locally

Accessibility:
- Keyboard navigation
- Visible focus states
- Proper labels
- Semantic HTML
- Accessible dialogs/dropdowns
- Good color contrast
- Reduced-motion support

---

# 3. Technology

Use MERN:

Frontend:
- React
- React Router
- JavaScript
- Vite
- CSS architecture of your choice, preferably a maintainable utility/component approach

Backend:
- Node.js
- Express.js

Database:
- MongoDB
- Mongoose

Recommended supporting packages:
- helmet
- cors
- express-rate-limit
- compression
- dotenv
- bcrypt
- jsonwebtoken
- zod or another lightweight validation library if useful
- slugify if useful

Only add dependencies when they provide real value.

---

# 4. Repository architecture

Use a clean structure similar to:

/client
  /src
    /assets
    /components
    /components/layout
    /components/ui
    /components/tools
    /pages
    /pages/tools
    /pages/legal
    /pages/account
    /pages/resources
    /hooks
    /lib
    /services
    /data
    /styles
    /utils

/server
  /src
    /config
    /controllers
    /middleware
    /models
    /routes
    /services
    /utils

/shared
  /tools
  /constants

/public
  /images
  /icons

Also provide:
.env.example
README.md

Keep frontend and backend independently runnable.

---

# 5. Global navigation

Desktop header:

Logo | Tools | Categories | Resources | API | Search | Theme | optional Account

Mobile:
- Logo
- Menu
- Search
- Theme

Navigation should be simple and uncluttered.

Footer columns:

Product
- All Tools
- Categories
- Popular Tools
- New Tools

Resources
- Developer Resources
- Blog
- Guides
- Changelog
- Roadmap

Company
- About HMDevTools
- Contact
- Feedback

Legal
- Privacy
- Terms
- Cookie Policy

Footer also includes:
- Temporary demo logo
- Short product description
- Copyright
- Status placeholder only if an actual status system exists

Do not create links to pages that do not exist.

---

# 6. Required pages

Create all of these as real pages:

/                     Home
/tools                 All Tools
/categories            Categories
/search                Search
/about                 About HMDevTools
/how-it-works          How HMDevTools Works
/resources             Developer Resources
/blog                  Blog
/changelog             Changelog
/roadmap               Roadmap
/contact               Contact
/faq                   FAQ
/api                   API
/api/docs              API Documentation
/privacy               Privacy Policy
/terms                 Terms of Service
/cookies               Cookie Policy
/sitemap                HTML Sitemap

Error pages:
/404
/500

Tool pages:
/tools/:slug

Future account routes should be architected:
/login
/register
/forgot-password
/profile
/saved-tools
/history
/api/dashboard

If authentication is not part of v1, keep these routes disabled or clearly marked as future functionality rather than fake pages.

---

# 7. Homepage

Make the homepage moderately long and useful.

Sections:

1. Header
2. Hero
   - HMDevTools demo logo
   - Clear headline
   - Short explanation
   - Large tool search box
   - Example searches
   - CTA to browse tools
3. Popular Tools
4. Tool Categories
5. Why HMDevTools
   - Fast
   - Privacy-conscious
   - No unnecessary registration
   - Developer-focused
6. Local Processing
   Explain that tools can process data locally when technically practical.
   Never claim all tools are local.
7. Featured Tools
8. AI Tools teaser
   Explain AI features are planned/optional and should not pretend to exist if not implemented.
9. Developer API section
10. How it works
11. FAQ
12. Final CTA
13. Footer

Use a small number of relevant illustrations/icons/images where they improve comprehension. Avoid decorative image overload.

Images must be optimized and lazy-loaded below the fold.

---

# 8. Tools page

Create:
- Search
- Category filters
- Popular filter
- Recently added
- Alphabetical sort
- Tool cards
- Clear descriptions
- Tool count
- Empty state

Tool cards should show:
- icon
- name
- short description
- category
- processing badge such as "Runs locally" only when true

---

# 9. Categories

Initial categories:

JSON & Data
Encoding & Decoding
Web Development
Generators
Security Utilities
Text Utilities
Regex
Dates & Time
Images
SQL & Databases
Code Conversion
Formatting
API & Networking
AI Developer Tools

Each category gets:
- category title
- explanation
- tools
- related categories
- SEO metadata

---

# 10. Initial tools

Implement these as genuinely working tools where possible.

JSON & Data:
1. JSON Formatter
2. JSON Validator
3. JSON Minifier
4. JSON Viewer
5. JSON to CSV
6. CSV to JSON
7. JSON to YAML
8. YAML to JSON

Encoding:
9. Base64 Encoder
10. Base64 Decoder
11. URL Encoder
12. URL Decoder
13. HTML Encoder
14. HTML Decoder
15. Unicode Converter
16. JWT Decoder

Generators:
17. UUID Generator
18. Random Password Generator
19. Lorem Ipsum Generator
20. QR Code Generator
21. Random JSON Generator
22. Hash Generator

Web:
23. URL Parser
24. Meta Tag Generator
25. HTML Formatter
26. CSS Formatter
27. JavaScript Formatter
28. Markdown to HTML
29. HTML to Markdown

Dates:
30. Unix Timestamp Converter
31. Date to Timestamp
32. Timestamp to Date
33. Timezone Converter
34. Cron Expression Helper

Regex:
35. Regex Tester
36. Regex Explainer interface, with non-AI basic explanation where possible

SQL:
37. SQL Formatter
38. SQL Minifier

Text:
39. Word Counter
40. Character Counter
41. Case Converter
42. Remove Duplicate Lines
43. Whitespace Cleaner
44. Text Diff

Code conversion:
45. JSON to TypeScript
46. JSON to JavaScript
47. JSON to Python
48. JSON to Java
49. JSON to C#
50. JSON to Go

Do not expose all 50 as unfinished if implementation is incomplete. Either implement them or stage them clearly as "Coming soon" and exclude them from the main usable-tool count.

---

# 11. Tool page standard

Every working tool page should contain:

- Breadcrumbs
- H1
- Short explanation
- Tool interface
- Input
- Output
- Copy button
- Clear/reset
- Download when applicable
- Sample input
- Error state
- Success state
- Processing state when needed
- Privacy/processing note
- "How to use"
- "Examples"
- FAQ
- Related tools
- Related category
- SEO metadata

For client-side tools, show:
"Processing happens in your browser" where accurate.

Do not display sensitive input in analytics.

---

# 12. Tool architecture

Do NOT hardcode each tool into navigation manually.

Create a centralized tool registry.

Each tool should have fields similar to:

id
name
slug
category
description
shortDescription
icon
keywords
status
processingMode
isPopular
isNew
component
seoTitle
seoDescription
howItWorks
examples
faq
relatedTools

processingMode can be:
client
server
external-api
hybrid

The UI should be generated from this registry.

Adding a new tool should require:
1. tool definition
2. tool implementation
3. optional documentation/content

The rest of the website should automatically discover it.

---

# 13. Search

Implement fast client-side search for the tool catalog.

Search should match:
- name
- description
- keywords
- category

Add keyboard shortcut:
Ctrl/Cmd + K

Show recent searches locally.

Do not send tool-search queries to the server.

---

# 14. Performance

Performance is a major requirement.

Rules:
- Avoid unnecessary dependencies.
- Lazy-load noncritical routes.
- Lazy-load heavy tool modules.
- Use Web Workers for CPU-heavy client-side processing.
- Avoid rendering huge lists.
- Debounce search.
- Optimize images.
- Prefer SVG icons.
- Do not load large libraries globally.
- Split bundles.
- Cache static assets.
- Use compression on server.
- Use MongoDB indexes.
- Avoid unnecessary database queries.
- Never block the entire UI while a tool works.
- Use progress indicators only when progress can be measured.
- Keep animations short and optional.
- Respect prefers-reduced-motion.

Aim for excellent Lighthouse performance.

---

# 15. SEO

Every public tool page must have:
- unique title
- unique meta description
- canonical URL
- Open Graph metadata
- Twitter/X card metadata where useful
- structured data where appropriate
- semantic HTML
- descriptive H1
- internal links
- breadcrumbs
- FAQ section where relevant

Generate:
- robots.txt
- XML sitemap
- HTML sitemap

Do NOT use deceptive or mass-generated SEO content.

Avoid:
- keyword stuffing
- hidden text
- thousands of nearly identical pages
- fake reviews
- fake authors
- fake statistics

Tool pages should provide real utility and meaningful explanatory content.

---

# 16. Images

Use images only where they improve understanding.

Preferred:
- lightweight SVG illustrations
- simple diagrams
- subtle screenshots/examples
- optimized WebP/AVIF for raster images

Do not make the site dependent on remote stock images.

The supplied demo logo is the primary branding asset.

If an illustration is needed, prefer creating a simple local SVG instead of adding a heavy image library.

---

# 17. About page

Include:
- What HMDevTools is
- Why it exists
- Product principles
- Privacy approach
- Performance philosophy
- Who it is for
- Roadmap direction
- Contact/feedback CTA

Do not invent founders, offices, awards, user counts, or company history.

Use honest wording such as:
"HMDevTools is a developer utility platform focused on..."

---

# 18. How It Works page

Explain:
1. Choose a tool
2. Enter/paste/upload data
3. Processing occurs locally when practical
4. Review result
5. Copy/download/use result

Explain local vs server processing accurately.

Include a simple process illustration.

---

# 19. Resources

Create a useful resources hub.

Initial sections:
- Developer guides
- Tool guides
- Web development tips
- Data format references
- Encoding references
- Regex references
- Date/time references

The blog must not contain fake posts.

Seed only a few genuinely useful articles if content is included.

---

# 20. FAQ

Create questions around:
- What is HMDevTools?
- Are tools free?
- Is my data uploaded?
- Which tools run locally?
- Do I need an account?
- Does HMDevTools store my input?
- Can I use tools commercially?
- Is there an API?
- How can I report a bug?
- How can I request a tool?

Avoid absolute privacy claims that cannot be guaranteed.

---

# 21. Contact

Create a proper contact form.

Fields:
- Name
- Email
- Topic
- Message

Topics:
General
Bug report
Tool request
Feedback
Business/API
Privacy

Backend:
POST /api/contact

Validate input.
Rate-limit endpoint.
Do not expose secrets.
Provide success/error states.

If email delivery is not configured, save the message to MongoDB and show a clear configuration status.

---

# 22. Backend API

Create versioned routes:

/api/v1/health
/api/v1/tools
/api/v1/categories
/api/v1/contact

Future:
 /api/v1/auth/*
 /api/v1/ai/*
 /api/v1/developer/*

Health endpoint should return basic service status without sensitive information.

---

# 23. MongoDB models

Initial models:

Tool
- name
- slug
- category
- description
- keywords
- status
- processingMode
- isPopular
- isNew
- createdAt
- updatedAt

Category
- name
- slug
- description
- icon
- order

ContactMessage
- name
- email
- topic
- message
- status
- createdAt

Future:
User
ApiKey
ApiUsage
SavedTool
ToolHistory
BlogPost
ChangelogEntry

Use timestamps.

Add appropriate indexes, especially:
Tool.slug
Tool.category
Tool.name
Tool.keywords where useful.

---

# 24. Security

Implement:
- helmet
- CORS configuration
- rate limiting
- request body size limits
- validation
- sanitized user input
- secure error responses
- environment variables
- no secrets in frontend
- no API keys in source control

Never log raw user input from developer tools unless explicitly necessary.

Do not store tool inputs by default.

---

# 25. Privacy

Privacy page should clearly distinguish:
- client-side processing
- server-side processing
- third-party API processing

If a tool requires external AI/API processing, say so.

Do not claim "we never see your data" for server-processed tools.

---

# 26. Error handling

Create:
- global React error boundary
- Express error middleware
- 404 handling
- friendly tool errors
- network error states
- empty states

Never expose stack traces to end users in production.

---

# 27. Responsive design

Must work well at:
- 320px+
- mobile
- tablet
- desktop
- large monitors

Tool interfaces must be usable on mobile.

For editors:
- responsive split view
- on small screens, stack input/output vertically

Buttons should remain comfortably tappable.

---

# 28. Accessibility

Use:
- semantic landmarks
- button elements for buttons
- labels
- aria attributes only where needed
- keyboard support
- focus management
- accessible modals
- readable contrast

Do not rely on color alone to communicate errors/success.

---

# 29. Analytics

Architecture should support privacy-conscious analytics.

Do not send:
- raw JSON
- tokens
- passwords
- user-entered developer code
- arbitrary tool input

Track only safe aggregate events such as:
- tool_opened
- tool_completed
- category_viewed
- search_used

Keep analytics provider configurable.

---

# 30. Future AI section

Create architecture for future AI tools but do not fake functionality.

Planned tools:
- Error Explainer
- Regex Explainer
- Code Explainer
- JSON-to-code assistance
- SQL explanation
- Documentation generator

Only show "Available" if actually implemented.

Otherwise label "Coming soon."

---

# 31. API future vision

The API page should explain planned API capabilities without pretending they already exist.

Potential:
- JSON formatting
- validation
- conversion
- encoding
- hashing
- data transformation

API docs should be real only for implemented endpoints.

---

# 32. Theme

Centralize theme variables.

Use CSS custom properties.

Example conceptual tokens:
--bg
--surface
--surface-muted
--text
--text-muted
--border
--accent
--accent-hover
--danger
--success
--warning

Do not scatter hardcoded colors throughout components.

Theme must work consistently across:
- header
- footer
- cards
- forms
- editors
- dialogs
- tool output
- code blocks
- tables

---

# 33. Demo logo

Use:
brand/hmdevtools-demo-logo.svg

The logo is temporary.

Put the asset in a centralized branding component.

Do not hardcode the logo as repeated inline markup across pages.

---

# 34. Content quality

Write real professional copy.

Tone:
- concise
- confident
- useful
- developer-friendly
- not salesy

Avoid:
"Revolutionary"
"World's best"
"10x your productivity"
"Trusted by millions"

unless actual evidence exists.

---

# 35. Seed data

Provide initial tool registry/seed data for all implemented tools.

Each implemented tool should have:
- accurate description
- keywords
- category
- SEO title
- SEO description
- FAQ
- examples
- related tools

Do not create fake metrics.

---

# 36. Testing

Before declaring completion:

Test:
- all routes
- navigation
- theme switching
- mobile layout
- tool search
- every implemented tool
- copy buttons
- reset buttons
- downloads
- form validation
- API health
- contact flow
- 404
- error boundary
- SEO metadata
- sitemap
- robots.txt

Fix console errors.

Fix broken links.

No obvious TODO placeholders should remain.

---

# 37. Developer experience

Provide:
- clear README
- .env.example
- installation instructions
- development instructions
- production build instructions
- MongoDB setup instructions
- environment variable documentation
- API documentation
- tool creation guide

Create a "How to add a new tool" developer document.

---

# 38. Final acceptance criteria

The project is successful only when:

1. It runs locally.
2. Frontend and backend communicate correctly where required.
3. MongoDB integration is functional.
4. The homepage is polished and moderately long.
5. Required informational/legal pages exist.
6. Tool catalog works.
7. Search works.
8. Theme works.
9. Implemented tools actually work.
10. Tool pages are SEO-ready.
11. Mobile layout works.
12. No fake functionality is presented as real.
13. Performance is considered throughout.
14. The codebase is reusable and maintainable.
15. Adding future tools is straightforward.

At the end, provide:
- final folder structure
- setup commands
- environment variables
- implemented tool list
- intentionally deferred features
- known limitations
- testing summary

Build HMDevTools as a real foundation that can grow into a large developer utility platform.
