import db from '../../../../db/db.config.js';

export async function createConversation(question) {

    try {

        if (!question) {
            const error = new Error("question is required");
            error.status = 400;
            throw error;
        }

        const [result] = await db.query(
            "INSERT INTO conversations (question) VALUES (?)",
            [question]
        );

        return result;

    } catch (error) {
        throw error;
    }
}