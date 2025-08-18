import express from 'express'

import dotenv from 'dotenv'
import connectDB from './database/db.js'
import userRouter from './routes/userRoute.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import blogRouter from './routes/blogRoute.js'
import commentRouter from './routes/commentRoute.js'
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

app.use("/api/blog",blogRouter)

app.use("/api/comment", commentRouter)

app.listen(PORT, ()=>{
    
    console.log(`✅ server is running ${PORT}`)
})

