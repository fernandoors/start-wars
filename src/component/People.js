import React, { Component } from 'react'
import axios from 'axios'
import Body from './Body'

import {URL} from '../route/Api'

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathDir: this.props.match.path.replace('/', ''),
      value: '',
      data: [],
    }
    
    this.handleDesc = this.handleDesc.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get(`${URL}${this.state.pathDir}/`)
      .then(resp => this.setState({...this.state.data, data: resp.data.results[0]}))
      
  }

  handleChange(e) {
    this.setState({
      ...this.state.value, value: e.target.value
    })
  }

  handleDesc() {
    axios.get(`${URL}${this.state.pathDir}/?search=${this.state.value}`)
      .then(resp => this.setState({...this.state.data, data: resp.data.results[0]}))
    
    this.refresh()
  }

  refresh() {
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <div role='form' className='search'>
          <div className='row'>
            <div className='col-10' >
              <input id='search' className='form-control' value={this.state.value} onChange={this.handleChange} placeholder={`Search ${this.state.pathDir}`}></input>
            </div>
            <div className='col-2'>
              <button className='btn btn-dark fa fa-search' onClick={this.handleDesc}></button>
            </div>
          </div>
        </div>
        <Body data={this.state.data} pathDir={this.state.pathDir} />
      </div>
    )
  }
}

export default People