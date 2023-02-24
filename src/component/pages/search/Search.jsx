import React from 'react'
import './search.scss';
import BlogCard from '../../common/blog-card/BlogCard';
import { blogData } from '../../data/blogData';
import { useState } from 'react';

const Search = ({handleClose}) => {
    const [inputText, setInputText] = useState('')

    const filterData =(val)=> {
        const blogInfo = blogData.filter(((item) => item.title.includes(val.toLowerCase())));
        return blogInfo;
    };

    const searchResult = filterData(inputText);
    const length = searchResult.length;
    console.log('search result', searchResult);
    console.log('length', length);

  return (
    <div className="search">
        <div className="top">
            <div className="search-section">
                <div className="search-input">
                    <input type="text" placeholder='Search posts by title...' value={inputText} onChange={(event) => setInputText(event.target.value)}/>
                </div>
                <div className="search-btn">
                    <i className="fa-solid fa-x" onClick={() => setInputText('')}></i>
                </div>
            </div>
            <div className="close-btn">
                <i className="fa-solid fa-x" onClick={handleClose}></i>
            </div>
        </div>
        <div className="bottom">
            <h2 className='results'>Search results: {length} posts</h2>
            <div className="bottom-content">
                {searchResult.map((result) => (
                    <BlogCard key={result.id} {...result} handleClose={handleClose}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Search;
