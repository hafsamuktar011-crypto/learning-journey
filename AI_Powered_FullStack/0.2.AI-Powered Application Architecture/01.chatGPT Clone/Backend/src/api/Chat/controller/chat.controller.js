import { getRecentConversationRows } from "../service/chat.service";
import { GoogleGenAI } from "@google/genai";

const GEMINI_MODEL=process.env.GEMINI_MODEL || 'gemini-2.0-flash-lite'

const createGeminiClient=()=>{
  if(!process.env.GEMINI_MODEL){
    throw new Error({apiKey:process.env.GEMINI_API_KEY})
  }
  const geminiClient =new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})
}

export async function createConversation(req, res, next) {
    try {

        const { question } = req.body;

        const result = await createConversationService(question);

        res.status(200).send(`${result} created convo`);

    } catch (error) {
        next(error);
    }
}

export async function getConversationController(req, res) {
    try {
        const result = await getRecentConversationRows(100);
        res.status(200).json({
            success: true,
            message: 'conversations fetched successfully',
            data: result,
        })
    } catch (error) {
        throw error
    }
}