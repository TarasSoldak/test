import React from 'react'
import './header.scss'
import logo from '../../assets/images/headerLogo.png'

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <div className="header-logo-img">
                        <img src={logo} alt="logo" />
                    </div>
                    <p className='logo-text'>CryptoLink</p>
                </div>
                <div className="header-link">
                    <p>Log in</p>
                </div>
            </div>
        </header>
    )
}

export default Header