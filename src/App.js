import React from 'react';
import './App.scss';
import './css/all.min.css';
import './css/brands.css';
import './css/brands.min.css';
import './css/fontawesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import Nav from './component/common/nav/Nav';
import Footer from './component/common/footer/Footer';
import PageRouter from './component/page-router/PageRouter';
import { blogData } from './component/data/blogData';
import ScrollToTop from './component/scroll/ScrollToTop';

const App =() => {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <ScrollToTop/>
        <PageRouter blogData={blogData}/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
