import React from 'react'
import Button from '../button/Button'
import './heroBanner.scss'

const HeroBanner = () => {
  return (
    <div className="banner">
      <div className="banner-block">
        <div className="banner-block-text">
          <h1>The Passive<br /> Income App For All</h1>
          <p>Swap,Yield Farm, Stake,
            Borrow and Lend cryptocurrency
            all in one application.</p>
          <div className="banner-buttons">
            <Button> Learn more</Button>
            <Button> Get started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner