import React from 'react';
import './Hero.css';

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
