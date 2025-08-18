import BlogCard from '@/components/BlogCard';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchList = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    const { blog } = useSelector(store => store.blog)

    console.log(blog);


   const filteredBlogs = blog.filter((b) => {
    const title = b.title?.toLowerCase() || '';
    const subtitle = b.subtitle?.toLowerCase() || '';
    const category = b.category?.toLowerCase() || '';
    const q = query?.toLowerCase() || '';
    return title.includes(q) || subtitle.includes(q) || category.includes(q);
});
   
 useEffect(()=>{
    window.scrollTo(0,0)
}, [location.search]);

    return (
        <div className='pt-32'>
            <div className='max-w-6xl mx-auto'>
                <h2 className='mb-5'>Search Results for: "{query}"</h2>
                {/* Here you can fetch data or display filtered results based on the query */}
                <div className='grid grid-cols-3 gap-7 my-10'>
                    {
                        filteredBlogs.map((blog, index) => {
                            return <BlogCard  blog={blog} />
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default SearchList