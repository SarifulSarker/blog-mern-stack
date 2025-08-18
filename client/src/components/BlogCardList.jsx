import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const BlogCardList = ({ blog }) => {
    const navigate = useNavigate()
    const { user } = useSelector((store) => store.auth)

    const date = new Date(blog.createdAt)
    const formattedDate = date.toLocaleDateString("en-GB")

    const handleReadMore = () => {
        if (!user) {
            navigate("/login")
        } else {
            navigate(`/blogs/${blog._id}`)
        }
    }

    return (
        <div className="group bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row md:gap-8 p-6 rounded-2xl mt-6 shadow-lg border transition-all hover:shadow-2xl hover:-translate-y-1 duration-300">
            
            {/* Thumbnail */}
            <div className="relative overflow-hidden rounded-xl md:w-[320px]">
                <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="rounded-xl object-cover w-full h-[200px] md:h-full transform group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                <p className="absolute bottom-3 left-3 text-xs text-white bg-black/50 px-3 py-1 rounded-full">
                    {formattedDate}
                </p>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between mt-4 md:mt-0">
                <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        By <span className="font-medium text-gray-800 dark:text-gray-200">{blog.author.firstName}</span> 
                        {" · "} {blog.category}
                    </p>
                    <h2 className="text-2xl font-bold mt-2 group-hover:text-red-500 transition-colors">
                        {blog.title}
                    </h2>
                    <h3 className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                        {blog.subtitle}
                    </h3>
                </div>

                <Button
                    onClick={handleReadMore}
                    className="mt-5 w-fit px-6 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all"
                >
                    Read More
                </Button>
            </div>
        </div>
    )
}

export default BlogCardList
