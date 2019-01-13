import React from 'react'
import { Link } from 'react-router-dom'

export default ({value}) => {
  return (
    <div className='col-md-6 col-sm-12 list' >
    <h2>{value.toUpperCase()}</h2>
      <div className="card">
      <Link to={value}><img className="card-img-top pic" src={`./assets/image/${value}-min.jpg`} alt="pic"></img></Link>
        <div className="card-body">
          <Link to={value}><p className="card-text">See the description for each Star Wars {value}.</p></Link>
        </div>
      </div>
    </div>
  )
}