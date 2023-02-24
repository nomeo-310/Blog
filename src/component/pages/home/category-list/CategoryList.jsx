import React from 'react'
import './category-list.scss'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const category = [
        {category_name: 'food', categoryImg: require('../category-list/cat-post-1.jpg'), category_tag: 'Let the food be finished'}, 
        {category_name: 'life-style', categoryImg: require('../category-list/cat-post-2.jpg'), category_tag: 'Be a part of trending topics'},
        {category_name: 'technology', categoryImg: require('../category-list/cat-post-4.jpg'), category_tag: 'Be informed of the latest in tech'},
        {category_name: 'social-life', categoryImg: require('../category-list/cat-post-3.jpg'), category_tag: 'Enjoy your social life together'},
        ];
  return (
    <div className="category-list">
        {category.map((item, index) =>
            <div className="category-card" key={index}>
              <div className="category-image">
                  <img src={item.categoryImg} alt={item.category_name}/>
              </div>
              <div className="category-text">
                <Link className="link" to={`/${item.category_name}`}><h3>{item.category_name}</h3></Link>
                <h4>{item.category_tag}</h4>
              </div>
            </div>
        )}
    </div>
  )
}

export default CategoryList;
