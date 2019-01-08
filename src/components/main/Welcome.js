import React, { Component } from 'react'

import './welcome.scss'

class Welcome extends Component {
  render () {
    return (
      <section class="welcome">
        <h2 class="welcome__lede">'. $overlays['copy']['lede'] .'</h2>
        <div class="welcome__introduction">'. $overlays['copy']['introduction'] .'</div>
        <div class="welcome__description">Refreshing, sparkling, alcoholic malted soda.<br />Made with natural fruit flavours,  juices and a lightly hopped finish with nothing artificial.</div>
      </section>
    )
  }
}
export default Welcome