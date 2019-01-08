import React, { Component } from 'react'
import './social.scss'

class Social extends Component {
  render () {
    return (
      <section class="social">
          <h3 class="social__heading">Join us</h3>
          <div class="social__icons">
            <a href="http://www.instagram.com/crookedbevco" title="Crooked Beverage Co on Instagram" class="social__icons-icon">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="http://www.facebook.com/crookedbevco" title="Crooked Beverage Co on Facebook" class="social__icons-icon">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="http://www.twitter.com/crookedbevco" title="Crooked Beverage Co on Twitter" class="social__icons-icon">
              <i class="fa fa-twitter"></i>
            </a>
          </div>
          <div class="social__post">
            <img class="social__post-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Instagram post by @CrookedBevCo" />
            <p class="social__post-caption">[CAPTION]</p>
          </div>
        </section>
    )
  }
}

export default Social