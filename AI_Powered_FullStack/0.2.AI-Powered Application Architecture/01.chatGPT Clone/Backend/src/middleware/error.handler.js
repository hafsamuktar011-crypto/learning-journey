export const errorHander=(err,req,res,next)=>{
    
    return res.status(500 || err.status).json({
        status:false,
        message:"something went wrong  || err.message"
    })
}