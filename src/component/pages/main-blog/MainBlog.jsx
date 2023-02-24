import React from 'react'
import './main-blog.scss'
import { useParams } from 'react-router';
import CategoryHeader from '../blog-categories/category-header/CategoryHeader';
import Featured from '../home/featured/Featured';


const MainBlog = ({blogData}) => {
    const {id} = useParams();
    let Id = {id}
    const val = Id.id;
    console.log(val)

    const filterData =(val)=> {
        const blogInfo = blogData.filter(((item) => item.type === val));
        return blogInfo;
    };

    const data = filterData(id);
    console.log(data);
    console.log(id)

  return (
    <div className="main-blog">
      <CategoryHeader val={val} title={id}/>
      <div className="container">
        <Featured data={data}/>
      </div>
    </div>
  )
}

export default MainBlog;
