# ChatGPT Clone - Backend Service

A Node.js + Express backend for a ChatGPT-style application. This service handles chat routes, stores conversation data in MySQL, and connects to the Gemini API to generate AI responses.

## Overview

This backend is the API layer for the chatGPT clone project. It exposes endpoints for creating and retrieving conversations, communicates with a MySQL database, and uses Google Gemini to generate responses for user prompts.

## Features

- Express server with REST API structure
- MySQL database connection using mysql2
- Gemini AI integration for chat responses
- Conversation history retrieval
- CORS enabled for frontend communication
- Environment variable based configuration

## Tech Stack

- Node.js
- Express.js
- MySQL
- Gemini API via Google GenAI SDK
- dotenv
- CORS
- Nodemon for development

## Project Structure

```bash
Backend/
├── db/
│   └── db.config.js
├── src/
│   ├── api/
│   │   ├── Chat/
│   │   │   ├── controller/
│   │   │   ├── Router/
│   │   │   └── service/
│   │   └── main.route.js
│   ├── middleware/
│   │   └── error.handler.js
│   └── utils/
├── .env
├── index.js
├── package.json
├── README.md
└── steps.txt
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the `Backend` directory with the following values:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_DATABASE=chatgpt_clone
GEMINI_API_KEY=your_google_gemini_api_key
GEMINI_MODEL=gemini-2.0-flash-lite
```

### 3. Start the server

```bash
npm run dev
```

The server runs on:

```bash
http://localhost:3000
```

## Available Scripts

```bash
npm run dev   # start the server with nodemon
npm start     # start the server
```

## API Endpoints

### Base URL

```bash
/api
```

### Chat routes

```bash
POST /api/chat/conversation
GET  /api/chat/conversation
```

### Example request

```bash
POST http://localhost:3000/api/chat/conversation
Content-Type: application/json

{
  "question": "Explain the difference between React and Node.js"
}
```

### Response format

```json
{
  "success": true,
  "message": "conversations fetched successfully",
  "data": []
}
```

## Database

The backend uses a MySQL pool connection configured in [db/db.config.js](db/db.config.js). The application expects a database and table structure for storing chat conversations. The code currently references conversation records that include:

- `id`
- `role`
- `content`
- `token_count`
- `created_at`

## AI Integration

The backend uses the Google GenAI SDK to create a Gemini chat session and generate assistant responses using conversation history as context.

The chat service:

- validates the incoming prompt
- fetches recent conversation history
- sends the message to Gemini
- stores the user and assistant message flow
- returns generated chat data

## Middleware

The app includes:

- `express.json()` for parsing JSON request bodies
- `cors()` to allow frontend communication
- custom error handler middleware to handle server errors

## Notes

- This project is intended to work with the frontend app in the same chatGPT clone project.
- The backend is designed to be extended with more conversation features, authentication, and better database validation.
- The code is educational and demonstrates an AI-powered backend architecture pattern.

## Related Project

- Frontend: `../frontend`

## License

This project is for learning and educational purposes.
