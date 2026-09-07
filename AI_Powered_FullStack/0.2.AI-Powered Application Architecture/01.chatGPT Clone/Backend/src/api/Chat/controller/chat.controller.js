

export async function createConversation(req,res,next){
  try{
  const result= await createConversation()
   res.status(200).send(`${result}` +'created convo')
  }
  catch(error){
throw error
  }
 
}

export function getConversation(req,res){
  try{
       res.status(200).send('get convo')
  }catch(err){
  throw(err)
  }
}