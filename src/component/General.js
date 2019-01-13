import React from 'react'
import {Link} from 'react-router-dom'

// import Details from 'Details'

export default props =>{

  const renderPaging = () => {
    if (props.pathDir !== 'films') {
      const pagePrevious = !props.pagePrevious ? 1 : props.pagePrevious[props.pagePrevious.length-1]
      const pageNext = !props.pageNext ? 1 : props.pageNext[props.pageNext.length-1]
      
      return(
        <th>PAGE: {pagePrevious}  {pageNext} </th>
      )
    }
    return(<th>PAGE: 1</th>)
  }
  const renderList = () =>{
    const datas = !props.list ? [] : Object.values(props.list)
    
    return datas.map((data, i) => (
      <tbody key={i}>
        <tr>
          <td>{!data.name ? data.title : data.name}</td> 
          <td>  <i className='fa fa-list'> Details </i>  </td> 
        </tr>
      </tbody>
      )
    )
  }
  return (
    <div className='col-sm-12'>
      <Link to='/'>Home</Link>
      <table className='table'>
      <thead>
        <tr>
          <th>{props.pathDir.toUpperCase()}</th>
          {renderPaging()}
        </tr>
      </thead>
        {renderList()}
      </table>
    </div>
  )
}
