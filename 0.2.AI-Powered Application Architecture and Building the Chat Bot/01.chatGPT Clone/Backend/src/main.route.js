import express from 'express'

const mainRouter=express.Router()

mainRouter.use('/chat',(req,res)=>{
    res.send('')
})

export default mainRouter()