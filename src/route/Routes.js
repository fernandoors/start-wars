import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../component/Home'
// import EndPoint from '../component/EndPoint'
import People from '../component/People'
import Films from '../component/Films'
import Vehicles from '../component/Vehicles'
import Planets from '../component/Planets'

export default props => (
  <div className='container-fluid'>
    <div className='row'>
      <div className='col'>
        <Switch>
          <Route path='/people/' component={People} />
          <Route path='/films' component={Films} />
          <Route path='/vehicles' component={Vehicles} />
          <Route path='/planets' component={Planets} />
          <Route path='/' exact component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    </div>
  </div>
)