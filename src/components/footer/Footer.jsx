import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo-inverted.png'
import instaIcon from '../../assets/images/icons/instaIcon.svg'
import facebookIcon from '../../assets/images/icons/facebookIcon.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper--socials">
          <div className='footer__logo--container'>
            <p className="hidden">Annchante</p>
            <img src={logo} alt="Annchanté Logo" />
          </div>
          <div className="socials__container">
            <div className="socials">
              <a href="https://www.facebook.com/ann.dewinter" target='_blank' className="social__item">
                <img src={facebookIcon} className="social__icon" alt="Facebook" />
                <h3>Facebook</h3>
              </a>
              <a href="https://www.instagram.com/ann.dewinter/" target='_blank' className="social__item">
                <img src={instaIcon} className="social__icon" alt="Instagram" />
                <h3>Instagram</h3>
              </a>
            </div>
          </div>
        </div>
        
        <div className="details__container">
          <p>Ann De Winter</p>
          <p>info@anndewinter.be</p>
          <p>+32 476 22 09 42</p>
        </div>
      </div>
      <p className="copyright__text">
        Website gemaakt door <a href="https://www.emilecaron.be" style={{ color: 'inherit' }}>Emile Caron</a>
      </p>
    </footer>
  );
}

export default Footer;
