export async function createConversation(req, res, next) {
    try {

        const { question } = req.body;

        const result = await createConversationService(question);

        res.status(200).send(`${result} created convo`);

    } catch (error) {
        next(error);
    }
}