import 'dotenv/config'

import express from "express";
import db from './db/db.config.js'
import mainRoute from './src/main.route.js';

const app = express();

app.use(express.json())
app.use('api',mainRoute)



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



