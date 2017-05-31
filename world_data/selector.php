<?php
if(!isset($world)) {
  $world = $_POST['world'];
}

include $world . '.php';

//We're outside of Wordpress
function output_directory(){
  if(isset($_POST['directory'])) {
    return $_POST['directory'];
  } else {
    return get_stylesheet_directory_uri();
  }
}
function picture_element($name, $options, $world, $mobilename = null){
  if($mobilename === null) {
    $mobilename = 'mobile_' . $name;
  }
  if($name === 'mobile_only') {
    foreach($options as $name) {
      echo '<picture id="'. $name .'">';
      echo '<source
            media="(orientation: portrait)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/mobile_' . $name .'.png" >';
      echo '<source
            media="(orientation: portrait)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/mobile_' . $name .'_medium.png" >';
      echo '<img alt="'. $name .' asset for '. $world .' world" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="></picture>';
    }
  } else {
    echo '<picture id="'. $name .'" class="'. $options['class'] . '">';
      if(array_key_exists('mobile', $options) && $options['mobile'] === true) {
        echo '<source
                media="(orientation: portrait)"
                srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $mobilename .'.png" >';
        echo '<source
                media="(orientation: portrait)"
                srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $mobilename .'_medium.png" >';
      }
      echo '<source
            media="(orientation: landscape) and (min-width: 1500px)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $name .'.png" >';
      echo '<source
            media="(orientation: landscape) and (min-width: 1000px)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_large.png" >';
      echo '<source
            media="(orientation: landscape) and (min-width: 500px)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_medium.png" >';
      echo '<source
            media="(orientation: landscape)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_small.png" >';
      echo '<img alt="'. $name .' asset for '. $world .' world" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ';
      if($options['speed'] != 0) {
        echo 'class="parallax" data-speed="'. $options['speed'] . '"';
      }
    echo '></picture>';
  }
}
function create_overlays($overlays, $world){
  picture_element('text_one', array('speed' => 0, 'class' => 'text'), 'shared');
  picture_element('text_two', array('speed' => 0, 'class' => 'text'), 'shared');
  echo '<div id="overlays" class="parallax" data-speed="1">';
  foreach($overlays as $name => $options) {
    if($name != 'copy') {
      picture_element($name, $options, $world, $name);
    } else {
      echo '<section id="welcome" class="row">
              <h2 class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3 lede">'. $overlays['copy']['lede'] .'</h2>
              <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3 introduction">'. $overlays['copy']['introduction'] .'</div>
            </section>';
      echo '</div>';
    }
  }

}
?>
