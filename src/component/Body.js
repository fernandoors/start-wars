import React from 'react'
import {Link} from 'react-router-dom'

export default props => {

  const renderTable = () => {
    // const datas = Object.values(props.data) || []
    return Object.keys(!props.data ? [] : props.data).map((resp, i) => 
      <table className='table ' key={i}>
        <thead >
          <tr>
            <th>{resp.toUpperCase().replace(/_/g, ' ')}</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td>{props.data[resp]}</td>
          </tr>
        </tbody>
      </table>
    )
  }

  return(
    <div className='col-md-12 col-sm-12' >
      <Link to='/'>Home</Link>
      <header className='page-header'>
        <h2>{props.pathDir.toUpperCase()} - Desc</h2>
      </header>
      {renderTable()}
    </div>
  )
}