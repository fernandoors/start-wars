import React from 'react'
import {Link} from 'react-router-dom'

export default props => {

  const renderTable = () => {
    return  !props.data ? [] : Object.keys(props.data).map((resp, i) => 
      <table className='table' key={i}>
        {filterTableContent(props.data[resp][0], 'title')}
        {filterTableContent(props.data[resp][1], 'item')}
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
    <div className='col-sm-12' >
      <button className='btn' onClick={() =>props.show(true)}><Link to={props.pathDir}>Return - {props.pathDir.toUpperCase()}</Link></button>
      <header className='page-header' >
        <h2>{props.pathDir.toUpperCase()} - Details - {props.data[0][1]} </h2>
      </header>
      {renderTable()}
    </div>
  )
}