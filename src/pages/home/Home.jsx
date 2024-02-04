import React, { useEffect } from 'react';
import './Home.css';
import Hero from '../../components/hero/Hero';
import Quote from '../../components/quote/Quote';
import VideoBar from '../../components/videobar/VideoBar';
import AboutMe from '../../components/aboutme/Aboutme';
import Concepten from '../../components/concepten/Concepten';
import ImageSlider from '../../components/imageSlider/ImageSlider';
import Begeleiding from '../../components/begeleiding/Begeleiding';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='page'>
            <Hero>
                <h1 className='hero__title'>Ann De Winter</h1>
                <p className='hero__subtitle'>Stijlvolle live zangeres</p>
            </Hero>
            <Quote />
            <VideoBar url="https://www.youtube.com/embed/T5S422XwIv8" background={true}/>
            <AboutMe />
            <Concepten />
            <ImageSlider />
            <Begeleiding />
        </div>
    );
};

export default Home;
