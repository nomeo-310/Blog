import React from 'react'
import './category-header.scss'
import food from '../images/food.jpg'
import lifestyle from '../images/life-style.jpg';
import sociallife from '../images/social-life.jpg'
import tech from '../images/tech.jpg'

const CategoryHeader = ({val, title}) => {

    const imageSelector =(val) => {
        if (val === 'food') {
            let img = food;
            return img
        };
        if (val === 'life-style') {
            let img = lifestyle;
            return img
        };
        if (val === 'social-life') {
            let img = sociallife;
            return img
        };
        if (val === 'technology') {
            let img = tech;
            return img
        };
    };

    const textSelector =(val) => {
        if (val === 'food') {
            let text = 'Let the food be finished';
            return text
        };
        if (val === 'life-style') {
            let text = 'Be a part of trending topics';
            return text
        };
        if (val === 'social-life') {
            let text = 'Enjoy your social life together';
            return text
        };
        if (val === 'technology') {
            let text = 'Be informed of the latest in tech';
            return text
        };
    };

    const img = imageSelector(val);
    const subtitle = textSelector(val);
    
  return (
    <div className="category-header">
        <img src={img} alt={`${title} banner`}/>
        <div className="sub-title">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
        
    </div>
  )
};

export default CategoryHeader;
