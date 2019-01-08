import React, { Component } from 'react';
import Menu from './components/Menu'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="page">
        <Menu />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
