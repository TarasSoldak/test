import React from 'react'
import './passiveIncome.scss'
import ExtraButton from '../extraButton/ExtraBatton'
import IPhone from '../../assets/images/passiveIncomeIPhone.png'

const PassiveIncome = () => {
  return (
    <div className='passiveIncome'>
      <div className="passiveIncome-title">
        <h2>Passive income made easy with<br />
          the <span>CryptoLink</span>
        </h2>

      </div>
      <div className="passiveIncome-button">
        <ExtraButton/>
      </div>
      <div className="passiveIncome-img">
        <div className="passiveIncome-img-text">
          <div className='circle-block'>
            <div className='circle'>
              <span>1</span><h3>Download The CryptoLink</h3>
            </div>
            <p>Get started with the
              CryptoLink on your IOS or android mobile device.</p>
          </div>
          <div className='circle-block-two'>
            <div className='circle'>
              <span className='circle-two'>2</span><h3>Create Your CryptoLink Account</h3>
            </div>
            <p>Choose your username,
               password and confirm your<br/> email address to register.</p>
          </div>
          <div>
            <div className='circle'>
              <span className='circle-three'>3</span><h3>Easily Begin Earning Passive Income</h3>
            </div>
            <p>Pick a yield strategy, Track your investments with the<br/> dashboard then
               sit back relax and watch your<br/> CryptoLink portfolio grow.</p>
          </div>

        </div>
        <div className="passiveIncome-img-block">
          <img src={IPhone} alt="IPhone" />
        </div>

      </div>
    </div>
  )
}

export default PassiveIncome