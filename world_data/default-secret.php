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
foreach($elements as $name => $options) {
  picture_element($name, $options, 'default');
}
echo '<img class="all_seeing_eye" src="'. output_directory() .'/assets/img/logo/all_seeing_eye.svg" alt="The All Seeing Eye" />';
?>
