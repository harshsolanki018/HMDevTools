**# HMDevTools

HMDevTools is a privacy-focused collection of developer utilities for working with JSON, encoding, web development, dates, regex, SQL, text, and code conversion.

All tool processing is performed locally in the browser wherever applicable, so user-provided tool data is not sent to the backend.

## Features

- 50 developer tools
- 6 developer reference guides and cheat sheets
- JSON formatting, validation, conversion, and visualization
- Base64, URL, HTML, and Unicode encoding tools
- JWT decoding
- UUID, password, Lorem Ipsum, and hash generators
- HTML, CSS, JavaScript, Markdown, and SQL utilities
- Timestamp and timezone utilities
- Cron expression helper
- Regex tester and explainer
- Text comparison and cleanup utilities
- JSON to TypeScript, Python, Go, Java, and C# conversion
- Responsive interface
- Light, dark, and system theme support
- Keyboard-accessible global search

## Privacy

HMDevTools is designed with a client-side privacy architecture.

Tool inputs and calculations are processed in browser JavaScript memory. Tool payloads are not intentionally transmitted to the backend or stored in the database.

The backend is used for application functionality such as metadata, health checks, and contact processing rather than processing the contents entered into developer tools.

## Project Structure

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
**
