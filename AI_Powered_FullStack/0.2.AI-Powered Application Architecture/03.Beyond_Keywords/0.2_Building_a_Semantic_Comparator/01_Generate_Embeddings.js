import "dotenv/config"
import { GoogleGenAI } from "@google/genai"

const GEMINI_EMBEDDING_MODEL =process.env.GEMINI_EMBEDDING_MODEL || "gemini-embedding-001";
const GEMINI_API_KEY=process.env.GEMINI_API_KEY

if(!GEMINI_API_KEY){
    throw new Error('GEMINI_API_KEY env variable is required')
}

//1.initialize the SDK
const ai=new GoogleGenAI({apiKey:GEMINI_API_KEY})

async function generateEmbedding() {
    const text="hello"
    try{
        //generate the embedding
        const result=await ai.models.embedContent({
            model:GEMINI_EMBEDDING_MODEL,
            contents:text,
            config:{
             outputDimensionality:500
            }
        })
        console.log(result.embeddings[0].values.slice(0.10))
    }catch(error){
        console.log('error generating embedding',error)
    }
}
generateEmbedding()