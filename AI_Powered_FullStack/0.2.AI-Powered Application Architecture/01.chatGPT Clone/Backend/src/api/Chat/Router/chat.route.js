import express from 'express'


import { createConversation, getConversationController } from '../controller/chat.controller.js';
import { getConversation } from '../controller/chat.controller.js';

const chatRouter=express.Router()

chatRouter.post('/conversation',createConversationController)

chatRouter.get('/conversation',getConversationController)

export default chatRouter