import React from 'react'
import Button from '../button/Button'
import googlePlay from '../../assets/images/googlePlay.png'
import appStore from '../../assets/images/appStore.png'
import './extraButton.scss'

const ExtraBatton = () => {
  return (
    <div className='extra'>
      <Button>
        <div className='extra-button-img'>
          <img src={googlePlay} alt="googlePlay" />
        </div>
        <div className='passiveIncome-button-text'>
          <p>Get in on</p>
          <p>Google Play</p>
        </div>
      </Button>
      <Button>
        <div className='extra-button-img'>
          <img src={appStore} alt="appStore" />
        </div>
        <div className='passiveIncome-button-text'>
          <p>Download on the</p>
          <p>App Store</p>
        </div>
      </Button>
    </div>
  )
}

export default ExtraBatton