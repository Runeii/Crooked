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
    'lede' => "Under dayglo skies lies a world of possibility;<br />the changing shapes in the clouds hint at dreams and other lives.",
    'introduction' => "<p>Warm breezes tickle sun-kissed skin and happy bodies dance together like the aroma of sweet raspberries and tropical citrus; the sweet refreshing taste is unrivalled.</p><p>Long evenings, loud laughter, soft grass in between toes. All swept up in the psychedelia of dayglo skies.</p>"
  )
);

foreach($elements as $name => $options) {
  picture_element($name, $options, $world);
}
create_overlays($overlays, $world);
?>
<img class="world_can" src="/wp-content/themes/crooked/assets/img/product/can_dayglo.png" alt="Crooked Dayglo Skies can" />
