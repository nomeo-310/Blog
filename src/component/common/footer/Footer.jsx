import React from 'react';
import './footer.scss';
import paymentLogo from './payment-logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals </span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>about</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe laudantium et voluptas praesentium exercitationem minus voluptates deserunt, deleniti, dignissimos iste ipsam recusandae facilis. Voluptatem temporibus cum laborum nemo illum.</span>
        </div>
        <div className="item">
          <h1>contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe laudantium et voluptas praesentium exercitationem minus voluptates deserunt, deleniti, dignissimos iste ipsam recusandae facilis. Voluptatem temporibus cum laborum nemo illum.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">nomeo stores</span><span className="copy-right">copyright 2023</span>
        </div>
        <div className="right">
          <img src={paymentLogo} alt="payment_logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
