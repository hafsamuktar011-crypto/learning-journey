import 'dotenv/config'

import express from "express";
import db from './db/db.config.js'

const app = express();

app.use=express.json()

// app.post("api/chat/conversation",(req,res)=>{
//   res.send('post method')
// })

// app.get("api/chat/conversation",(req,res)=>{
//   res.send('get method')
// })

async function startServer(){
    try{
 const connection=await db.getConnection()
 connection.release()

  app.listen(8000,(err)=>{
    if(err){
      throw err
    }
    console.log('server is runninng on port http;//lovalhost:8000');
    
  })
    }catch(err){
      console.log('enter starting server:',err.message);
      
    }
}
    startServer()



