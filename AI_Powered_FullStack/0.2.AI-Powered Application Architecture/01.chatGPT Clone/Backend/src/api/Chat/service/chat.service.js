import db from '../../../../db/db.config.js'; 

import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL=process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite'

const createGeminiClient=()=>{
  if(!process.env.GEMINI_MODEL){
    throw new Error({apiKey:process.env.GEMINI_API_KEY})
  }
  const geminiClient =new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})
}

export async function createConversation(question) {

    try {
           //validate
        if (!question.trim()) {
            const error = new Error("question is required");
            error.status = 400;
            throw error;
        }
               //save to db
               
        await connection.query(
            "INSERT INTO conversations (content) VALUES (?)",
            [question]
        );

        return `chat saved to db with question:${question}`

    } catch (error) {
        throw error;
    }
}

// get recent conversation row from db
export const getRecentConversationRows = async (limit = 5) => {
    const normalizedLimit = Number.parseInt(limit, 10);
    const safeLimit = 
    Number.isNaN(normalizedLimit) || normalizedLimit <= 0
    ? 20
    : normalizedLimit;

    const [rows] = await db.execute(
        `SELECT id, role, content, created_at
        FROM conversations
        ORDER BY id DESC
        LIMIT ${safeLimit}`
    );
    return rows.reverse();
}

//
export const generateAssistantAnswer = async ({ historyRows, question}) => {
     //format history for gemini statchat
    const formattedHistory = historyRows.map(row => ({
        role: row.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: row.content}],
    }))

    //sample history format
    //[
    //{role:'user',
    //parts:[{text:'hello, i'm a user'}]
    //},
    //{role:'model',
    //parts:[{text:'hello,i'm a model'}]}
    //]

    const chat = geminiClient.chats.create({
        model: GEMINI_MODEL,
        config: {
            maxOutputTokens: 1024,
        },
        history: formattedHistory,
    })

    const result = await chat.sendMessage({ message: question})
    return {text: result.text, totalTokens: result.usageMetadata.totalTokenCount}
}

export const getMessageById =async messageId => {
    const [rows] = await db.execute(
        'SELECT id, role, content, token_count, created_at FROM conversations WHERE id = ? LIMIT 1',
        [messageId],
    )
    if (!rows[0]) return null;
    return {
        id: rows[0].id,
        role: rows[0].role,
        content: rows[0].content,
        tokenCount: Number(rows[0].token_count || 0),
        createdAt: rows[0].created_at,
    }
}