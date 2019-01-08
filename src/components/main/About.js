import React, { Component } from 'react'
import './about.scss'

class About extends Component {
  render () {
    return (
      <section class={`about ${this.props.flavour !== false && 'about--flavour'}` }>
        <h2 class="about__lede">We seek to take your expectations and turn them on their head</h2>
        <div class="about__intro">
          <p>In the shadow of the Crooked Spire we craft natural alcoholic sodas packed full of fruity flavour and just the right amount of sweetness.</p>
          <p>Crooked Beverage Co was borne out of a desire to create something truly new and truly different. A whole lot of time, experimentation and passion have gone into these drinks, alongside all natural ingredients!</p>
          <p>We've partnered with the extremely talented Lisa O'Hara to create the amazing illustrations on each can. Her inimitable style perfectly brings the Crooked worlds to life.</p>
          <p>Each of the flavours is modelled around a different dimension. Let us take you on a journey through our worlds.</p>
        </div>
      </section>
    )
  }
}
export default About