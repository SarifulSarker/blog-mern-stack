import express from 'express'

import dotenv from 'dotenv'
import connectDB from './database/db.js'
import userRouter from './routes/userRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express()


connectDB()
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173', // your frontend port
  credentials: true
}));
app.use("/api/user",userRouter)



app.listen(PORT, ()=>{
    
    console.log(`✅ server is running ${PORT}`)
})

