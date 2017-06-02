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
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://crookedbeverageco.com/favicons/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://crookedbeverageco.com/favicons/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://crookedbeverageco.com/favicons/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://crookedbeverageco.com/favicons/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://crookedbeverageco.com/favicons/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://crookedbeverageco.com/favicons/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://crookedbeverageco.com/favicons/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://crookedbeverageco.com/favicons/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="https://crookedbeverageco.com/favicons/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="https://crookedbeverageco.com/favicons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="https://crookedbeverageco.com/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="https://crookedbeverageco.com/favicons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="https://crookedbeverageco.com/favicons/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="Crooked Beverage Co"/>
    <meta name="msapplication-TileColor" content="#BLACK" />
    <meta name="msapplication-TileImage" content="https://crookedbeverageco.com/favicons/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="https://crookedbeverageco.com/favicons/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="https://crookedbeverageco.com/favicons/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="https://crookedbeverageco.com/favicons/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="https://crookedbeverageco.com/favicons/mstile-310x310.png" />
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
