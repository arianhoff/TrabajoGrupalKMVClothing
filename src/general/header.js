import React from 'react'
import logo from '../LogoKmv.jpeg';
import '../style/header.css'

const Header = () => {
  return (
    <div>
        <header className='Header'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>KMV Clothing</h1>
        </header>
    </div>
  )
}

export default Header;