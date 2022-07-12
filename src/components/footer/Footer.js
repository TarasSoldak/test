import React from 'react'
import ExtraBatton from '../extraButton/ExtraBatton'
import './footer.scss'
import twitter from '../../assets/images/twitter.png'
import youtube from '../../assets/images/youtube.png'
import instagram from '../../assets/images/instagram.png'
import m from '../../assets/images/m.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <p className='footer-up'>Need some help?</p>
        <div className="footer-email">
          <h2>Info@TheCryptoLink.com</h2>
          <div className='footer-social-network'>
            <div className='footer-social-item'>
              <img src={instagram} alt="instagram" />
            </div>
            <div className='footer-social-item'>
              <img src={twitter} alt="twitter" />
            </div>
            <div className='footer-social-item'>
              <img src={youtube} alt="youtube" />
            </div>
            <div className='footer-social-item'>
              <img src={m} alt="m" />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-footer">
          <div className='footer-footer-info'>
            <p>© CryptoLink 2022. All Right Reserved.</p>
            <p>Terms of Use</p>
            <p>Help</p>
          </div>
          <div className="footer-footer-button">
            <ExtraBatton />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer