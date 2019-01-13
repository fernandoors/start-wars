import React, { Component } from 'react'
import axios from 'axios'
import BodyList from './BodyList'

import {URL} from '../route/Api'
import BodyDetails from './BodyDetails';

class EndPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathDir: this.props.history.location.pathname.replace(/\//g, ''),
      value: '',
      data: [],
      list: [],
      pageNext: [],
      pagePrevious: [],
      showDetails: false,
    }
    this.handleDesc = this.handleDesc.bind(this)
    this.showBody = this.showBody.bind(this)
    this.handleDetails = this.handleDetails.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
componentDidMount(){
  this.handlePage(this.state.pathDir)
}
  componentWillUpdate(){
    const pageOring = this.props.match.path.replace(/\//g,'')
    const pageDest = this.props.history.location.pathname.replace(/\//g,'')
    if(pageOring !== pageDest){
      this.handlePage(pageDest)
    }
  }
  handlePage(pageDest){
      axios.get(`${URL}${pageDest}/?page=1`)
      .then(resp => (
        this.setState({
          ...this.state.pathDir, pathDir: pageDest,
          ...this.state.list, list: resp.data.results,
          ...this.state.data, data: resp.data.results[0],
          ...this.state.showDetails, showDetails: false,
          ...this.state.pageNext, pageNext: resp.data.next,
          ...this.state.pagePrevious, pagePrevious: !resp.data.next ? '' : resp.data.previous
        })))
    } 
  
  handleChange(e) {
    return this.setState({
      ...this.state.value, value: e.target.value,
      ...this.state.showDetails, showDetails: false
    })
  }

  handleDesc(e) {
    if(e) {
    axios.get(`${URL}${this.state.pathDir}/?search=${this.state.value}`)
      .then(resp => this.setState({...this.state.list, list: resp.data.results}))}
    this.refresh()
  }

  refresh() {
    this.setState({
      value: ''
    })
  }

  handleDetails(name){
    axios.get(`${URL}${this.state.pathDir}/?search=${name}`)
      .then(resp => 
        {
          this.setState({
            ...this.state.data, data: Object.entries(resp.data.results[0]),
            ...this.state.showDetails, showDetails: true,
            ...this.state.value, value: ''
          })
        }
      )
  }
  showBody(status){
    if(status){
      this.setState({...this.state.showDetails, showDetails: false})
    }
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
        {!this.state.showDetails && <BodyList {...this.state}  details={this.handleDetails} />}
        
        {this.state.showDetails && <BodyDetails data={this.state.data} show={this.showBody} pathDir={this.state.pathDir}/>}
      </div>
    )
  }
}

export default EndPoint