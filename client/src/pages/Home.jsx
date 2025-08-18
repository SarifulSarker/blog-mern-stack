import RecentBlog from '@/components/RecentBlog.jsx'
import Hero from '../components/Hero.jsx'
import React from 'react'
import PopulerAuthors from '@/components/PopulerAuthors.jsx'

const Home = () => {
  return (
    <div className='pt-15'>
      <Hero/>
      <RecentBlog/>
      <PopulerAuthors/>
    </div>
  )
}

export default Home