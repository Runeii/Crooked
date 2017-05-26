<?php
$elements = array(
  'hill_one' => array(
    'speed' => 0,
    'class' => 'terrain'
  ),
  'hill_two' => array(
    'speed' => 3,
    'class' => 'terrain'
  ),
  'hill_three' => array(
    'speed' => 4,
    'class' => 'terrain'
  ),
  'moon' => array(
    'speed' => 2,
    'class' => ''
  ),
  'creature' => array(
    'speed' => 0,
    'class' => 'creature'
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
  )
);
$overlays = array(
  'logo' => array(
    'speed' => 0,
    'class' => 'overlay'
  ),
  'flavour' => array(
    'speed' => 0,
    'class' => 'overlay'
  ),
  'copy' => array(
    'lede' => "On the midnight stage passions are revealed;<br />blood races and the drum beat pounds.",
    'introduction' => "<p>Moving as one; driven by the rhythm blood flows faster and passions are ignited; hypnotic beats and ever changing shapes.</p><p>There’s nothing like the midnight stage, a transcendent experience; heightened by the sweet but tart tastes of blood orange and passionfruit.</p>"
  )
);

foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
create_overlays($overlays, $world);
?>
<img class="world_can" src="/wp-content/themes/crooked/assets/img/product/can_midnight.png" alt="Crooked Midnight Stage can" />
