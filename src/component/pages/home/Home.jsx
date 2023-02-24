import React from 'react'
import './home.scss'
import HomeImg from './home.jpg'
import { Link } from 'react-router-dom'
import CategoryList from './category-list/CategoryList'
import HomeFeatured from './featured/HomeFeatured'

const Home = ({blogData}) => {
  return (
    <div className='home'>
      <div className="top">
        <img src={HomeImg} alt="banner_image"/>
        <div className="theme">
            <h1>the crenshaws: how latte united a family.</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga asperiores sint magni maiores repellendus, dolore cupiditate quam eaque. Nulla unde quaerat eum velit blanditiis quod ab repellendus modi rerum nihil aliquid cupiditate quia, distinctio corporis fugit, adipisci exercitationem, deleniti totam.</p>
            <Link to="/blog/8" className="link">read more</Link>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <CategoryList/>
          <HomeFeatured data={blogData}/>
        </div>
      </div>
    </div>
  )
}

export default Home;
