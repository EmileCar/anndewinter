import React from 'react';
import HeroBasic from '../../components/hero/HeroBasic';

const Annchante = () => {
    return (
        <div className='page'>
            <HeroBasic page="annchante"/>

            <section className='section-general'>
                <h2 className="aboutme__section--title section__title">Annchanté</h2>
                <div className="section__title--border"></div>
                <div className="section--annchante">
                    <p>Annchanté geeft aan elke gelegenheid, zoals een diner, huwelijk, receptie, kerst- en nieuwjaarsfeest, bedrijfsevent, verjaardagsfeest, jubileum, clubfeest..., een professionele en stijlvolle muzikale invulling.
                        Wilt u een intiem, sfeervol optreden of kiest u eerder voor een uitbundige feeststemming? Het kan allemaal!
                        De twee getalenteerde dames brengen voor elk wat wils en dit voor alle leeftijden.
                        De prachtige warme stem van Ann De Winter, in combinatie met de live gespeelde eigen arrangementen van Ann Lemaitre, zorgen ervoor dat dit duo een unieke sound heeft, die elke muziekliefhebber weet te bekoren!
                        Het wordt genieten van begin tot einde.
                        Met een uitgebreid en divers repertoire kan Annchanté elke muziekstijl aan.
                        Zowel Franse chansons, evergreens, Nederlandstalig werk, dansmuziek, golden oldies, de jaren '80/'90, popsongs, ballads, latin, disco, jazz standards,... staan op hun playlist.
                        Ann De Winter is een performer pur sang.  Haar enthousiasme werkt dan ook aanstekelijk. Ann Lemaitre deinst er niet voor terug om aan gekende nummers een eigen schwung te geven.
                        Samen zorgen ze steeds voor een interactie met de toehoorders, waarbij een vleugje humor vaak niet ontbreekt en waarbij de genodigden naast luisteren ook gerust kunnen meezingen en een dansje kunnen placeren! Er wordt een eigen muziekinstallatie gebruikt, waarmee een optreden op gepast volume wordt gebracht.
                        Elk programma wordt samengesteld op basis van de wensen van de klant en er wordt ook steeds ingespeeld op de reacties van het publiek.
                        <strong>Annchanté kan echter ook geboekt worden voor een optreden/luisterconcert met volgende vaste programma's:</strong>
                        <ul style={{listStyle: "circle", textAlign: "left"}}>
                            <li><strong>Heerlijke melodieën van vroeger tot nu</strong>: liedjes met een tikkeltje nostalgie</li>
                            <li><strong>Jardin d'hiver</strong>: Franse chansons van Piaf tot Red</li>
                            <li><strong>Keep the home fires burning</strong>: programma ter nagedachtenis van WO1 en WO2</li>
                            <li><strong>Muzikale kerstwensen</strong>: liedjes om in de gepaste kerst- en eindejaarsstemming te komen</li>
                            <li><strong>Amor à volonté</strong>: de liefde en de romantiek staan centraal</li>
                        </ul>
                        Voor meer info en boekingen :
                        <div style={{paddingTop: "3rem"}}>
                            <a className="hero__button--link hero__button--link--CTA" href="?page=contact#contact" style={{display:"inline-block"}}><span>Contacteer ons</span></a>
                        </div>

                        <section className="" style={{paddingTop: "3rem"}}>
                            <h2 className="hidden">Video</h2>
                            <iframe className="iframe-index" width="570" height="320" src="https://www.youtube.com/embed/3r0pRGthLSo"></iframe>
                        </section>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Annchante;
