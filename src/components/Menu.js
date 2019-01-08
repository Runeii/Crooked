import React, {Component} from 'react'
import './menu.scss'

import logo from 'assets/img/logo/crooked_logo.svg'

class Menu extends Component {
  render () {
    return (
     <nav class="menu">
      <i class="menu__mobile fa fa-bars"></i>
      <div class="menu__container">
        <a href="#about" class="menu__nav">About</a>
        <a href="#social" class="menu__nav">Social</a>
        <a href="#world" class="mobile_logo"><img src={logo} alt="Crooked Beverage Co logo" /></a>
        <a href="#contact" class="menu__nav">Contact</a>
        <a href="#stockists" class="menu__nav">Buy</a>
      </div>
    </nav>
    )
  }
}

export default Menu