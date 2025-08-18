import express from 'express'
import { isAuthenticated } from '../middleware/isAuthenticated.js'
import { createBlog, deleteBlog, dislikeBlog, getMyTotalBlogLikes, getOwnBlogs, getPublishedBlog, likeBlog, togglePublishBlog, updateBlog } from '../controllers/blogControllers.js'
import { singleUpload } from '../middleware/multer.js'



const blogRouter = express.Router()

blogRouter.post('/', isAuthenticated, createBlog)
blogRouter.put('/:blogId', isAuthenticated,singleUpload, updateBlog)
blogRouter.delete("/delete/:id",isAuthenticated,deleteBlog)
blogRouter.get('/get-own-blog', isAuthenticated, getOwnBlogs)
blogRouter.get('/my-blogs/like', isAuthenticated, getMyTotalBlogLikes)

blogRouter.get('/:id/like', isAuthenticated, likeBlog)

blogRouter.get('/:id/dislike', isAuthenticated, dislikeBlog)



blogRouter.get('/get-published-blogs', isAuthenticated, getPublishedBlog)

blogRouter.patch('/:blogId', togglePublishBlog)

export default blogRouter