import express from 'express'
import { createConversation } from './controller/chatcontroller'

const chatRouter=express.Router()

chatRouter.post('/conversation',createConversation)

chatRouter.get('/conversation',(req,res)=>{
    
})

export default chatRouter