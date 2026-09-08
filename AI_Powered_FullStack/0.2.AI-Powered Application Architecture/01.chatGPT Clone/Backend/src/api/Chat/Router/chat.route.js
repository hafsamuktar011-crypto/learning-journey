import express from 'express'


import { createConversation } from '../controller/chat.controller.js';
import { getConversation } from '../controller/chat.controller.js';

const chatRouter=express.Router()

chatRouter.post('/conversation',createConversation)

chatRouter.get('/conversation',getConversation)

export default chatRouter