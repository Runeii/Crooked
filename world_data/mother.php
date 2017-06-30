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
  'moon' => array(
    'speed' => 2,
    'class' => '',
    'mobile' => true
  ),
  'mother' => array(
    'speed' => 0,
    'class' => 'float',
    'mobile' => true,
    'version' => 2
  ),
  'skyshadow_one' => array(
    'speed' => 2,
    'class' => 'shadow'
  ),
  'skyshadow_two' => array(
    'speed' => 2,
    'class' => 'shadow'
  ),
  'skyshadow_three' => array(
    'speed' => 2,
    'class' => 'shadow'
  ),
  'skyshadow_four' => array(
    'speed' => 2,
    'class' => 'shadow'
  ),
  'skyshadow_five' => array(
    'speed' => 2,
    'class' => 'shadow'
  ),
  'mobile_only' => array(
    'sky'
  )
);
$overlays = array(
  'logo' => array(
    'speed' => 0,
    'class' => 'overlay',
    'mobile' => true
  ),
  'flavour' => array(
    'speed' => 0,
    'class' => 'overlay',
    'mobile' => true
  ),
  'copy' => array(
    'lede' => "In the dead of night Mother Moon watches;<br />she is soft yet powerful, subtle yet omnipresent.",
    'introduction' => "<p>Delicate moments are captured in her gaze, like the gentle taste of peach with perfumed hints of pomegranate.</p><p>Mother Moon sees the secret smiles, the stolen moments, the hands clasped tight.</p>"
  )
);

foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
create_overlays($overlays, $world);
?>
<img class="world_can" src="/wp-content/themes/crooked/assets/img/product/can_mother.png" alt="Crooked Mother can" />
