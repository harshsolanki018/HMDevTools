# HMDevTools

**Fast, privacy-focused developer tools for everyday engineering work.**

HMDevTools is a web-based developer toolkit providing 50 practical utilities for JSON, encoding, web development, dates, regex, SQL, text processing, and code conversion.

The core tools are designed to process input directly in the browser, keeping tool data on the user's device instead of sending it to a processing server.

**Live:** https://hmdevtools.com

---

## Why HMDevTools?

Developers constantly need small utilities:

* Format an API response
* Validate or minify JSON
* Decode a JWT
* Encode a URL or Base64 value
* Test a regular expression
* Format SQL
* Convert timestamps
* Compare text
* Convert JSON into programming-language types
* Clean whitespace
* Generate UUIDs or hashes

Instead of searching for a different website for every task, HMDevTools brings these utilities together in one consistent developer workspace.

---

## Features

### 50 Developer Tools

HMDevTools currently provides 50 operational tools across multiple categories.

| Category            |  Tools |
| ------------------- | -----: |
| JSON & Data         |     11 |
| Encoding & Decoding |      8 |
| Generators          |      4 |
| Web Development     |      6 |
| Minifiers           |      2 |
| Dates & Time        |      5 |
| Regex               |      2 |
| SQL & Databases     |      2 |
| Text Utilities      |      5 |
| Code Conversion     |      5 |
| **Total**           | **50** |

### Developer Resources

The project also includes six technical reference guides:

* JSON Syntax Cheat Sheet
* HTTP Status Codes Reference
* Regex Cheat Sheet
* Cron Expression Cheat Sheet
* Encoding Cheat Sheet
* Web Developer Cheat Sheet

Each resource connects related concepts with the appropriate HMDevTools utilities.

---

## Privacy by Architecture

Privacy is one of the core design principles of HMDevTools.

The operational developer tools perform their calculations locally using JavaScript in the browser.

For example:

```text
User Input
    ↓
Browser
    ↓
Local JavaScript Processing
    ↓
Result
```

Tool input does not need to be uploaded to a processing API.

This is particularly useful when working with:

* Internal API responses
* Development configuration
* JSON containing customer information
* JWTs and tokens
* Logs
* SQL queries
* Private code snippets
* Production debugging data

Users should still follow their organization's security policies and should never expose secrets unnecessarily.

---

## Who Is HMDevTools For?

HMDevTools is designed for anyone who regularly works with developer data and technical formats.

### Software Developers

Useful for everyday development tasks such as JSON formatting, encoding, conversion, regex testing, and text comparison.

### Frontend Developers

Useful for HTML, CSS, JavaScript, Markdown, URL, and browser-oriented utilities.

### Backend Developers

Useful for JSON, JWT, Base64, timestamps, SQL, hashing, URLs, and API debugging.

### DevOps & Cloud Engineers

Useful for timestamps, cron expressions, encoding, configuration data, JSON, and text processing.

### QA & Test Engineers

Useful for regex testing, text diffing, data conversion, validation, and generating test values.

### Students & Learners

Useful as a collection of quick references and practical tools for learning web development and programming concepts.

### Technical Teams

Useful as a lightweight shared utility collection for repetitive development tasks.

---

## Tool Categories

### JSON & Data

* JSON Formatter
* JSON Validator
* JSON Minifier
* JSON Viewer
* JSON to CSV
* CSV to JSON
* JSON to YAML
* YAML to JSON
* JSON to XML
* XML to JSON
* XML Formatter

### Encoding & Decoding

* Base64 Encoder
* Base64 Decoder
* URL Encoder
* URL Decoder
* JWT Decoder
* HTML Encoder
* HTML Decoder
* Unicode Converter

### Generators

* UUID Generator
* Password Generator
* Lorem Ipsum Generator
* Hash Generator

### Web Development

* URL Parser
* HTML Formatter
* CSS Formatter
* JavaScript Formatter
* Markdown to HTML
* HTML to Markdown

### Minifiers

* CSS Minifier
* JavaScript Minifier
* SQL Minifier

### Dates & Time

* Unix Timestamp Converter
* Timestamp to Date
* Date to Timestamp
* Timezone Converter
* Cron Expression Helper

### Regex

* Regex Tester
* Regex Explainer

### SQL & Databases

* SQL Formatter
* SQL Minifier

### Text Utilities

* Word Counter
* Case Converter
* Remove Duplicate Lines
* Text Diff
* Whitespace Cleaner

### Code Conversion

* JSON to TypeScript
* JSON to Python
* JSON to Go
* JSON to Java
* JSON to C#

---

## Technology Stack

### Frontend

* React
* Vite
* JavaScript
* React Router
* CSS
* Client-side Web APIs

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Helmet
* CORS
* Express Rate Limit
* Zod

### Architecture

```text
                         ┌──────────────────────┐
                         │      HMDevTools      │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
             ┌──────▼──────┐                ┌──────▼──────┐
             │   Client    │                │   Server    │
             │ React/Vite  │                │ Node/Express│
             └──────┬──────┘                └──────┬──────┘
                    │                               │
          Tool processing                   API / Application
          happens locally                         services
                    │                               │
                    ▼                               ▼
              Browser memory                    MongoDB
```

The backend does not need to process the contents entered into the client-side developer tools.

---

## Project Structure

The repository intentionally keeps the root minimal.

```text
HMDevTools/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── server/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

Client and server maintain their own dependencies and package configuration.

---

## Getting Started

### Requirements

* Node.js
* npm
* MongoDB for backend features that require database access

### Clone

```bash
git clone <repository-url>
cd HMDevTools
```

### Install Client

```bash
cd client
npm install
```

### Install Server

Open another terminal:

```bash
cd server
npm install
```

### Environment Variables

Create a local environment file inside `server/`:

```text
server/.env
```

Configure the required values for your environment.

Example:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173
JWT_SECRET=your_secret
```

Never commit `.env` files or production credentials.

### Run the Client

```bash
cd client
npm run dev
```

### Run the Server

```bash
cd server
npm start
```

Refer to the individual `package.json` files for the exact available scripts.

---

## Production

The frontend is built as a production Vite application.

```bash
cd client
npm run build
```

Production output:

```text
client/dist/
```

The frontend can be hosted on a static hosting/CDN platform.

The backend can be deployed independently to a Node.js-compatible hosting platform.

Production environment variables should be configured through the hosting provider rather than committed to the repository.

---

## SEO

HMDevTools includes production SEO infrastructure including:

* Unique page titles
* Meta descriptions
* Canonical URLs
* OpenGraph metadata
* Twitter metadata
* JSON-LD structured data
* XML sitemap
* Prerendered HTML pages
* Developer reference resources

The production domain is:

```text
https://hmdevtools.com
```

---

<<<<<<< HEAD
## 🔐 Client-Side Privacy Architecture
All developer tool calculations (JSON formatting, Base64/JWT encoding, Regex testing, Hash generation, SQL formatting) execute 100% locally in your browser's JavaScript engine. No payload data is ever sent to backend servers.
=======
## Accessibility & Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The application includes keyboard-accessible controls and keyboard navigation for global search.

---

## Security

The backend includes security controls such as:

* Helmet security headers
* Content Security Policy
* CORS restrictions
* API rate limiting
* Request body size limits
* Input validation
* Production error handling
* IP hashing for applicable contact-form processing

Secrets and environment files are excluded from Git through `.gitignore`.

---

## Testing

The project has undergone comprehensive verification covering:

* 50 operational tools
* Valid inputs
* Invalid inputs
* Empty inputs
* Sample inputs
* Clear functionality
* Copy functionality
* Unicode inputs
* Large inputs
* Frontend routes
* SEO metadata
* Sitemap integrity
* Prerendered pages
* Security configuration
* Privacy behavior
* Production builds
* Git repository hygiene

The post-cleanup verification confirmed that the client and server are self-contained and no longer depend on the removed root `shared/`, `scratch/`, or documentation directories.

---

## Repository Hygiene

The GitHub repository intentionally contains only the project files required for development and deployment:

```text
client/
server/
.gitignore
README.md
```

The repository does not intentionally track:

* `node_modules/`
* `.env`
* Build artifacts
* Temporary files
* Local IDE configuration
* Development-only QA scripts
* Internal documentation
* Generated deployment artifacts

---

## Roadmap

Potential future improvements include:

* Additional developer utilities
* More programming-language converters
* Additional technical reference guides
* Improved tool presets
* Advanced keyboard shortcuts
* Tool usage analytics that preserve input privacy
* Progressive Web App capabilities
* Offline support for more tools

---

## License

Add the project's chosen license here.

---

## Project Status

**Production-ready and deployed for public use.**

HMDevTools currently provides:

* **50** operational developer tools
* **6** developer reference guides
* **70** indexable pages
* Client-side processing for developer tool operations
* React + Vite frontend
* Node.js + Express backend
* MongoDB integration
* Production SEO and security configuration

Built to make everyday developer tasks faster, simpler, and more privacy-conscious.
>>>>>>> da8c5b2b95dfd32ad7223d212d7b606ae7c34916
