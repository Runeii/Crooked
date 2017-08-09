<?php include(get_stylesheet_directory() . '/header.php'); ?>
<div class="container-fluid ie11wrap">
<main class="container-fluid landing-page">
<div class="container">
  <section id="about" class="row">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <div class="col-12 introduction">
      <?php the_content(); ?>
    </div>
    <!--
    Note: Any data capture form would go in this slot
    <section id="contact" class="row">
      <?php //echo do_shortcode('[contact-form-7 id="'. get_post_meta( $post->ID, 'data_capture_form_id', true ) . '"]'); ?>
    </section> -->
    <?php endwhile; endif; ?>
  </section>
</div>
</main>
</div>
<?php include(get_stylesheet_directory() . '/footer.php'); ?>
