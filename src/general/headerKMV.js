import React from 'react'
import logo from '../Logo.png';
import '../style/headerKMV.css'

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