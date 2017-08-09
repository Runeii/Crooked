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
    'speed' => 3,
    'class' => 'terrain',
    'mobile' => true
  ),
  'moon' => array(
    'speed' => 3,
    'class' => '',
    'mobile' => true
  ),
  'heads' => array(
    'speed' => 0,
    'class' => 'float',
    'version' => 2
  ),
  'fruit_one' => array(
    'speed' => 0,
    'class' => 'float'
  ),
  'fruit_two' => array(
    'speed' => 6,
    'class' => ''
  ),
  'skyshadow_one' => array(
    'speed' => 2,
    'class' => 'shadow'
  ),
  'cloud_one' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_two' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_three' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_four' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_five' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_six' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_seven' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'cloud_eight' => array(
    'speed' => 2,
    'class' => 'cloud'
  ),
  'mobile_only' => array(
    'sky'
  )
);
foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
?>
