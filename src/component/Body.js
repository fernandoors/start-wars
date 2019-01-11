import React from 'react'

// const renderCols = () => {
//   const data = props.data || []
//   return data.map(resp =>(
//     <tr key={resp._id}>
//     <th>{Object.keys(resp)}</th>
//     </tr>
//   ))
// }
export default props => {
  const renderRows = () => {
    const data = props.data || []
    return data.map(resp =>(
      <tr key={resp._id}>
      <td>{resp}</td>
      </tr>
    ))
  }
  return(
    <div className='col-md-12 col-sm-12' >
    <header className='page-header'>
      <h2>{props.pathDir}</h2>
    </header>
    <table className='table'>
      <thead>
        <tr>
        <tr >
        <th>desc</th>
        </tr>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  </div>
  )
}