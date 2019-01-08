import React, { Component } from 'react'
import can_dayglo from 'assets/img/product/can_dayglo.png'
import can_midnight from 'assets/img/product/can_midnight.png'
import can_mother from 'assets/img/product/can_mother.png'

import './flavours.scss'

class Flavours extends Component {
  render () {
    return (
      <div class="flavours">
        <div id="dayglo_slot" class="flavours__can tooltip__can">
          <a href="#" id="dayglo_eye" class="can_eye single_world" data-world="dayglo"></a>
          <img id="dayglo_can" class="flavours__can-image" src={can_dayglo} alt="Crooked Dayglo Skies can" />
        </div>
        <div id="midnight_slot" class="flavours__can tooltip__can">
          <a href="#" id="midnight_eye" class="can_eye single_world" data-world="midnight"></a>
          <img id="midnight_can" class="flavours__can-image" src={can_midnight} alt="Crooked Midnight Stage can" />
        </div>
        <div id="mother_slot" class="flavours__can tooltip__can">
          <a href="#" id="mother_eye" class="can_eye single_world" data-world="mother"></a>
          <img id="mother_can" class="flavours__can-image" src={can_mother} alt="Crooked Mother Moon can" />
        </div>
      </div>
    )
  }
}
export default Flavours