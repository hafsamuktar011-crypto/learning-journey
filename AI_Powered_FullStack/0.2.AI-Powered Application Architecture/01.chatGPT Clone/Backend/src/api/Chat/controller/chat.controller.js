export function createConversation(req,res,next){
  try{

  }
  catch(error){
throw error
  }
  res.status(200).send('created convo')
}

export function getConversation(req,res){
    res.status(200).send('get convo')
}