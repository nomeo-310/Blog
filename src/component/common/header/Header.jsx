import React from 'react'
import './header.scss';

const Header = ({img, title}) => {
  return (
    <div className="header">
        <div className="header-image">
            <img src={img} alt="header_banner"/>
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Header;
