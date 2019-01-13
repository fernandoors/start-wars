import React from 'react'
import {Link} from 'react-router-dom'

export default props => {

  const renderTable = () => {
    return Object.keys(!props.data ? [] : props.data).map((resp, i) => 
      <table className='table' key={i}>
          {filterTableContent(resp, 'title')}
          {filterTableContent(props.data[resp], 'item')}
      </table>
    )
  }
  
  const filterTableContent = (exclude, local) =>{
    // Set standard string to UP Case without underscore
    exclude = exclude.toString().toUpperCase().replace(/_/g, ' ')

    if(local === 'title'){
      const toExcludeTitle = [
        'HOMEWORLD', 'FILMS', 'SPECIES', 'RESIDENTS', 'VEHICLES', 
        'STARSHIPS', 'URL', 'PILOTS', 'CHARACTERS','PLANETS'
      ]
      for (const key in toExcludeTitle) {
        if(exclude === toExcludeTitle[key]){
          return null
        }
      }
      return(
        <thead>
          <tr>
            <th>{exclude}</th>
          </tr>
        </thead>
      )
    }
    
    if(local === 'item'){
      if (Array.isArray(exclude) || !exclude.search(/HTTP/g) ) {
        return null
      }
      return(
        <tbody>
          <tr>
            <td>{exclude}</td>
          </tr>
        </tbody>
      )
    }
    return exclude
  }


  return(
    <div className='col-md-12 col-sm-12' >
      <Link to={props.pathDir}>Return - {props.pathDir.toUpperCase()}</Link>
      <header className='page-header' >
        <h2>{props.pathDir.toUpperCase()} - Desc </h2>
      </header>
      {renderTable()}
    </div>
  )
}