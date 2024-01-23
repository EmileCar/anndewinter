import React from 'react';
import './Annchante.css';
import HeroBasic from '../../components/hero/HeroBasic';
import VideoBar from '../../components/videobar/VideoBar';

const Annchante = () => {
    return (
        <div className='page'>
            <HeroBasic page="annchante"/>

            <section className='section-general'>
                <h2 className="aboutme__section--title section__title">Annchanté</h2>
                <div className="section__title--border"></div>
                <div className="annchante__container">
                    <p>
                        Annchanté geeft aan elke gelegenheid, zoals een diner, huwelijk, receptie, kerst- en nieuwjaarsfeest, bedrijfsevent, verjaardagsfeest, jubileum, clubfeest..., een professionele en stijlvolle muzikale invulling.
                    </p>
                    <p>
                        Wilt u een intiem, sfeervol optreden of kiest u eerder voor een uitbundige feeststemming? Het kan allemaal!
                        <br/>De twee getalenteerde dames brengen voor elk wat wils en dit voor alle leeftijden.
                    </p>
                    <p>
                        De prachtige warme stem van Ann De Winter, in combinatie met de live gespeelde eigen arrangementen van Ann Lemaitre, zorgen ervoor dat dit duo een unieke sound heeft, die elke muziekliefhebber weet te bekoren!
                        <br/>Het wordt genieten van begin tot einde.
                    </p>
                    <p>
                        Met een uitgebreid en divers repertoire kan Annchanté elke muziekstijl aan.
                        <br/>Zowel Franse chansons, evergreens, Nederlandstalig werk, dansmuziek, golden oldies, de jaren '80/'90, popsongs, ballads, latin, disco, jazz standards,... staan op hun playlist.
                    </p>
                    <p>
                        Ann De Winter is een performer pur sang. Haar enthousiasme werkt dan ook aanstekelijk. <br/>Ann Lemaitre deinst er niet voor terug om aan gekende nummers een eigen schwung te geven.
                        <br/>Samen zorgen ze steeds voor een interactie met de toehoorders, waarbij een vleugje humor vaak niet ontbreekt en waarbij de genodigden naast luisteren ook gerust kunnen meezingen en een dansje kunnen placeren! <br/>Er wordt een eigen muziekinstallatie gebruikt, waarmee een optreden op gepast volume wordt gebracht.
                    </p>
                    <p>
                        Elk programma wordt samengesteld op basis van de wensen van de klant en er wordt ook steeds ingespeeld op de reacties van het publiek.
                    </p>
                    <p>
                        <strong>Annchanté kan echter ook geboekt worden voor een optreden/luisterconcert met volgende vaste programma's:</strong>
                    </p>
                    <ul style={{listStyle: "circle", textAlign: "left"}}>
                        <li><strong>Heerlijke melodieën van vroeger tot nu</strong>: liedjes met een tikkeltje nostalgie</li>
                        <li><strong>Jardin d'hiver</strong>: Franse chansons van Piaf tot Red</li>
                        <li><strong>Keep the home fires burning</strong>: programma ter nagedachtenis van WO1 en WO2</li>
                        <li><strong>Muzikale kerstwensen</strong>: liedjes om in de gepaste kerst- en eindejaarsstemming te komen</li>
                        <li><strong>Amor à volonté</strong>: de liefde en de romantiek staan centraal</li>
                    </ul>
                    <p>
                        Voor meer info en boekingen :
                        <div style={{padding: "3rem 0"}}>
                            <a className="button-general" href="?page=contact#contact" style={{display:"inline-block"}}><span>Contacteer ons</span></a>
                        </div>

                        <VideoBar url="https://www.youtube.com/embed/3r0pRGthLSo" background={false}/>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Annchante;
