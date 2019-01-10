import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../component/Home'
import EndPoint from '../component/EndPoint'

export default props => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col'>
        <Switch>
          <Route path='/people' component={EndPoint} />
          <Route path='/films' component={EndPoint} />
          <Route path='/vehicles' component={EndPoint} />
          <Route path='/planets' component={EndPoint} />
          <Route path='/' exact component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </div>
  </div>
)