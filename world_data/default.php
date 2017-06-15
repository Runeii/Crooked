<?php
$elements = array(
  'hill_one' => array(
    'speed' => 0,
    'class' => 'terrain',
    'mobile' => true
  ),
  'hill_two' => array(
    'speed' => 6,
    'class' => 'terrain',
    'mobile' => true
  ),
  'hill_three' => array(
    'speed' => 5,
    'class' => 'terrain',
    'mobile' => true
  ),
  'hill_four' => array(
    'speed' => 4,
    'class' => 'terrain',
    'mobile' => true
  ),
  'hill_five' => array(
    'speed' => 3,
    'class' => 'terrain',
    'mobile' => true
  ),
  'hill_six' => array(
    'speed' => 2,
    'class' => 'terrain'
  ),
  'sun' => array(
    'speed' => 1,
    'class' => '',
    'mobile' => true
  ),
  'skyshadow_one' => array(
    'speed' => 0,
    'class' => 'shadow'
  ),
  'skyshadow_two' => array(
    'speed' => 0,
    'class' => 'shadow'
  ),
  'skyshadow_three' => array(
    'speed' => 0,
    'class' => 'shadow'
  ),
  'cloud_one' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_two' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_three' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_four' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_five' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_six' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_seven' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_eight' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'cloud_nine' => array(
    'speed' => 0,
    'class' => 'cloud'
  ),
  'mobile_only' => array(
    'sky'
  )
);
$overlays = array(
  'copy' => array(
    'lede' => '',
    'introduction' => "<p>In the shadow of the Crooked Spire we craft natural alcoholic sodas packed full of fruity flavour and just the right amount of sweetness.</p><p>Crooked Beverage Co was borne out of a desire to create something truly new and truly different. A whole lot of time, experimentation and passion have gone into these drinks, alongside all natural ingredients!</p><p>We've partnered with the extremely talented Lisa O'Hara to create the amazing illustrations on each can. Her inimitable style perfectly brings the Crooked worlds to life.</p><p>Each of the flavours is modelled around a different dimension. Let us take you on a journey through our worlds.</p>"
  )
);
foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
echo '<div class="can_container parallax" data-speed="7">
  <div id="dayglo_slot" class="can_tooltip">
    <a href="#" id="dayglo_eye" class="can_eye" data-world="dayglo"></a>
    <img id="dayglo_can" class="can_image" src="' . output_directory() . '/assets/img/product/can_dayglo.png" alt="Crooked Dayglo Skies can" />
  </div>
  <div id="midnight_slot" class="can_tooltip">
    <a href="#" id="midnight_eye" class="can_eye" data-world="midnight"></a>
    <img id="midnight_can" class="can_image"  src="' . output_directory() . '/assets/img/product/can_midnight.png" alt="Crooked Midnight Stage can" />
  </div>
  <div id="mother_slot" class="can_tooltip">
    <a href="#" id="mother_eye" class="can_eye" data-world="mother"></a>
    <img id="mother_can" class="can_image" src="' . output_directory() . '/assets/img/product/can_mother.png" alt="Crooked Mother Moon can" />
  </div>
</div>';
echo '<img class="crooked_logo" src="'. output_directory() .'/assets/img/logo/crooked_logo.svg" alt="Crooked Beverage Co logo" />';
?>
