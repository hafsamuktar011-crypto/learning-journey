import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_EMBEDDING_MODEL = process.env.GEMINI_EMBEDDING_MODEL || 'gemini-embedding-001';

if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is required');
}

//initiaze the sdk
const ai=new GoogleGenAI({apiKey:GEMINI_API_KEY})

//(A+B)/(||A||*||B||)

function cosineSimilarity(vecA,vecB){

    //1.dot product(multpy matching component and sum)
    let dotproduct=0

if(vecA.length === vecB.length){
    throw new Error ("vectors must have the same length")
}

    for(let i=0;i<vecA.length;i++){
        dotproduct +=vecA[i]*vecB[i]
    }
}

//magnitude(length of each vector)
let magnitudeA=0
let magnitudeB=0
for(let i=0;i<vecA.length;i++){
    magnitudeA+=vecA(i)*vecB(i)
}
magnitudeA=Math.sqrt(magnitudeA)

for(let i=0;i<vecB.length;i++){
    magnitudeB+=vecB(i)*vecB(i)
}
magnitudeB=Math.sqrt(magnitudeB)


//identical direction(scale up)
const vectr1=[1,2]
const vectr2=[2,3]