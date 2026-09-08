import express from 'express'
import { createConversation } from './controller/chatcontroller'
import { getConversation } from './controller/chatcontroller'

const chatRouter=express.Router()

chatRouter.post('/conversation',createConversation)

chatRouter.get('/conversation',getConversation)

export default chatRouter