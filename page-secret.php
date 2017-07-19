<?php
/*
Template name: Branding free page
*/
$world_layout = get_post_meta($post->ID, 'world_layout', true);
$world = 'default';
?>
<!DOCTYPE html>
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
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="manifest" href="/favicons/manifest.json">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/favicons/favicon.ico">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <?php wp_head(); ?>
</head>
<body class="<?php echo $world . ' ' . $world_layout; ?> sunrise daytime">
  <header id="header" class="">
    <?php
      include get_stylesheet_directory() ."/world_data/selector.php";
    ?>
  </header>

<div class="container-fluid ie11wrap">
<main class="container-fluid landing-page">
<div class="container">
  <section id="about" class="row">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="col-12 introduction">
      <?php the_content(); ?>
      <?php echo mcw_counter(); ?>
    </div>
    <section id="contact" class="row">
      <?php if(mcw_remaining_samples() > 0) {
        echo do_shortcode('[contact-form-7 id="'. get_post_meta( $post->ID, 'data_capture_form_id', true ) . '"]');
      } else {
        echo '<p>Sorry all </p>';
      }
      ?>
    </section>
    <?php endwhile; endif; ?>
  </section>
</div>
</main>
</div>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.1.1.min.js"><\/script>')</script>
<?php wp_footer(); ?>
<script type="text/javascript">
  document.documentElement.classList.add('js');
  document.documentElement.classList.remove('no-js');
  launch_page();
  document.documentElement.classList.add('onpage');
</script>
</body>
</html>
