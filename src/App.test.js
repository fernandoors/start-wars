import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './component/Header';
import {BrowserRouter as Router} from 'react-router-dom'

import { shallow } from 'enzyme'

it('renders without crashing', () => {
  const wrapper = shallow(
    <Router>
      <App /> 
    </Router>
    )
  expect(wrapper.find(Header).length).toBe(0)
});
