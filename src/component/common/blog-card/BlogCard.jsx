import React from 'react';
import './blog-card.scss';
import { Link } from 'react-router-dom';

const BlogCard = ({id, img, title, tag, date, views, comment, author, handleClose}) => {
  return (
    <div className="blog-card">
      <div className="blog-details">
        <div className="tag">
            {tag.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
        <div className="item">
            <h3>{author}</h3>
            <i className="fa-solid fa-user"></i>
        </div>
        <div className="item">
            <h3>{date}</h3>
            <i className="fa-solid fa-calendar"></i>
        </div>
        <div className="item">
            <h3>{views} views</h3>
            <i className="fa-solid fa-eye"></i>
        </div>
        <div className="item">
            <h3>{comment} comments</h3>
            <i className="fa-solid fa-message"></i>
        </div>
      </div>
      <div className="blog">
        <div className="blog-image">
            <img src={img} alt="blog_image"/>
        </div>
        <h2>{title}</h2>
        <div className="blog-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aspernatur sed dolorem, atque iusto ex doloribus consequuntur nesciunt expedita quas corrupti. Beatae, obcaecati! Quos vitae temporibus ex, dignissimos placeat eius sapiente quibusdam odit impedit maiores error perspiciatis sit unde libero.</p>
            <Link to={`/blog/${id}`} className="link" onClick={handleClose}>read more</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;
