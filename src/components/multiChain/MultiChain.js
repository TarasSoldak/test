import React from 'react'
import './multiChain.scss'
import terra from '../../assets/images/terra.png'
import solana from '../../assets/images/solana.png'
import moonriver from '../../assets/images/moonriver.png'
import avalanche from '../../assets/images/avalanche.png'

const MultiChain = () => {
  return (
    <div className='multiChain'>
      <div className="multiChain-title">
        <h2>Multi-Chain</h2>
        <p>Multi-Chain means multiple
          opportunities for yield across
          many different blockchains. The CryptoLink brings our users the best possible yield diversification
          by supporting more than just one
          blockchain.</p>
      </div>

      <div className="multiChain-coin">
        <div className="multiChain-coin-name">
          <img src={terra} alt="terra" />
          <p>Terra</p>
        </div>
        <div className="multiChain-coin-name">
          <img src={solana} alt="solana" />
          <p>Solana</p>
        </div>
        <div className="multiChain-coin-name">
          <img src={moonriver} alt="moonriver" />
          <p>MoonRiver</p>
        </div>
        <div className="multiChain-coin-name">
          <img src={avalanche} alt="avalanche" />
          <p>Avalanche</p>
        </div>

      </div>
    </div>
  )
}

export default MultiChain