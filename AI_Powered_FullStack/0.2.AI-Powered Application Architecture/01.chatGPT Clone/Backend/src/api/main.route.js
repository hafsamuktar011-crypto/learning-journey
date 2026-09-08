import express from 'express'
import chatRouter from "./Chat/Router/chat.route.js";

const mainRoute=express.Router()

mainRoute.use('/chat',chatRouter)

export default mainRoute