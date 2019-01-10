import React from 'react'

import Service from '../service/Service'

export default ({match})  =>{

  return (
    <div>
    <h1>{match.path === '/films' ? 'title': 'name'}</h1>
      <Service path={match.path} value={match.path === '/films' ? 'title': 'name'} />
    </div>
  )
}

