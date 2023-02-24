import React from 'react';
import './contact.scss';
import banner from './banner.jpg';
import sideImage from  './side-image.jpg';
import Header from '../../common/header/Header';

const Contact = () => {
  return (
    <div className="contact">
      <Header img={banner} title='contact us'/>
      <div className="contact-container">
        <div className="top">
          <div className="left">
            <img src={sideImage} alt="side_image"/>
          </div>
          <div className="right">
            <div className="text">
              <h2>say hello. don't be shy!</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Delectus voluptatem dicta nam voluptates accusantium optio, 
                sequi hic unde eveniet! Perferendis rerum obcaecati dignissimos, 
                eveniet voluptatibus quas rem delectus excepturi placeat.</p>
            </div>
            <div className="text-input">
              <form action="">
                <div className="input">
                  <input type="text" name="" placeholder="Your Name"/>
                  <input type="email" name="" placeholder="Your email"/>
                </div>
                <div className="text-area">
                  <textarea name="" placeholder="Your Message"></textarea>
                </div>
                <button type="submit">send</button>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div className="item">
              <h3>store location:</h3>
              <div className="content">
                <p>23b, Adekusi Sonubi Crescent, Lekki Phase 3, Lagos Island, Lagos</p>
              </div>
            </div>
            <div className="item">
              <h3>phone:</h3>
              <div className="content">
                <p>+234-703-7575-894</p>
                <p>+234-708-922-7464</p>
              </div>
            </div>
            <div className="item">
              <h3>office location:</h3>
              <div className="content">
                <p>35, Ademola Tokunbo Street, Lekki Phase 2, Lagos Island, Lagos</p>
              </div>
            </div>
            <div className="item">
              <h3>work hours:</h3>
              <div className="content">
                <p>7:30am - 9:30pm Daily</p>
                <p>11:00am - 10:00pm Saturday</p>
              </div>
            </div>
            <div className="item">
              <h3>email:</h3>
              <div className="content">
                <p>nomeostores@gmail.com</p>
                <p>nomeostoreshr@gmail.com</p>
              </div>

            </div>
            <div className="item">
              <h3>social media:</h3>
              <div className="content media">
                <li><i className="fa-brands fa-facebook"></i>nomeostores,</li>
                <li><i className="fa-brands fa-instagram"></i>@nomeostores,</li>
                <li><i className="fa-brands fa-twitter"></i>@nomeostores</li>
                <p></p>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>by subscribing to our newsletter you can get 30% off</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Deserunt aliquid numquam ipsa iure debitis ut sunt, libero 
              perspiciatis temporibus mollitia atque rem. Veritatis ad repellat 
              eligendi perspiciatis explicabo, commodi repudiandae sit omnis 
              officiis ex cum?</p>
            <form action="">
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Your email"/>
              <button type="submit">send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
