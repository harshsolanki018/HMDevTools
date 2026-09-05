# HMDevTools — Developer Tools That Just Work

HMDevTools is a privacy-first suite of client-side developer utilities built with React, Vite, Node.js, and Express.

---

## 📁 Repository Structure

```text
HMDevTools/
├── client/          # React + Vite Client Application (50+ Tools, 6 Resources, 70 Static Pages)
├── server/          # Express API Backend (Health Checks, Contact Processing, Categories API)
└── .gitignore       # Repository Ignore Rules
```

---

## 🚀 Quick Start

### 1. Client Application (`client/`)
```bash
cd client
npm install
npm run dev     # Starts Vite development server at http://localhost:5173
npm run build   # Compiles production assets into client/dist/
```

### 2. Backend API Server (`server/`)
```bash
cd server
npm install
npm start       # Starts Express API server on port 5000
```

---

## 🔐 Client-Side Privacy Architecture
All developer tool calculations (JSON formatting, Base64/JWT encoding, Regex testing, Hash generation, SQL formatting) execute 100% locally in your browser's JavaScript engine. No payload data is ever sent to backend servers.
