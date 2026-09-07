export function createConversation(req,res,next){
  try{
  throw new Error('create conversation api error')
   res.status(200).send('created convo')
  }
  catch(error){
throw error
  }
 
}

export function getConversation(req,res){
    res.status(200).send('get convo')
}