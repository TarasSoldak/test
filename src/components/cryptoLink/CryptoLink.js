import React from 'react'
import cryptoIPhone from '../../assets/images/cryptoIPhone.png'
import './cryptoLink.scss'
import Button from '../button/Button'


const CryptoLink = () => {
  return (
    <div className='cryptoLink'>
      <div className="cryptoLink-img">
        <img src={cryptoIPhone} alt="IPhoneImg" />
      </div>
      <div className="cryptoLink-text">
        <div className="cryptoLink-text-block">
          <h2>CryptoLink</h2>
          <p>The CryptoLink is a centralized DeFi
            application built for next-generation staking,
            yield farming and financial services. Our mission is to remove all the technical barriers that come with decentralized finance
            so that everyone can experience the benefits
            of DeFi.</p>
            <div className="cryptoLink-button">
              <Button>Get started</Button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoLink