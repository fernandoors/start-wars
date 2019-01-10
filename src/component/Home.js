import React, { Component } from 'react'

import Desc from './Desc'

class Home extends Component {
  render() {
    return (
      <div >
        <div className='row'>
          <Desc value='people' />
          <Desc value='films' />
        </div>
        <div className='row'>
          <Desc value='vehicles' />
          <Desc value='planets' />
        </div>
      </div>
    )
  }
}
export default Home