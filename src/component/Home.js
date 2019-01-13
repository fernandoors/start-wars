import React, { Component } from 'react'

import HomeCard from './HomeCard'

class Home extends Component {
  render() {
    return (
      <div >
        <div className='row'>
          <HomeCard value='people' />
          <HomeCard value='films' />
        </div>
        <div className='row'>
          <HomeCard value='vehicles' />
          <HomeCard value='planets' />
        </div>
      </div>
    )
  }
}
export default Home