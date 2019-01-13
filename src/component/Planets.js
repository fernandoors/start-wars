import React, { Component } from 'react'
import axios from 'axios'
import General from './General'

import {URL} from '../route/Api'

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathDir: this.props.match.path.replace(/\//g, ''),
      value: '',
      data: [],
      list: [],
      pageNext: [],
      pagePrevious: []
    }
    
    this.handleDesc = this.handleDesc.bind(this)
    this.handleList = this.handleList.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get(`${URL}${this.state.pathDir}/?page=1`)
      .then(resp => (
        this.setState({
          ...this.state.list, list: resp.data.results,
          ...this.state.pageNext, pageNext: resp.data.next,
          ...this.state.pagePrevious, pagePrevious: !resp.data.next ? '' : resp.data.previous
        })))
  }

  handleChange(e) {
    this.setState({
      ...this.state.value, value: e.target.value
    })
  }

  handleDesc() {
    axios.get(`${URL}${this.state.pathDir}/?search=${this.state.value}`)
      .then(resp => this.setState({...this.state.list, list: resp.data.results}))
    
    this.refresh()
  }
  handleList(){
    axios.get(`${URL}${this.state.pathDir}/?page=${this.state.pageNext}&search=${this.state.value}`)
    .then(resp => this.setState({...this.state.list, data: resp.data.results}))
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
        <General list={this.state.list} pageNext={this.state.pageNext} pagePrevious={this.state.pagePrevious} pathDir={this.state.pathDir}/>
      </div>
    )
  }
}

export default Planets