<?php
//
//  MCW promo landing page (19th July 2017)
//
$total_mcw_samples = 150;

function mcw_remaining_samples(){
  global $total_mcw_samples;
  $val = $total_mcw_samples - get_option( MCW_COUNTER);
  return $val;
}
add_action('wpcf7_before_send_mail', 'MCW_counter_check');
function MCW_counter_check($wpcf7_data) {
  global $total_mcw_samples;
  if(mcw_remaining_samples() == 0) {
    $wpcf7_data->skip_mail = true;
    return false;
  } else {
    $count = get_option( MCW_COUNTER, 0) + 1;
    update_option( MCW_COUNTER, $count);
    return true;
  }
}
function mcw_counter() {
  $digits = str_split(mcw_remaining_samples());
  $output = '<h3 class="counter">';
  foreach($digits as $digit){
    $output .= '<span class="counter-digit">' . $digit . '</span>';
  }
  $output .= '<br />samples remaining</h3>';
  return $output;
}


//
//  Revolutions microsite (28th July 2017) - CANCELLED
//
/*
Used to register roles (one off)
$revadmin = add_role( 'revolution_admin', 'Revolution Admin', array(
    'read' => true,
    'edit_users' => true
));
$revbranch = add_role( 'revolution_branch', 'Revolution Branch', array(
    'read' => true
));

add_action('admin_menu', 'remove_admin_menu_links');
function remove_admin_menu_links(){
    $user = wp_get_current_user();
    if( $user && $user->ID == 2) {
      remove_menu_page('tools.php');
      remove_menu_page('profile.php');
    	remove_menu_page( 'edit.php' );
    	remove_menu_page( 'edit-comments.php' );
    	remove_menu_page( 'index.php' );
    }
}

function crooked_promos_styles() {
    wp_enqueue_style( 'promos', get_stylesheet_directory_uri() . '/assets/css/promos-min.css', null, '0.1', 'all' );
}
add_action( 'admin_enqueue_scripts', 'crooked_promos_styles' );
add_action( 'wp_enqueue_scripts', 'crooked_promos_styles' );


function rev_admin_menu() {
	add_menu_page( 'Revolution Promo management', 'Revolution Promo', 'edit_users', 'revolution_admin', 'rev_admin_page', 'none');
}
add_action( 'admin_menu', 'rev_admin_menu' );

function rev_admin_page(){
	?>
	<div class="wrap">
  	<h2>Revolution Campaign management</h2>
    <div class="setting-panel">
  	   <h3>
         <span class="dashicons dashicons-admin-users"></span> Update Participants
       </h3>
       <div class="body">
         <?php rev_users(); ?>
       </div>
    </div>
    <div class="setting-panel">
  	   <h3>
         <span class="dashicons dashicons-awards"></span> Manage Prizes
       </h3>
       <div class="body">
        <?php rev_prizes(); ?>
      </div>
    </div>
	</div>
	<?php
}
function rev_users(){
  $users = get_users(array(
    //'role' => 'revolution_branch'
  ));?>
  <table>
    <tr>
      <th>Name</th>
      <th>Region</th>
      <th>Level</th>
      <th>Sales</th>
      <th>Points</th>
    </tr>
  <?php
  foreach($users as $user) { ?>
    <tr>
      <td><?php echo $user->user_nicename; ?></td>
      <td><?php get_user_meta($user->ID, 'rev_region', true); ?></td>
      <td><?php get_user_meta($user->ID, 'rev_level', true); ?></td>
      <td><?php get_user_meta($user->ID, 'rev_sales', true); ?></td>
      <td><input type="number" value="<?php get_user_meta($user->ID, 'rev_points', true); ?>" /></td>
    </tr>
  <?php
  } ?>
  </table>
  <button type="submit" form="rev_update_users">Save changes</button>

<?php
}
// Register Custom Post Type
function rev_prizes() {
	$args = array(
		'label'                 => 'Prize',
		'description'           => 'Prizes for Revolution Campaign',
    'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields', ),
    'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,
		'exclude_from_search'   => true,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'revolution_prizes', $args );

}
add_action( 'init', 'rev_prizes', 0 );
*/
