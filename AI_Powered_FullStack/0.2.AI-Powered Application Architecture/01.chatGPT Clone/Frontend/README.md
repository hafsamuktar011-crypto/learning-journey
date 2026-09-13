# ChatGPT Clone Frontend

A modern React + Vite frontend for a ChatGPT-style application UI. This app includes a sidebar, chat header, conversation area, and message input, designed to mimic a simple AI chat experience.

## Overview

This frontend is built to work as the user interface for the chatGPT clone project. It focuses on a clean layout and reusable components for chat interactions, with styling managed through CSS modules.

## Features

- Responsive chat layout
- Sidebar navigation inspired by AI chat apps
- Message list with user and assistant message rendering
- Loading state for AI responses
- Clean, component-based structure
- React with Vite for fast frontend development

## Tech Stack

- React 19
- Vite
- CSS Modules
- Lucide React icons
- React Markdown
- React Syntax Highlighter

## Project Structure

```bash
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── ChatHeader/
│   │   ├── ChatInput/
│   │   ├── ChatMessage/
│   │   ├── MessageList/
│   │   └── Sidebar/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Main Components

- `Sidebar` – left navigation panel with actions and menu items
- `ChatHeader` – top of the chat interface with title and user avatar
- `MessageList` – displays the conversation history
- `ChatMessage` – renders individual messages with role-based styling
- `ChatInput` – input field and submit button for user prompts

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Open the app

The Vite app will typically run at:

```bash
http://localhost:5173
```

## Available Scripts

```bash
npm run dev     # start the React app in development mode
npm run build   # create a production build
npm run preview # preview the production build locally
npm run lint    # run lint checks
```

## Notes

- This is the frontend layer of the full chatGPT clone project.
- It is designed to communicate with the backend service for sending and receiving chat messages.
- Styling is modularized to keep each component self-contained and easier to maintain.

## Related Project

This frontend belongs to the larger project:

- Backend: `../Backend`

## License

This project is for learning and educational purposes.
