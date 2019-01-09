import React from 'react'
import '../style/header.css'

function Header() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light'>
        <a href='/#' className='navbar-brand'><img src={'./assets/images/logo-marvel.png'} alt='LogoMarvel' className='logoMarvel'/></a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#header' > 
          <span className='navbar-toggler-icon'></span>
          <div className='collapse navbar-collapse' id='header'>
            <ul className='navbar-nav mr-auto'>
              <li>Char</li>
              <li>Com</li>
              <li>Cre</li>
              <li>Sto</li>
            </ul>          
          </div>
        </button> 
      </nav>
    )
}

export default Header
