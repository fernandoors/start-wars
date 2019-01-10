import React from 'react'
import { Link } from 'react-router-dom'

export default ({value}) => {
  return (
    <div className='col-md-6 col-sm-12' >
    <h2>{value}</h2>
      <div className="card">
      <Link to={value}><img className="card-img-top pic" src={`./assets/image/${value}.jpg`} alt="pic"></img></Link>
        <div className="card-body">
          <a href={value}><p className="card-text">See the description for each Star Wars {value}.</p></a>
        </div>
      </div>
    </div>
  )
}