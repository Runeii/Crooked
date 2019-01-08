import React, { Component } from 'react'
import Social from './main/Social'
import Contact from './main/Contact'
import About from './main/About'
import Flavours from './main/Flavours'
import Stockists from './main/Stockists'

import './main.scss'

class Main extends Component {
  render () {
    return (
      <main class="main">
        <About />
        <Flavours />
        <Social />
        <Contact />
        <Stockists />
      </main>
    )
  }
}

export default Main