import React from 'react'
import logoEel from '../assets/image/logo-eel-white.png'

export default () =>  {
    return(
      <nav className='navbar footer'>
       <a href='https://www.eel.ventures' className='mx-auto' > <img src={logoEel} alt='LogoEel' className='logoEel '/></a>
      </nav>
    )
}