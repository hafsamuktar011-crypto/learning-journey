import 'dotenv/config'

import express from "express";
import db from './db/db.config.js'

const app = express();

async function startServer(){
    try{
 const connection=await db.getConnection()

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



