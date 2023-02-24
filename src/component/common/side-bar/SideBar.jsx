import React from 'react'
import './side-bar.scss';
import { Link } from 'react-router-dom';
import advertImg from './images/advert.jpg';
import { blogData } from '../../data/blogData';

const SideBar = ({author_image, author_name, author_role, showAuthor, showAdvert, showTags, popularData, filter, showCategories, showNewsletter}) => {

    const tags = ['food', 'cooking', 'heath tips', 'self improvement', 'recipes', 'technology', 'travel', 'faith', 'interior decorations']

    const filterSpan =(type)=> {
        let length = blogData.filter(((item) => item.type === type)).length;
        return length;  
      };

    const PostAuthor = () => {
        return (
          <div className="post-author">
            <div className="author-image">
              <img src={author_image} alt="author_image"/>
            </div>
              <h2>{author_name}</h2>
              <h3>{author_role}</h3>
              <div className="media-icons">
                  <li><i className="fa-brands fa-facebook-f"></i></li>
                  <li><i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-brands fa-github"></i></li>
                  <li><i className="fa-brands fa-behance"></i></li>
              </div>
            <div className="text">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aut maiores adipisci laudantium? Delectus mollitia quae non, 
                  nobis praesentium molestias nihil, perferendis eligendi 
                  veritatis dignissimos beatae. Veniam minus veritatis 
                  exercitationem fuga?
              </p>
            </div>
          </div>
        )
      };

    const PopularPost =()=> {
        return(
            <div className="popular-post">
                <h2>popular posts</h2>
                <div className="post-list">
                    {popularData.map((item)=> (
                        <Link to={`/blog/${item.id}`} className="link" key={item.id}>
                            <div className="post">
                                <div className="post-image">
                                    <img src={item.img} alt="post_image"/>
                                </div>
                                <div className="post-detail">
                                    <h3>{item.title}</h3>
                                    <h4>{item.date}</h4>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    const Advert =()=> {
        return (
            <div className="advert">
                <img src={advertImg} alt="advert_image"/>
                <h2>stream limoblaze's sunday in lagos now!!</h2>
            </div>
        )
    };

    const Categories =()=> {
        return(
            <div className="categories">
                <h2>categories</h2>
                <ul className="categories-list">
                    <li>
                    <h3 onClick={() => filter('life-style')}>life-style</h3>
                    <span>{filterSpan('life-style')}</span>
                    </li>
                    <li>
                    <h3 onClick={() => filter('food')}>food</h3>
                    <span>{filterSpan('food')}</span>
                    </li>
                    <li>
                    <h3 onClick={() => filter('technology')}>technology</h3>
                    <span>{filterSpan('technology')}</span>
                    </li>
                    <li>
                    <h3 onClick={() => filter('social-life')}>social-life</h3>
                    <span>{filterSpan('social-life')}</span>
                    </li>
                </ul>
            </div>
        )
    };

    const NewsLetter =()=> {
        return(
            <div className="news-letter">
                <h2>newsletter</h2>
                <div className="news-letter-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Accusamus ipsam delectus corrupti modi enim, id tenetur saepe, 
                        quam tempora alias quia quaerat dolor molestiae unde.
                    </p>
                    <form action="">
                        <div className="input">
                            <input type="text" placeholder='enter your email...'/>
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <button type="submit">subscribe</button>
                    </form>
                    <p>You can unsubscribe any time you want</p>
                </div>
            </div>
        );
    };

    const TagCloud = ()=> {
        return(
            <div className="tag-cloud">
                <h2>tag cloud</h2>
                <ul className="tag-list">
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
        );
    }
  return (
    <div className="side-bar">
      {showAuthor && <PostAuthor/>}
      <PopularPost/>
      {showAdvert && <Advert/>}
      {showCategories && <Categories/>}
      {showNewsletter && <NewsLetter/>}
      {showTags && <TagCloud/>}
    </div>
  )
}

export default SideBar;
