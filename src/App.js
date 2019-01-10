import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Routes from './route/Routes'


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;

