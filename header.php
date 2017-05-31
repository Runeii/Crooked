<!DOCTYPE html>
<?php
  if(isset($_GET['world'])) {
    $world = $_GET['world'];
  } else {
    $world = 'default';
  }
?>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>Crooked Beverage Co</title>
    <meta name="description" content="">
    <meta content="True" name="HandheldFriendly">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="viewport" content="width=device-width">

    <link href="https://fonts.googleapis.com/css?family=Fjalla+One%7COpen+Sans" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body class="<?php echo $world; ?> sunrise daytime">
  <?php // echo file_get_contents(get_stylesheet_directory_uri() .'/assets/js/loader.html'); ?>
  <nav id="nav">
    <i id="mobile-menu" class="fa fa-bars"></i>
    <div class="container">
      <a href="<?php echo get_home_url(); ?>/#" id="products_nav">Products</a>
      <a href="<?php echo get_home_url(); ?>/#welcome_main" id="about_nav">About</a>
      <a href="<?php echo get_home_url(); ?>/#social">Social</a>
      <a href="<?php echo get_home_url(); ?>/#contact">Contact</a>
      <a href="<?php echo get_home_url(); ?>/#stockists">Buy</a>
      <a href="<?php echo get_home_url(); ?>/trade">Trade</a>
    </div>
  </nav>
  <header id="header" class="">
    <?php
      include get_stylesheet_directory() ."/world_data/selector.php";
    ?>
  </header>
