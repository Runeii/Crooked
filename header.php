<!doctype html>
<?php
$home_url = 'http://localhost:3000/';
$worlds_file = file_get_contents( get_stylesheet_directory_uri() . "/worlds.json");
$layouts = json_decode($worlds_file, true);
if(isset($_GET['world'])) {
  $world = $_GET['world'];
} else {
  $world = 'default';
}
?>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Crooked Beverage Co</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One%7COpen+Sans" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body class="<?php echo $world; ?>">
  <?php echo file_get_contents(get_stylesheet_directory_uri() .'/assets/js/loader.html'); ?>
  <img class="crooked_logo_mobile" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/crooked_logo.svg" alt="Crooked Brewing Co logo" />
  <nav id="nav">
    <i id="mobile-menu" class="fa fa-bars"></i>
    <div class="container">
      <a href="<?php echo $home_url; ?>#welcome">About</a>
      <a href="<?php echo $home_url; ?>#the_cans">Product</a>
      <a href="<?php echo $home_url; ?>#social">Social</a>
      <a href="<?php echo $home_url; ?>" class="logo_holder">
        <img class="crooked_logo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/crooked_logo.svg" alt="Crooked Brewing Co logo" />
      </a>
      <a href="<?php echo $home_url; ?>#contact">Contact</a>
      <a href="<?php echo $home_url; ?>#stockists">Buy</a>
      <a href="<?php echo $home_url; ?>trade">Trade</a>
    </div>
  </nav>
  <header id="header" class="">
    <?php
      foreach($layouts[$world] as $id => $element) {
        if($world === 'default') {
          $name = $id;
        } else {
          $name = $world . '_' . $id;
        }
        //Test if we've set a mobile alternative
        if(is_array($element)) {
          echo '
          <picture id="'. $name .'">
            <source
              media="all and (orientation: landscape)"
              srcset="'. get_stylesheet_directory_uri() . $element[0] .'" >
            <source
              media="all and (orientation: portrait)"
              srcset="'. get_stylesheet_directory_uri() . $element[1] .'">
            <img
              srcset="'. get_stylesheet_directory_uri() . $element[1] .'" alt="'. $id .' asset for '. $world .' world" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          </picture>';
        } else {
          echo '<picture id="'. $name .'">
            <source
              media="all and (orientation: landscape)"
              srcset="'. get_stylesheet_directory_uri() . $element .'" class="landscape_only">
            <source
              media="all and (orientation: portrait)"
              srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
            <img
              srcset="'. get_stylesheet_directory_uri() . $element .'" class="landscape_only" alt="'. $id .' asset for '. $world .' world" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          </picture>';
        }
      }
  ?>
  </header>
