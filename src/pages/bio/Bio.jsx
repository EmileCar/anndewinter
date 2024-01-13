import React, { useState } from 'react';
import HeroBasic from '../../components/hero/HeroBasic';
import image1 from '../../assets/images/pages/bio/foto3.jpg';
import image2 from '../../assets/images/pages/bio/adw-rood-kleed.jpg';
import './Bio.css';

const Bio = () => {
    const [productions, setProductions] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <div className='page'>
            <HeroBasic page="bio"/>
            <div className='section-general'>
                <h2 className="aboutme__section--title section__title">Bio</h2>
                <div class="section__title--border"></div>
                <div className="aboutme__section--wrapper">
                    <img src={image1} height="300" style={{ gridArea: 'image-left', marginRight: '2rem', marginBottom: '1rem' }} className='elevation' />
                    <img src={image2} alt="Ann De Winter Rood Kleed" width="240" height="360" style={{ gridArea: 'image-right', marginLeft: '2rem', marginBottom: '2rem' }} className='elevation' />
                    <div style={{ gridArea: 'al1' }}>
                        <p>Een fysicus met een passie voor zang en dans, zo is Ann het best te omschrijven.</p>
                        <p>Ann is een veel gevraagde live zangeres en soliste met een warme sopraan stemkleur.</p>
                        <p>Door haar veelzijdigheid kan ze moeiteloos verschillende zangstijlen aan in het brede repertoire. De lichtere genres van hedendaagse pop, musical en zelfs swing, jazz en Franse chansons zijn haar niet vreemd en worden door het publiek meer en meer gesmaakt.</p>
                        <p>Ze is niet alleen een uitstekende zangeres maar ook een echte performer pur sang.</p>
                        <p>Zingen, dansen, acteren... het is haar tweede natuur. Ze straalt daarenboven klasse en stijl uit.</p><p>Sinds 2019 is Ann leadzangeres bij 3 Voci.</p>
                    </div>
                    <div style={{ gridArea: 'al2' }}>
                        <p>Met aria's uit diverse opera's, operetteliederen en romantische liederen is het voor Ann allemaal begonnen. </p>
                        <p>Ze is een klassiek geschoolde lyrische sopraan, afgestudeerd aan de muziekacademie van Wetteren met grootste onderscheiding cum laude voor zang en lyrische kunst. Zangtechnisch laat ze zich coachen door Hilde Coppé. In 2006 behaalde ze een finaleplaats in het Nederlandse muziekprogramma "Una voce particolare”. </p>
                        <p>Als muzikale duizendpoot verlegt ze echter graag, steeds opnieuw, haar grenzen. Haar stem is haar veelzijdig instrument met een groot bereik en volume. Ann vertolkte hoofdrollen in verschillende muzikale producties bij diverse gezelschappen.</p>
                        <p>Als soliste en concertzangeres was Ann reeds te gast op uiteenlopende gelegenheden, zowel op klein als groot podium. Ze werd daarbij begeleid door orkest, harmonie of bigband. Maar ook op een privéfeest verrast ze keer op keer met haar stem en performance.</p>
                    </div>
                </div>
            </div>
            <div className='section-general pastproductions__section'>
                <h2 className="aboutme__section--title section__title">Musical en operetteproducties</h2>
                <div class="section__title--border"></div>
                <div className="dl-productions">
                    { loading ? <p>Aan het laden</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Bio;
