import db from '../../../../db/db.config.js';

export async function createConversation(question) {

    try {

        if (!question.trim()) {
            const error = new Error("question is required");
            error.status = 400;
            throw error;
        }
               //save to db
               
        await connection.query(
            "INSERT INTO conversations (question) VALUES (?)",
            [question]
        );

        return `chat saved to db with question:${question}`

    } catch (error) {
        throw error;
    }
}