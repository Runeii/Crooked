<?php
$version = '1.1.1';
function crooked_scripts_styles() {
    wp_enqueue_style( 'styles', get_stylesheet_directory_uri() . '/assets/css/style-min.css', null, $version, 'all' );
    wp_register_script( 'main', get_template_directory_uri() . '/assets/js/scripts-min.js', null, $version, true);
    // Localize the script with new data
    $translation_array = array(
    	'template_directory' => str_replace(get_home_url(), '', get_template_directory_uri()),
      'home_url' => get_home_url()
    );
    wp_localize_script( 'main', 'wordpress', $translation_array );

    // Enqueued script with localized data.
    wp_enqueue_script( 'main' );

}
add_action( 'wp_enqueue_scripts', 'crooked_scripts_styles' );

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
function disable_wp_emojicons() {
  // all actions related to emojis
  remove_action( 'admin_print_styles', 'print_emoji_styles' );
  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
  remove_action( 'wp_print_styles', 'print_emoji_styles' );
  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
  // filter to remove TinyMCE emojis
  add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
}
add_action( 'init', 'disable_wp_emojicons' );

function update_instafeed(){
  $raw = file_get_contents('https://www.instagram.com/crookedbevco/?__a=1');
  $data = JSON_decode($raw)->user->media->nodes;
  $feed = array();
  for($i = 0; $i <= 8; $i++) {
    $feed[] = array(
      'date' => date('l jS', $data[$i]->date),
      'caption' => clean_caption($data[$i]->caption),
      'image' => $data[$i]->thumbnail_src
    );
  }
  update_option('instagram_feed', $feed);
  return $feed;
}
function get_instafeed(){
  $current = get_option('instagram_feed', true);
  if(!is_array($current)) {
    $current = update_instafeed();
  }
  return $current;
}
if ( ! wp_next_scheduled( 'instafeed_cron' ) ) {
  wp_schedule_event( time(), 'hourly', 'instafeed_cron' );
}

add_action( 'instafeed_cron', 'update_instafeed' );

function clean_caption($caption){
  //Strip frequently used hashtags to declutter social feed
  $hashtags = array("crookedbevco", "crooked", "crookedalcoholicsoda", "alcoholicsoda", "vegan", "veganfriendly");

  foreach ($hashtags as &$word) {
      $word = '/\b' . preg_quote($word, '/') . '\b/';
  }
  $post_hashtags = preg_replace($hashtags, '', $caption);
  $string = str_replace(' with @instatoolsapp ・・・ ', ': ', $post_hashtags);
  $string = str_replace('# ', '', $string);
  $string = preg_replace('/ #$/', '', $string);
  return mb_strimwidth($string, 0, 160, "...");

}
function var_dump_pre($mixed = null) {
  echo '<pre>';
  var_dump($mixed);
  echo '</pre>';
  return null;
}

?>
