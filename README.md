# HMDevTools

**Fast, privacy-focused developer tools for everyday engineering work.**

[Live Website](https://www.hmdevtools.ryzn.pro)

HMDevTools is a web-based developer toolkit that brings **50 practical utilities** into one consistent workspace. It helps developers quickly handle JSON, encoding, web development, dates, regular expressions, SQL, text processing, code conversion, and other common engineering tasks.

Instead of switching between multiple websites for small development tasks, HMDevTools provides a centralized collection of lightweight utilities designed for speed, simplicity, and privacy.

---

## ✨ Why HMDevTools?

Developers regularly need small utilities for tasks such as:

* Formatting and validating JSON
* Encoding and decoding Base64 or URLs
* Inspecting JWTs
* Testing regular expressions
* Formatting and minifying SQL
* Converting timestamps
* Comparing text
* Converting JSON into programming-language types
* Cleaning text and whitespace
* Generating UUIDs and hashes

HMDevTools brings these everyday utilities together in a single developer-focused workspace.

---

## 🚀 Key Features

### 50 Developer Tools

HMDevTools currently provides **50 operational developer tools** across **10 categories**:

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

---

## 🧰 Available Tools

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

## 🔐 Privacy-First Architecture

Privacy is a core design principle of HMDevTools.

The operational developer tools perform their processing directly in the user's browser using client-side JavaScript.

```text
User Input
    ↓
Browser
    ↓
Local JavaScript Processing
    ↓
Result
```

This means tool input does not need to be uploaded to a processing API.

This architecture is particularly useful when working with:

* Internal API responses
* Development configuration
* JSON containing customer information
* JWTs and tokens
* Logs
* SQL queries
* Private code snippets
* Production debugging data

Users should still follow their organization's security policies and avoid exposing secrets unnecessarily.

---

## 📚 Developer Reference Guides

HMDevTools also includes **six technical reference guides** designed to complement the tools:

* JSON Syntax Cheat Sheet
* HTTP Status Codes Reference
* Regex Cheat Sheet
* Cron Expression Cheat Sheet
* Encoding Cheat Sheet
* Web Developer Cheat Sheet

These resources connect common development concepts with the relevant HMDevTools utilities.

---

## 👨‍💻 Who Is HMDevTools For?

### Software Developers

Useful for everyday development tasks such as JSON formatting, encoding, conversion, regex testing, and text comparison.

### Frontend Developers

Useful for HTML, CSS, JavaScript, Markdown, URL, and browser-oriented utilities.

### Backend Developers

Useful for JSON, JWT, Base64, timestamps, SQL, hashing, URLs, and API debugging.

### DevOps & Cloud Engineers

Useful for timestamps, cron expressions, encoding, configuration data, JSON, and text processing.

### QA & Test Engineers

Useful for regex testing, text comparison, data conversion, validation, and generating test values.

### Students & Learners

Useful for learning programming and web-development concepts through practical tools and technical references.

### Technical Teams

Useful as a lightweight shared collection of utilities for repetitive development tasks.

---

## 🖥️ User Experience

HMDevTools is designed around a simple developer-focused workflow:

* Fast access to commonly used utilities
* Consistent interface across tools
* Clear input and output areas
* Convenient copy functionality
* Support for empty, invalid, and large inputs
* Unicode-aware processing
* Keyboard-accessible controls
* Global tool search
* Responsive layouts for different screen sizes

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

---

## 🛡️ Security

The application includes multiple backend and application-level security controls, including:

* Helmet security headers
* Content Security Policy
* CORS restrictions
* API rate limiting
* Request body size limits
* Input validation
* Production error handling
* IP hashing for applicable contact-form processing

Secrets and environment files are excluded from the Git repository.

---

## ⚙️ Technology Stack

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
                   ┌────────────────┴────────────────┐
                   │                                 │
            ┌──────▼──────┐                   ┌──────▼──────┐
            │   Client    │                   │   Server    │
            │ React/Vite  │                   │ Node/Express│
            └──────┬──────┘                   └──────┬──────┘
                   │                                 │
          Local tool processing              API / Application
                   │                                 │
                   ▼                                 ▼
            Browser memory                       MongoDB
```

The client-side developer tools process their operational input locally rather than requiring the backend to process that content.

---

## 🔎 SEO & Discoverability

HMDevTools includes production-oriented SEO infrastructure:

* Unique page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Twitter metadata
* JSON-LD structured data
* XML sitemap
* Prerendered HTML pages
* Developer reference resources

The project is structured to make individual tools and reference resources discoverable through search engines.

---

## ✅ Testing & Quality Verification

HMDevTools has undergone verification across the application's core functionality and production infrastructure.

Testing and verification covered:

* All 50 operational tools
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

The project was also verified after repository cleanup to ensure that the client and server remain self-contained.

---

## 🧹 Repository Structure

The repository intentionally maintains a minimal structure:

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

## 🗺️ Roadmap

Future improvements may include:

* Additional developer utilities
* More programming-language converters
* Additional technical reference guides
* Improved tool presets
* Advanced keyboard shortcuts
* Privacy-preserving tool usage analytics
* Progressive Web App capabilities
* Expanded offline support

---

## 📊 Project Status

**Production-ready and deployed for public use.**

HMDevTools currently provides:

* **50** operational developer tools
* **6** developer reference guides
* **70** indexable pages
* Client-side processing for developer tool operations
* React + Vite frontend
* Node.js + Express backend
* MongoDB integration
* Production SEO infrastructure
* Security controls
* Responsive and accessible user experience

---

### Built for Developers

**HMDevTools makes everyday developer tasks faster, simpler, and more privacy-conscious — all from one unified toolkit.**
