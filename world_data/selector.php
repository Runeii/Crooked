<?php
if(!isset($world_layout)) {
  $world_layout = $world;
}
include $world_layout . '.php';

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
      if(array_key_exists('version', $options)) {
        $version = '_v' . $options['version'];
      } else {
        $version = '';
      }
      if(array_key_exists('mobile', $options) && $options['mobile'] === true) {
        echo '<source
                media="(orientation: portrait)"
                srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $mobilename .  $version .'.png" >';
        echo '<source
                media="(orientation: portrait)"
                srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $mobilename .'_medium'.  $version .'.png" >';
      }
      echo '<source
            media="(orientation: landscape) and (min-width: 1500px)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $name .  $version .'.png" >';
      echo '<source
            media="(orientation: landscape) and (min-width: 1000px)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_large'.  $version .'.png" >';
      echo '<source
            media="(orientation: landscape) and (min-width: 500px)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_medium'.  $version .'.png" >';
      echo '<source
            media="(orientation: landscape)"
            srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_small'.  $version .'.png" >';
      echo '<img alt="'. $name .' asset for '. $world .' world" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ';
      if($options['speed'] != 0) {
        echo 'class="parallax" data-speed="'. $options['speed'] . '"';
      }
    echo '></picture>';
  }
}
function create_overlays($overlays, $world){
  echo '<div id="overlays" class="parallax" data-speed="0">';
  foreach($overlays as $name => $options) {
    if($name != 'copy') {
      picture_element($name, $options, $world, $name);
    } else {
      echo '<section id="welcome" class="row">
              <h2 class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3 lede">'. $overlays['copy']['lede'] .'</h2>
              <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 introduction">'. $overlays['copy']['introduction'] .'</div>
              <div class="col-12 sm-10 offset-sm-1 col-md-8 offset-md-2 col-xl-6 offset-xl-3 description">Refreshing, sparkling, alcoholic malted soda.<br />Made with natural fruit flavours,  juices and a lightly hopped finish with nothing artificial.</div>
            </section>';
      echo '</div>';
    }
  }

}
?>
