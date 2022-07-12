import React from 'react'
import './debitCard.scss'
import cardArrow from '../../assets/images/cardArrow.png'

const DebitCard = () => {
  return (
    <div className='debitCard'>
      <div className="debitCard-text">
        <h2>CryptoLink<br />Debit Card</h2>
        <p>The CryptoLink card is used to spend your account
          balance anytime and anywhere without ever needing
          to withdrawal funds and wait for bank transfer to process.
          The CryptoLink debit card makes spending your portfolios
          passive income extremely easy. </p>
        <div className="debitCard-text-arrow">
          <p>Get Your CryptoLink Debit Card Today</p>
          <img src={cardArrow} alt="cardArrow" />
        </div>
      </div>
    </div>
  )
}

export default DebitCard