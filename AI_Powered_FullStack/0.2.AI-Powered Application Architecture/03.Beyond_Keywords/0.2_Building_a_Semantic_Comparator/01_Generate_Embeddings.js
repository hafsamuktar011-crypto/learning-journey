import "dotenv/config"
import { GoogleGenAI } from "@google/genai"

const GEMINI_EMBEDDING_MODEL =process.env.GEMINI_EMBEDDING_MODEL || "gemini-embedding-001";
const GEMINI_API_KEY=process.env.GEMINI_API_KEY

if(!GEMINI_API_KEY){
    throw new Error('GEMINI_API_KEY env variable is required')
}

//1.initialize the SDK
const ai=new GoogleGenAI({apiKey:GEMINI_API_KEY})