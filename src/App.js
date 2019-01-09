import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

import './style/body.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <div>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
          <p>blabla</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;



// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>