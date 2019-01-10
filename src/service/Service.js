import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Service extends Component {
  componentDidMount(){
    const path = this.props.path
    console.log(path)
  }
  render(){
    return(
      <div>
      <div role='form' className='search'>
        <div className='col-md-10 col-sm-12' >
          <input id='search' className='form-control' placeholder={`Search for a ${this.props.path.replace('/','')}`}></input>
        </div>
      </div>
      <div className='col-md-12 col-sm-12' >
      <h2>{this.props.path}</h2>
        <div className='row'>
        <div className='col-4'>
        <Link to={this.props.path}><img className="card-img-top pic" src={`./assets/image/${this.props.path}.jpg`} alt="pic"></img></Link>
        </div>
        <div className='col-8'>
        <a href={this.props.path}><p className="card-text">See the description for each Star Wars {this.props.path}.</p></a>
        </div>
          </div>
      </div>
      </div>
    )
  }
}

export default Service