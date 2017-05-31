<?php include(get_stylesheet_directory() . '/header.php'); ?>
<div class="container-fluid ie11wrap">
<main class="container-fluid">
<div class="container">
  <section id="welcome_main" class="row">
    <h2 class="col-12 lede">We seek to take your expectations and turn them on their head</h2>
    <div class="col-12 introduction">
      <p>In the shadow of the Crooked Spire we craft natural alcoholic sodas packed full of fruity flavour and just the right amount of sweetness.</p>
      <p>Crooked Beverage Co was borne out of a desire to create something truly new and truly different. A whole lot of time, experimentation and passion have gone into these drinks, alongside all natural ingredients!</p>
      <p>We've partnered with the extremely talented Lisa O'Hara to create the amazing illustrations on each can. Her inimitable style perfectly brings the Crooked worlds to life.</p>
      <p>Each of the flavours is modelled around a different dimension. Let us take you on a journey through our worlds.</p>
    </div>
  </section>
  <div id="cans_main" class="row">
    <div id="dayglo_slot" class="can_tooltip col-6 col-md-4 col-lg-3">
      <a href="#" id="dayglo_eye" class="can_eye single_world" data-world="dayglo"></a>
      <img id="dayglo_can" class="can_image" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_dayglo.png" alt="Crooked Dayglo Skies can" />
    </div>
    <div id="midnight_slot" class="can_tooltip col-6 col-md-4 col-lg-3">
      <a href="#" id="midnight_eye" class="can_eye single_world" data-world="midnight"></a>
      <img id="midnight_can" class="can_image"  src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_midnight.png" alt="Crooked Midnight Stage can" />
    </div>
    <div id="mother_slot" class="can_tooltip col-6 col-md-4 col-lg-3">
      <a href="#" id="mother_eye" class="can_eye single_world" data-world="mother"></a>
      <img id="mother_can" class="can_image" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_mother.png" alt="Crooked Mother Moon can" />
    </div>
  </div>
  <section id="social" class="row">
    <h3 class="col-12">Join us</h3>
    <div class="col-12 social-icons">
      <a href="http://www.instagram.com/crookedbevco" title="Crooked Beverage Co on Instagram">
        <i class="fa fa-instagram"></i>
      </a>
      <a href="http://www.facebook.com/crookedbevco" title="Crooked Beverage Co on Facebook">
        <i class="fa fa-facebook"></i>
      </a>
      <a href="http://www.twitter.com/crookedbevco" title="Crooked Beverage Co on Twitter">
        <i class="fa fa-twitter"></i>
      </a>
    </div>
    <?php
    $feed = get_instafeed();
    foreach($feed as $post) { ?>
        <div class="col-12 col-sm-6 col-lg-4 post">
          <img data-original="<?php echo $post['image']; ?>" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="Instagram post by @CrookedBevCo" />
          <p class="font_small"><?php echo $post['caption']; ?></p>
        </div>
    <?php
    }
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
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/sainsburys.png" alt="Sainsbury's logo" />
    </div>
    <div class="logo col-12 col-md-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/asda.png" alt="Asda logo" />
    </div>
  </section>
</div>
</main>
</div>
<?php get_footer(); ?>
