import React from 'react';
import './featured.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogCard from '../../../common/blog-card/BlogCard';
import SideBar from '../../../common/side-bar/SideBar';
import ReactPaginate from 'react-paginate';

const Featured = ({data}) => {

    const subData = data.slice(0,4);

    const [currentItems, setCurrentItems] = useState([]);
    const [currentData, setCurrentData] = useState(data);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(currentData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(currentData.length / itemsPerPage));
        }, [itemOffset, itemsPerPage, currentData]);

    const handlePageClick =(event)=> {
        const newOffset = (event.selected * itemsPerPage) % currentData.length;
        setItemOffset(newOffset);
    };
    const filter =(type)=> {
        setCurrentData(data.filter(((item) => item.type === type)));
    };

  return (
    <div className="featured">
        <div className="left">
            {currentItems.map((item) => (
                <BlogCard key={item.id} {...item}/>
            ))}
            <ReactPaginate
            breakLabel='...'
            nextLabel='next'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel='previous'
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='prev'
            nextLinkClassName='next'
            activeClassName='active-num'
            />
        </div>
        <div className="right">
            <SideBar showAdvert={true} popularData={subData} filter={filter} showTags={true} showCategories={false}/>
        </div>
    </div>
  )
}

export default Featured;
