import React from 'react'
import {Link} from 'react-router-dom'

export default props =>{

  const renderList = () =>{
    const datas = !props.list ? [] : Object.values(props.list)
    const path = props.pathDir
    
    return datas.map((data, i) => (
      <tbody key={i}>
        <tr>
          <td>{!data.name ? data.title : data.name}</td> 
          <td> 
            <button className='btn' onClick={() =>props.details(path ==='films'? data.title : data.name)}>
              <i className='fa fa-list'></i> 
            </button>  
          </td> 
        </tr>
      </tbody>
      )
    )
  }
  
  return (
    <div className='col-sm-12'>
      <Link to='/'>HOME</Link>
      <table className='table'>
      <thead>
        <tr>
          <th>{props.pathDir.toUpperCase()}</th>
          <th>DETAILS</th>
        </tr>
      </thead>
        {renderList()}
      </table>
    </div>
  )
}
