import React from 'react';
import './about.scss';
import Header from '../../common/header/Header'
import banner from './banner.jpg';
import team_1 from './team-1.jpg';
import team_2 from './team-2.jpg';
import team_3 from './team-3.jpg';

const About = () => {
  return (
    <div className="about">
      <Header img={banner} title='about us'/>
      <div className="about-container">
        <div className="top">
          <div className="row">
            <h2>about us</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
              vitae dicta sunt explicabo. Nemo enim dipisci velit, sed quia non numquam eius modi tempora 
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima magni 
              dolores eos qui ratione voluptatem sequi nesciunt.</p> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ex fuga dolores ipsum 
              aliquam sequi error modi, atque quasi itaque voluptatum? Dolorem quod, sint 
              similique voluptatem a eveniet in odio eum voluptas iste, tenetur non esse quae vel 
              obcaecati autem?</p>
          </div>
          <div className="row">
            <div className="col">
              <h2>what we do</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo. Nemo enim dipisci velit, sed quia non numquam eius modi tempora incidunt 
                ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima magni dolores eos qui 
                ratione voluptatem sequi nesciunt.</p> 
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident excepturi hic quidem delectus 
                dignissimos! Expedita assumenda architecto quod iure pariatur, aliquid mollitia? Non earum 
                eius eaque animi asperiores similique cumque esse voluptatum quia! Praesentium ea dolore, odit 
                quisquam nesciunt culpa?</p>
            </div>
            <div className="col">
              <h2>our approach</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                dicta sunt explicabo. Nemo enim dipisci velit, sed quia non numquam eius modi tempora incidunt 
                ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima magni dolores eos qui 
                ratione voluptatem sequi nesciunt.</p> 
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident excepturi hic quidem delectus 
                dignissimos! Expedita assumenda architecto quod iure pariatur, aliquid mollitia? Non earum 
                eius eaque animi asperiores similique cumque esse voluptatum quia! Praesentium ea dolore, odit 
                quisquam nesciunt culpa?</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <h2>our team</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore illo error quasi amet 
            repudiandae harum fugit sunt architecto quidem quia, ratione explicabo ducimus perspiciatis 
            hic veniam totam cupiditate temporibus beatae, sit provident. Modi, nihil assumenda.</p>
          <div className="team-list">
            <div className="team-member">
              <div className="member-image">
                <img src={team_1} alt="john_doe"/>
              </div>
              <div className="member-detail">
                <h3>sarah dawn</h3>
                <h4>content creator</h4>
                <div className="social-media">
                  <li><i className="fa-brands fa-instagram"></i></li>
                  <li><i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-brands fa-dribbble"></i></li>
                  <li><i className="fa-brands fa-behance"></i></li>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team_2} alt="john_doe"/>
              </div>
              <div className="member-detail">
                <h3>jim dawn</h3>
                <h4>ui / ux designer</h4>
                <div className="social-media">
                  <li><i className="fa-brands fa-instagram"></i></li>
                  <li><i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-brands fa-dribbble"></i></li>
                  <li><i className="fa-brands fa-behance"></i></li>
                </div>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src={team_3} alt="john_doe"/>
              </div>
              <div className="member-detail">
                <h3>john dawn</h3>
                <h4>chief designer</h4>
                <div className="social-media">
                  <li><i className="fa-brands fa-instagram"></i></li>
                  <li><i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-brands fa-dribbble"></i></li>
                  <li><i className="fa-brands fa-behance"></i></li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
