export async function createConversation(req, res, next) {
    try {

        const { question } = req.body;

        const result = await createConversationService(question);

        res.status(200).send(`${result} created convo`);

    } catch (error) {
        next(error);
    }
}

export async function getRecentConversationRows(req,res,next) {
  try{
   const result=await getConversationService(5)
   res.status(200).send({

   })
  }catch(error){
    next(error)
  }
}