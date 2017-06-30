<?php
$elements = array(
  'hill_one' => array(
    'speed' => 0,
    'class' => 'terrain',
    'mobile' => true,
    'version' => 2
  ),
  'hill_two' => array(
    'speed' => 4,
    'class' => 'terrain',
    'mobile' => true
  ),
  'hill_three' => array(
    'speed' => 6,
    'class' => 'terrain',
  ),
  'moon' => array(
    'speed' => 7,
    'class' => '',
    'mobile' => true
  ),
  'creature' => array(
    'speed' => 0,
    'class' => 'animation'
  ),
  'fruit' => array(
    'speed' => 0,
    'class' => 'squeeze'
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
    'lede' => "On the midnight stage passions are revealed;<br />blood races and the drum beat pounds.",
    'introduction' => "<p>Moving as one, driven by the rhythm, blood flows faster and passions are ignited; hypnotic beats and ever changing shapes.</p><p>There’s nothing like the midnight stage, a transcendent experience; heightened by the sweet but tart tastes of blood orange and passionfruit.</p>"
  )
);

foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
create_overlays($overlays, $world);
?>
<img class="world_can" src="/wp-content/themes/crooked/assets/img/product/can_midnight.png" alt="Crooked Midnight Stage can" />
