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
<html class="no-js" lang="">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Crooked Beverage Co</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/assets/css/style-min.css">
    <?php wp_head(); ?>
</head>
<body class="<?php echo $world; ?>">
  <nav id="nav" class="hide">
    <div class="container">
      <a href="<?php echo $home_url; ?>#welcome">About</a>
      <a href="<?php echo $home_url; ?>#the_cans">Product</a>
      <a href="<?php echo $home_url; ?>#social">Social</a>
      <a href="<?php echo $home_url; ?>#contact">Contact</a>
      <a href="<?php echo $home_url; ?>#stockists">Buy</a>
      <a href="<?php echo $home_url; ?>trade">Trade</a>
    </div>
  </nav>
  <header id="header" class="">
    <?php
      foreach($layouts[$world] as $id => $element) {
        if($world === 'default') {
          echo '<img src="'. get_stylesheet_directory_uri() . $element .'" id="'. $id .'"/>';
        } else {
          echo '<img src="'. get_stylesheet_directory_uri() . $element .'" id="'. $world . '_' . $id .'"/>';
        }
      }
  ?>
  </header>
