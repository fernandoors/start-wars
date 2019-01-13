import React from 'react'
import { Link } from 'react-router-dom'
import logoStartWars from '../assets/image/logo-starwars-min.jpg'

export default props => {
  return (
    <nav className='navbar header navbar-dark bg-black'>

      <Link to='/' className='navbar-brand'><img src={logoStartWars} alt='logoStarWars' className='logoStarWars' /></Link>
      <div className='row'>
        <Link to='/people' className='nav-link'> <i className='fa top-icons fa-users'></i> </Link>
        <Link to='/films' className='nav-link'><i className='fa top-icons fa-film'></i></Link>
        <Link to='/vehicles' className='nav-link'><i className='fa top-icons fa-space-shuttle'></i></Link>
        <Link to='/planets' className='nav-link'><i className='fa top-icons fa-globe'></i></Link>
      </div>
    </nav>
  )
}