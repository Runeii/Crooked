<?php
function hooch_scripts_styles() {
    wp_register_script( 'main', get_template_directory_uri() . '/assets/js/scripts-min.js', null, '0.1', true);
    // Localize the script with new data
    $translation_array = array(
    	'template_directory' => str_replace(get_home_url(), '', get_template_directory_uri())
    );
    wp_localize_script( 'main', 'wordpress', $translation_array );

    // Enqueued script with localized data.
    wp_enqueue_script( 'main' );

}
add_action( 'wp_enqueue_scripts', 'hooch_scripts_styles' );

add_filter('show_admin_bar', '__return_false');
add_theme_support( 'post-thumbnails' );

add_image_size( 'image_feed', 330, 220, true );

function get_excerpt(){
  $excerpt = get_the_content();
  $excerpt = preg_replace(" ([.*?])",'',$excerpt);
  $excerpt = strip_shortcodes($excerpt);
  $excerpt = strip_tags($excerpt);
  $excerpt = substr($excerpt, 0, 172);
  $excerpt = trim(preg_replace( '/s+/', ' ', $excerpt));
  return $excerpt . '...';
}
 ?>
