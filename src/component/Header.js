import React from 'react'
import { Link } from 'react-router-dom'
import logoStartWars from '../assets/image/logo-starwars.jpg'

export default () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-black'>
      <Link to='/' className='navbar-brand'><img src={logoStartWars} alt='logoStarWars' className='logoStarWars' /></Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu" aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <div className='collapse navbar-collapse navMenu' id='headerMenu'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'> <Link to='/people' className='nav-link'>People</Link> </li>
          <li className='nav-item'> <Link to='/films' className='nav-link'>Films</Link> </li>
          <li className='nav-item'> <Link to='/vehicles' className='nav-link'>Vehicles</Link> </li>
          <li className='nav-item'> <Link to='/planets' className='nav-link'>Planets</Link> </li>
        </ul>
      </div>
    </nav>
  )
}