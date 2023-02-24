import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import Home from '../pages/home/Home';
import SingleBlog from '../pages/single-blog/SingleBlog';
import MainBlog from '../pages/main-blog/MainBlog';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';

const PageRouter = ({blogData}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home blogData={blogData}/>}/>
            <Route path='/:id' element={<MainBlog blogData={blogData}/>}/>
            <Route path='/blog/:id' element={<SingleBlog blogData={blogData}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default PageRouter;
