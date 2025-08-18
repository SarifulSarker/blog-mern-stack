import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCardList from './BlogCardList'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useNavigate } from 'react-router-dom'
import { setBlog } from '@/redux/blogSlice'
import axios from 'axios'

const tags = [
  { category: "Blogging" },
  { category: "Web Development" },
  { category: "Digital Marketing" },
  { category: "Cooking" },
  { category: "Photography" },
  { category: "Sports" },
]

const RecentBlog = () => {
  const { blog } = useSelector(store => store.blog)
  const [category, setCategory] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const getAllPublsihedBlogs = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/blog/get-published-blogs`, { withCredentials: true })
        if (res.data.success) {
          dispatch(setBlog(res.data.blogs))
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAllPublsihedBlogs()
  }, [dispatch])

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Recent Blogs
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Stay updated with the latest articles & insights
        </p>
        <div className="mt-4 w-20 h-1 bg-indigo-500 rounded-full mx-auto"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        {/* Left - Blogs */}
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6">
            {
              blog?.slice(0, 4)?.map((item, index) => (
                <BlogCardList key={index} blog={item} />
              ))
            }
          </div>
        </div>

        {/* Right - Sidebar */}
        <aside className="bg-white dark:bg-gray-800 shadow-md rounded-2xl w-full md:w-[350px] p-6 border border-gray-100 dark:border-gray-700">
          {/* Popular Categories */}
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Popular Categories</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((item, index) => (
              <Badge
                key={index}
                onClick={() => navigate(`/search?q=${item.category}`)}
                className="cursor-pointer text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-indigo-500 hover:text-white transition-colors"
              >
                {item.category}
              </Badge>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-2xl mb-8 border border-indigo-100 dark:border-indigo-700">
            <h3 className="text-lg font-semibold mb-2 text-indigo-900 dark:text-indigo-100">Subscribe to Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get the latest posts and updates straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 rounded-md"
              />
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Suggested Blogs */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">Suggested Blogs</h2>
            <ul className="space-y-3">
              {[
                '10 Tips to Master React',
                'Understanding Tailwind CSS',
                'Improve SEO in 2024',
              ].map((title, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 hover:underline cursor-pointer transition-colors"
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default RecentBlog
