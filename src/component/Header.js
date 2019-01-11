import React from 'react'
import { Link } from 'react-router-dom'
import logoStartWars from '../assets/image/logo-starwars.jpg'

export default () => {
  return (
    <nav className='navbar  navbar-dark bg-black'>

      <Link to='/' className='navbar-brand'><img src={logoStartWars} alt='logoStarWars' className='logoStarWars' /></Link>
      <div className='row'>
        <Link to='/people' className='nav-link'> <i className='fa fa-users'></i> </Link>
        <Link to='/films' className='nav-link'><i className='fa fa-film'></i></Link>
        <Link to='/vehicles' className='nav-link'><i className='fa fa-space-shuttle'></i></Link>
        <Link to='/planets' className='nav-link'><i className='fa fa-globe'></i></Link>
      </div>
    </nav>
  )
}