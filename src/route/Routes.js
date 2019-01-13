import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../component/Home'
import EndPoint from '../component/EndPoint'

export default props => {
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <Switch>
            <Route path='/people' render={props => <EndPoint {...props} value='' />} />
            <Route path='/films' render={props => <EndPoint {...props} value='' />} />
            <Route path='/vehicles' render={props => <EndPoint {...props} value=''/>} />
            <Route path='/planets' render={props => <EndPoint {...props} value=''/>} />
            <Route path='/' exact component={Home} />
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </div>
    </div>
  )
}