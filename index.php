<?php include(get_stylesheet_directory() . '/header.php'); ?>
<main class="container">
  <section id="welcome" class="row">
    <h2 class="col-12 lede"><?php echo $layouts['copy'][$world]['lede']; ?></h2>
    <div class="col-12 introduction">
      <?php echo $layouts['copy'][$world]['introduction']; ?>
    </div>
  </section>
  <section id="the_cans" class="row">
    <div class="row justify-content-around">
      <div class="can col-12 col-sm-3">
        <div class="image">
          <img id="dayglo_1" world="dayglo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_dayglo.png" />
        </div>
        <div class="explore-button">
          <a href="#" target="dayglo_1">Explore <br /><span>Dayglo Skies</span></a>
        </div>
        <div class="world_info">
          <p>Now travelling to</p>
          <h3>Dayglo Skies</h3>
          <p>Raspberry & Lime</p>
          <p class="loading">Loading...</p>
        </div>
      </div>
      <div class="can col-12 col-sm-3">
        <div class="image">
          <img id="midnight_1" world="midnight" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_midnight.png" />
        </div>
        <div class="explore-button">
          <a href="#" target="midnight_1">Explore <br /><span>Midnight Stage</span></a>
        </div>
        <div class="world_info">
          <p>Now travelling to</p>
          <h3>Midnight Stage</h3>
          <p>Blood Orange & Passionfruit</p>
          <p class="loading">Loading...</p>
        </div>
      </div>
      <div class="can col-12 col-sm-3">
        <div class="image">
          <img id="mother_1" world="mother" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_mother.png" />
        </div>
        <div class="explore-button">
          <a href="#" target="mother_1">Explore <br /><span>Mother Moon</span></a>
        </div>
        <div class="world_info">
          <p>Now travelling to</p>
          <h3>Mother Moon</h3>
          <p>Peach & Pomegranate</p>
          <p class="loading">Loading...</p>
        </div>
      </div>
    </div>
  </section>
  <section id="social" class="row">
    <h3 class="col-12">Join us</h3>
    <div class="col-12 social-icons">
      <a href="http://www.facebook.com/crookedbevco" title="Crooked Beverage Co on Facebook">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="http://www.twitter.com/crookedbevco" title="Crooked Beverage Co on Twitter">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="http://www.instagram.com/crookedbevco" title="Crooked Beverage Co on Instagram">
        <i class="fa fa-instagram"></i>
      </a>
    </div>
    <?php
      if ( have_posts() ) { while ( have_posts() ) { the_post(); ?>
        <div class="col-12 col-sm-6 col-lg-4 post">
          <h4><?php the_title(); ?></h4>
          <p class="font_small"><?php echo get_excerpt(); ?></p>
          <?php the_post_thumbnail('image_feed'); ?>
        </div>
    <?php  } }
    ?>
  </section>
  <section id="contact" class="row">
    <h3 class="col-12">Get in touch</h3>
    <p class="col-12">We would love to hear from you</p>
    <?php echo do_shortcode('[contact-form-7 id="40" title="Get in touch"]'); ?>
  </section>
  <section id="stockists" class="row">
    <h3 class="col-12">Where to buy</h3>
    <p class="col-12">Crooked is available to buy from the following retailers, as well as many awesome and intriguing bars and venues. If your favourite bar doesn’t stock us yet, tell them to!</p>
    <div class="logo col-12 col-md-4 offset-md-2">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/sainsburys.png" />
    </div>
    <div class="logo col-12 col-md-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/asda.png" />
    </div>
  </section>
</main>
<?php get_footer(); ?>
