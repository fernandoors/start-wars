import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const URL = 'https://swapi.co/api/'

class Vehicles extends Component {
  constructor(props){
    super(props);
    this.state = {
      pathDir: this.props.match.path.replace('/',''), 
    }
  }

  componentDidMount(){
    this.setState({
      pathDir: this.props.match.path.replace('/','')
    })
    axios.get(`${URL}${this.state.pathDir}`).then(resp => console.log(resp.data.results[0]))
    console.log(`${URL}${this.state.pathDir}`)
  }

  render(){
    return(
      <div>
      <div role='form' className='search'>
        <div className='col-md-10 col-sm-12' >
          <input id='search' className='form-control' placeholder={`Search ${this.state.pathDir}`}></input>
        </div>
      </div>
      <div className='col-md-12 col-sm-12' >
      <h2>{this.state.pathDir}</h2>
        <div className='row'>
        <div className='col-4'>
        <Link to={this.state.pathDir}><img className="card-img-top pic" src={`./assets/image/${this.state.pathDir}.jpg`} alt="pic"></img></Link>
        </div>
        <div className='col-8'>
        <a href={this.state.pathDir}><p className="card-text">See the description for each Star Wars {this.state.pathDir}.</p></a>
        </div>
          </div>
      </div>
      </div>
    )
  }
}

export default Vehicles