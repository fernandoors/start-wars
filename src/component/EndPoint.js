import React from 'react'

import Service from '../service/Service'

export default ({match})  =>{
  return (
    <div>
      <Service path={match.path} />
    </div>
  )
}

