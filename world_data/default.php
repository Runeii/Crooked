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
    'speed' => -1,
    'class' => 'shadow'
  ),
  'skyshadow_two' => array(
    'speed' => -1,
    'class' => 'shadow'
  ),
  'skyshadow_three' => array(
    'speed' => -1,
    'class' => 'shadow'
  ),
  'cloud_one' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_two' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_three' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_four' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_five' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_six' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_seven' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_eight' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'cloud_nine' => array(
    'speed' => -1,
    'class' => 'cloud'
  ),
  'mobile_only' => array(
    'sky'
  )
);
foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
echo '<div id="products" class="can_container parallax" data-speed="7">
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
