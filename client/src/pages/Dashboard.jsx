import Sidebar from '../components/Sidebar.jsx'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
      const { user } = useSelector(store => store.auth)
      const navigate = useNavigate();
    useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
    return (
        <div className=' flex'>
            <Sidebar />
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard