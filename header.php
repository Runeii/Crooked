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
    <?php echo file_get_contents(get_stylesheet_directory_uri() .'/assets/js/loader.html'); ?>
    <link href="https://fonts.googleapis.com/css?family=Fjalla+One%7COpen+Sans" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body class="<?php echo $world; ?> sunrise daytime">
  <div id="loading">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/crooked_logo.svg" alt="Crooked Beverage Co logo" />
  </div>
  <?php
    if(is_page_template('page-trade.php')) { ?>
     <nav id="nav">
       <i id="mobile-menu" class="fa fa-bars"></i>
       <div class="container">
         <a href="<?php echo get_home_url(); ?>/#whydifferent">Key Info</a>
         <a href="<?php echo get_home_url(); ?>/#wholesale">Wholesale</a>
         <a href="<?php echo get_home_url(); ?>" class="mobile_logo"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/crooked_logo.svg" alt="Crooked Beverage Co logo" /></a>
         <a href="<?php echo get_home_url(); ?>/#products">Range</a>
         <a href="<?php echo get_home_url(); ?>">Consumer</a>
       </div>
     </nav>
  <?php
    } else { ?>
     <nav id="nav">
       <i id="mobile-menu" class="fa fa-bars"></i>
       <div class="container">
         <a href="<?php echo get_home_url(); ?>/#" id="flavours_nav_home">flavours</a>
         <a href="<?php echo get_home_url(); ?>/#about" id="about_nav">About</a>
         <a href="<?php echo get_home_url(); ?>/#flavours" id="flavours_nav">flavours</a>
         <a href="<?php echo get_home_url(); ?>/#social">Social</a>
         <a href="<?php echo get_home_url(); ?>" class="mobile_logo"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/crooked_logo.svg" alt="Crooked Beverage Co logo" /></a>
         <a href="<?php echo get_home_url(); ?>/#contact">Contact</a>
         <a href="<?php echo get_home_url(); ?>/#stockists">Buy</a>
         <a href="<?php echo get_home_url(); ?>/trade">Trade</a>
       </div>
     </nav>
  <?php
      }
   ?>
  <header id="header" class="">
    <?php
      include get_stylesheet_directory() ."/world_data/selector.php";
    ?>
  </header>
