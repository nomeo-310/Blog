import React from 'react';
import './nav.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Search from '../../pages/search/Search';

const Nav = () => {
    const [navClass, setNavClass] = useState('nav');
    const [showSearch, setShowSearch] = useState(false);

    const handleClose =()=> {
      setShowSearch(false)
    };

    const navItems = [
        {name: 'home', path: '/'}, 
        {name: 'about', path: '/about'}, 
        {name: 'contact', path: '/contact'}
        ];

    const navbarFixed =()=> {
        if (window.scrollY >= 65) {
            setNavClass('nav fixed')
        } else {
            setNavClass('nav');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', navbarFixed)
    }, []);

    const [theme, setTheme] = useState('light');
    const [mode, setMode] = useState('dark-mode');

    const toggleTheme =()=> {
        if (theme === 'light') {
           setTheme('dark');
           setMode('dark-mode');
        } else {
            setTheme('light');
            setMode('light-mode');
        }
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

  return (
    <div className={navClass}>
      <div className="left">
        <div className="brand-name">
            <Link to="/" className="link">nomeo</Link>
        </div>
      </div>
      <div className="center">
        {navItems.map((navItem, index) => 
            <div className="item" key={index}>
                <Link to={navItem.path} className="link">{navItem.name}</Link>
            </div>
        )}
      </div>
      <div className="right">
        <div className="item">
            <Link to="/register" className="link"><i className="fa-solid fa-user"></i></Link>
        </div>
        <div className="item">
            <i className="fa-solid fa-search" onClick={() => setShowSearch(!showSearch)}></i>
        </div>
      </div>
      {showSearch && <Search handleClose={handleClose}/>}
      <div className="mode-toggler" onClick={toggleTheme}>
        <div className={mode}>
        </div>
      </div>
      <div className="mobile-menu">
        <div className="top">
          <Link to="/" className="link">nomeo</Link>
          <div className="middle">
            <div className="item">
              <Link to="/register" className="link"><i className="fa-solid fa-user"></i></Link>
            </div>
            <div className="item">
              <i className="fa-solid fa-search" onClick={() => setShowSearch(!showSearch)}></i>
            </div>
          </div>
        </div>
        <div className="menu">
          {navItems.map((navItem, index) => 
              <div className="item" key={index}>
                  <Link to={navItem.path} className="link">{navItem.name}</Link>
              </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Nav;
