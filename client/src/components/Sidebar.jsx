import { ChartColumnBig, FolderPlus, SquareUser } from 'lucide-react'
import { LiaCommentSolid } from "react-icons/lia";
import { FaRegEdit } from 'react-icons/fa';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='hidden md:block fixed top-0 left-0 h-screen w-[280px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 pt-20 space-y-4 shadow-lg z-20'>
      <div className='flex flex-col gap-3'>
        <NavLink
          to='/dashboard/profile'
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl font-semibold text-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800 
            ${isActive ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`
          }
        >
          <SquareUser size={24} />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to='/dashboard/your-blog'
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl font-semibold text-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800 
            ${isActive ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`
          }
        >
          <ChartColumnBig size={24} />
          <span>Your Blogs</span>
        </NavLink>

        <NavLink
          to='/dashboard/comments'
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl font-semibold text-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800 
            ${isActive ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`
          }
        >
          <LiaCommentSolid size={22} />
          <span>Comments</span>
        </NavLink>

        <NavLink
          to='/dashboard/write-blog'
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-xl font-semibold text-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800 
            ${isActive ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`
          }
        >
          <FaRegEdit size={20} />
          <span>Create Blog</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar;
