import React from 'react';
import './Home.css';
import Hero from '../../components/hero/Hero';

const Home = () => {
    return (
        <div className='home__page'>
            <Hero>
                <h1 className='hero__title'>Ann De Winter</h1>
                <p className='hero__subtitle'>Stijlvolle live zangeres</p>
            </Hero>
            <section class="quote__section">
                <h2 class="hidden">Quote</h2>
                <p class="quote">“If I were not a physicist, I would probably be a musician."</p>
                <p class="quote__einstein">- Albert Einstein -</p>
            </section>
            <section class="video__section">
                <h2 class="hidden">Video</h2>
                <iframe class="iframe-index" width="570" height="320" src="https://www.youtube.com/embed/T5S422XwIv8"></iframe>
            </section>
            <section className="aboutme__section section-general">
                <h2 className="aboutme__section--title section__title">Over mij</h2>
                <p className="aboutme__section--text">
                    Een fysicus met een passie voor zang, dans en acteren, zo kan ik mezelf het beste omschrijven. Naast professionele lerares, ben ik een klassiek geschoolde lyrische sopraan, afgestudeerd aan de muziekacademie van Wetteren met grootste onderscheiding cum laude voor zang en lyrische kunst.
                    <span class="textLink"><a className="textLink" href="#">{"Lees meer>>"}</a></span>
                </p>
            </section>
            <section className="concepten__section  section-general">
                <h2 className="aboutme__section--title section__title">Waarvoor mij boeken?</h2>
                <div className="concepten__section--wrapper">
                    <div className='concept__container concept-concert'>
                        <div className='concept__container--cover'>
                            <span className="concept-title">Concert</span>
                        </div>
                    </div>
                    <div className='concept__container concept-feest'>
                        <div className='concept__container--cover'>
                            <span className="concept-title">Feest</span>
                        </div>
                    </div>
                    <div className='concept__container concept-uitvaart'>
                        <div className='concept__container--cover'>
                            <span className="concept-title">Uitvaart</span>
                        </div>
                    </div>
                    <div className='concept__container concept-huwelijk'>
                        <div className='concept__container--cover'>
                            <span className="concept-title">Huwelijk</span>
                        </div>
                    </div>
                </div>
            </section>
            <section class="image-slider__section">
                <h2 class="hidden">Afbeeldingen</h2>
                <div class="slide-images">
                    <img src="assets/img/imageSlider/ADW_performing_2.JPG" class="slide-image imageSlider-active"/>
                    <img src="assets/img/image slider images/ADW_performing_3.JPG" class="slide-image"/>
                    <img src="assets/img/image slider images/ADW_posing_mirror_edited copy.jpg" class="slide-image"/>
                    <img src="assets/img/image slider images/ann009.jpg" class="slide-image"/>
                    <img src="assets/img/image slider images/f23_l.JPG" class="slide-image"/> 
                </div>
            </section>
        </div>
    );
};

export default Home;
