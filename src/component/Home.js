import React, { Component } from 'react'

import CardHome from './CardHome'

class Home extends Component {
  render() {
    return (
      <div >
        <div className='row'>
          <CardHome value='people' />
          <CardHome value='films' />
        </div>
        <div className='row'>
          <CardHome value='vehicles' />
          <CardHome value='planets' />
        </div>
      </div>
    )
  }
}
export default Home