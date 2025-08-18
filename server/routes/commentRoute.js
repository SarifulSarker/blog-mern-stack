import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js';
import { createComment, deleteComment, editComment, getAllCommentsOnMyBlogs, getCommentsOfPost, likeComment } from '../controllers/commentControllers.js';

const commentRouter = express.Router()
commentRouter.post('/:id/create', isAuthenticated, createComment);
commentRouter.delete("/:id/delete", isAuthenticated, deleteComment);
commentRouter.put("/:id/edit", isAuthenticated, editComment);
commentRouter.route("/:id/comment/all").get(getCommentsOfPost);
commentRouter.get('/:id/like', isAuthenticated, likeComment);
commentRouter.get('/my-blogs/comments', isAuthenticated, getAllCommentsOnMyBlogs)


export default commentRouter