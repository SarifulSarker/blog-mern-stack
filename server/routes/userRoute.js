import express from 'express'
import {  getAllUsers, login, logout, register, updateProfile } from '../controllers/userControllers.js'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { singleUpload } from '../middleware/multer.js'

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.get('/logout', logout)

//for profile

userRouter.put('/profile/update',isAuthenticated,singleUpload, updateProfile)
userRouter.get('/all-users', getAllUsers);

export default userRouter
