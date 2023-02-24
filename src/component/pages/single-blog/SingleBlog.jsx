import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './single-blog.scss';
import CategoryHeader from '../blog-categories/category-header/CategoryHeader';
import SideBar from '../../common/side-bar/SideBar';
import ChatSection from './chat section/ChatSection';
import CommentForm from './comment-form/CommentForm';

const SingleBlog = ({blogData}) => {

  const {id} = useParams();
  const dataLength = blogData.length;

  const increaseNumber =(num)=> {
    if (num === dataLength) {
      let value = 1;
      return value;
    } else {
      let value = num + 1;
      return value;
    }
  };

  const decreaseNumber =(num)=> {
    if (num === 1) {
      let value = dataLength
      return value;
    } else {
      let value = num - 1;
      return value;
    }
  };

  const filterData =(val)=> {
    const blogInfo = blogData.filter(((item) => item.id === val));
    return blogInfo;
  };

  const data = filterData(+id);

  const previousBlogData = filterData(decreaseNumber(+id));
  const nextBlogData = filterData(increaseNumber(+id));
  const type = data[0].type


  const filterBlogData =(val)=> {
    const blogInfo = blogData.filter(((item) => item.type === val));
    return blogInfo;
  };

  const info = filterBlogData(type);
  const recent = info.slice(0,4);
  const commentLength = data[0].comments.length;
  
  return (
    <div className="single-blog">
      <CategoryHeader val={type} title={type}/>
      <div className="container">
        <div className="blog-area">
          <div className="blog-img">
            <img src={data[0].img} alt={data[0].title}/>
          </div>
          <div className="blog-txt">
            <div className="blog-txt-top">
              <div className="blog-details">
                <div className="tag">
                    {data[0].tag.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </div>
                <div className="item">
                    <h3>{data[0].author}</h3>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="item">
                    <h3>{data[0].date}</h3>
                    <i className="fa-solid fa-calendar"></i>
                </div>
                <div className="item">
                    <h3>{data[0].views} views</h3>
                    <i className="fa-solid fa-eye"></i>
                </div>
                <div className="item">
                    <h3>{data[0].comment} comments</h3>
                    <i className="fa-solid fa-message"></i>
                </div>
              </div>
              <div className="blog-words">
                <h2>{data[0].title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nisi amet ullam placeat minima, veritatis error nesciunt 
                  cumque doloremque dolorum officia. Quas et quaerat, 
                  a temporibus impedit iure autem at aut.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Mollitia in alias saepe est ratione blanditiis autem deserunt, 
                  corporis illum quisquam omnis veniam tempora minus aspernatur 
                  veritatis cumque, perspiciatis earum quia culpa! Distinctio 
                  adipisci omnis suscipit vitae provident nam quisquam assumenda 
                  soluta, beatae architecto est quos.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Eveniet reprehenderit pariatur sint voluptate, a cupiditate 
                  quasi fuga quaerat, perferendis maxime, fugit odit soluta culpa alias! 
                  Aliquid labore, ea reprehenderit nostrum excepturi culpa 
                  omnis dolorum nam ex doloribus repellat at asperiores vitae. 
                  Aliquam fugiat nulla, corporis, nihil commodi eaque doloremque 
                  ratione minima, consequuntur fuga dolor distinctio?
                </p>
              </div>
            </div>
            <div className="blog-txt-bottom">
              <p className='blog-txt-quote'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Harum suscipit quam assumenda, voluptas sit nam omnis unde 
                ipsum reprehenderit, expedita deserunt tempora atque, nihil nemo rerum 
                accusamus autem cupiditate qui accusantium temporibus aut impedit. 
                Voluptates, eaque quis? Repellat, praesentium eum?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sunt repudiandae laborum, quam cupiditate fugit soluta 
                molestiae laboriosam veniam quisquam, est quo nobis iure temporibus. 
                Labore libero modi magni voluptates nam error voluptatibus recusandae 
                eius repellat, reprehenderit quaerat, excepturi corrupti nulla quibusdam 
                enim ducimus eveniet aspernatur deleniti et ullam provident facere.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nostrum, possimus officia. Accusantium ex illum nulla, 
                consequuntur accusamus, facilis ipsum est nobis illo autem ea 
                laudantium adipisci error ut neque dignissimos consequatur 
                possimus quas nam nihil reprehenderit voluptatibus minima. 
                Debitis amet quisquam fugiat facilis odit quaerat hic ullam, 
                ipsam explicabo quos.
              </p>
            </div>
          </div>
          <div className="blog-nav">
            <div className="prev-blog">
              <div className="item">
                <Link to={`/blog/${previousBlogData[0].id}`} className="link">
                  <img src={previousBlogData[0].img} alt="post_image"/>
                </Link>
                <div className="detail">
                  <h4>previous post</h4>
                  <h3>{previousBlogData[0].title}</h3>
                </div>
              </div>
            </div>
            <div className="next-blog">
              <div className="item">
                <div className="detail">
                  <h4>next post</h4>
                  <h3>{nextBlogData[0].title}</h3>
                </div>
                <Link to={`/blog/${nextBlogData[0].id}`} className="link">
                  <img src={nextBlogData[0].img} alt="post_image"/>
                </Link>
              </div>
            </div>
          </div>
          <div className="chat-corner">
            <h2>{commentLength} comments</h2>
            {data[0].comments.map((commentInfo, index) => (<ChatSection key={index} {...commentInfo}/>))}
          </div>
          <CommentForm/>
        </div>
        <div className="blog-side-bar">
          <SideBar 
          popularData={recent} 
          showAuthor={true} 
          showTags={true} 
          showAdvert={true} 
          author_image={data[0].author_img}
          author_name={data[0].author}/>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog;
