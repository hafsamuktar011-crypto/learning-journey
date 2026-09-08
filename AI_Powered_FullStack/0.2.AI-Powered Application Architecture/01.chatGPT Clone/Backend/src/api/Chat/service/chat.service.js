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