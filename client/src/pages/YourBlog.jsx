import { Card } from '@/components/ui/card'
import React, { useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setBlog } from '@/redux/blogSlice'
import { Edit, Eye, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const YourBlog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { blog } = useSelector(store => store.blog)

  const getOwnBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/blog/get-own-blog`, { withCredentials: true })
      if (res.data.success) dispatch(setBlog(res.data.blogs))
    } catch (error) {
      console.log(error);
    }
  }

  const deleteBlog = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/blog/delete/${id}`, { withCredentials: true })
      if (res.data.success) {
        const updatedBlogData = blog.filter((blogItem) => blogItem?._id !== id);
        dispatch(setBlog(updatedBlogData))
        toast.success(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  }

  useEffect(() => {
    getOwnBlog()
  }, [])

  const formatDate = (index) => {
    const date = new Date(blog[index].createdAt)
    return date.toLocaleDateString("en-GB")
  }

  return (
    <div className='pb-10 pt-24 md:ml-[320px] min-h-screen bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto mt-8'>
        <Card className="w-full p-6 space-y-4 shadow-xl rounded-3xl dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Blogs</h1>
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-gray-700">
                <TableHead className="text-left text-lg">Title</TableHead>
                <TableHead className="text-left text-lg">Category</TableHead>
                <TableHead className="text-left text-lg">Status</TableHead>
                <TableHead className="text-left text-lg">Date</TableHead>
                <TableHead className="text-center text-lg">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blog?.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                  <TableCell className="flex items-center gap-4 py-4">
                    <img src={item.thumbnail} alt="" className='w-24 h-16 object-cover rounded-lg hidden md:block' />
                    <span className='font-medium text-gray-900 dark:text-white cursor-pointer hover:underline' 
                          onClick={() => navigate(`/blogs/${item._id}`)}>
                      {item.title}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300 font-medium">{item.category}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.isPublished ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {item.isPublished ? "Published" : "Not Published"}
                    </span>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400 font-medium">{formatDate(index)}</TableCell>
                  <TableCell className="flex justify-center gap-4 text-gray-600 dark:text-gray-300">
                    <Eye className='cursor-pointer hover:text-blue-500 transition-colors' onClick={() => navigate(`/blogs/${item._id}`)} />
                    <Edit className='cursor-pointer hover:text-yellow-500 transition-colors' onClick={() => navigate(`/dashboard/write-blog/${item._id}`)} />
                    <Trash2 className='cursor-pointer hover:text-red-500 transition-colors' onClick={() => deleteBlog(item._id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}

export default YourBlog
