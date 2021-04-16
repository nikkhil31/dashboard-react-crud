import express from 'express'
const app = express.Router()

app.get('/',(req,res)=>{
    res.send('hii')
})



export default app
