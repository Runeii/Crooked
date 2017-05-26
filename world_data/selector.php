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
function picture_element($name, $options, $world){
  echo '<picture id="'. $name .'" class="'. $options['class'] . '">';
  echo '<source
        media="(min-width: 1500px)"
        srcset="'. output_directory() . '/assets/img/worlds/' . $world . '/' . $name .'.png" >';
  echo '<source
        media="(min-width: 1000px)"
        srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_large.png" >';
  echo '<source
        media="(min-width: 500px)"
        srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_medium.png" >';
  echo '<source
        srcset="'. output_directory() . '/assets/img/worlds/' . $world .'/'. $name .'_small.png" >';
  echo '<img alt="'. $name .' asset for '. $world .' world" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ';
  if($options['speed'] > 0) {
      echo 'class="parallax" data-speed="'. $options['speed'] . '"';
  }
  echo '></picture>';
}
function create_overlays($overlays, $world){
  echo '<div id="overlays" class="parallax" data-speed="3">';
  foreach($overlays as $name => $options) {
    if($name != 'copy') {
      picture_element($name, $options, $world);
    } else {
      echo '<section id="welcome" class="row">
              <h2 class="col-12 lede">'. $overlays['copy']['lede'] .'</h2>
              <div class="col-12 introduction">'. $overlays['copy']['introduction'] .'</div>
            </section>';
      echo '</div>';
    }
  }

}
?>
