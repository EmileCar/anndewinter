import React from 'react';
import './Hero.css';
import heroImage from '../../assets/images/pages/home/heroImage.jpg';

const Hero = ({children}) => {
    return (
        <div className="hero__section">
            <div className='hero__image' />
            <div className='hero__content'>
                {children}
            </div>
        </div>
    );
};

export default Hero;
