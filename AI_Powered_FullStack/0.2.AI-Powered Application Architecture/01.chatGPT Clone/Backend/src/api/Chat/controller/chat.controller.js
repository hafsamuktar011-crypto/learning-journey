import { getRecentConversationRows } from "../service/chat.service";



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