import React from 'react'
import { Link } from 'react-router-dom'
import logoStartWars from '../assets/image/logo-starwars-min.jpg'

export default props => {
  return (
    <nav className='navbar header navbar-dark bg-black'>
      <Link to='/' className='navbar-brand'><img src={logoStartWars} alt='logoStarWars' className='logoStarWars' /></Link>
      <div className='row'>
        <p>{props.match}</p>
        <Link to='/people' className='nav-link'> <i className='fa icons fa-users'></i> </Link>
        <Link to='/films' className='nav-link'><i className='fa icons fa-film'></i></Link>
        <Link to='/vehicles' className='nav-link'><i className='fa icons fa-space-shuttle'></i></Link>
        <Link to='/planets' className='nav-link'><i className='fa icons fa-globe'></i></Link>
      </div>
    </nav>
  )
}