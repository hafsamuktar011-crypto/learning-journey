
import express from "express";
import db from './db/db.config'

const app = express();

async function startServer(){
    try{
  app.listen(8000,(err)=>{
    if(err){
      throw err
    }
    console.log('server is runninng on port http;//lovalhost:8000');
    
  })
    }catch(err){
      console.log('enter starting server:',err);
      
    }
}
    startServer()



