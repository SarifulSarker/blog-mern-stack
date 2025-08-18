import React from 'react'
import heroImg from "../assets/blog2.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24">
        
        {/* Text Section */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">Latest Tech</span> & Web Trends
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 opacity-90 mb-8">
            Stay ahead with in-depth articles, tutorials, and insights on web development, digital marketing, and tech innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to={"/dashboard/write-blog"}>
              <Button className="px-6 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Get Started
              </Button>
            </Link>
            <Link to={"/about"}>
              <Button
                variant="outline"
                className="px-6 py-3 text-lg rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-red-500 transition-all"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative mt-12 md:mt-0 flex justify-center">
          <div className="absolute -z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-red-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <img
            src={heroImg}
            alt="Hero"
            className="w-[300px] md:w-[500px] drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
