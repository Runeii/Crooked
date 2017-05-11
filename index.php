<?php include('./header.php'); ?>
<main class="container">
  <section id="welcome" class="row">
    <h2 class="col-12 lede"><?php echo $layouts['copy'][$world]['lede']; ?></h2>
    <div class="col-12 introduction">
      <?php echo $layouts['copy'][$world]['introduction']; ?>
    </div>
  </section>
  <section id="the_cans" class="row">
    <div class="row justify-content-between">
      <div class="can col-3">
        <img id="dayglo_1" world="dayglo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_dayglo.png" />
        <div class="explore-button">
          <a href="#" target="dayglo_1">Explore <br /><span>Dayglo Skies</span></a>
        </div>
      </div>
      <div class="can col-3">
        <img id="midnight_1" world="midnight" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_midnight.png" />
        <div class="explore-button">
          <a href="#" target="midnight_1">Explore <br /><span>Midnight Stage</span></a>
        </div>
      </div>
      <div class="can col-3">
        <img id="mother_1" world="mother" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_mother.png" />
        <div class="explore-button">
          <a href="#" target="mother_1">Explore <br /><span>Mother Moon</span></a>
        </div>
      </div>
    </div>
  </section>
  <section id="social" class="row">
    <h3 class="col-12">Join us</h3>
    <p class="col-12">Join us by following our journey</p>
    <div class="col-12 social-icons">
      <i class="fa fa-instagram"></i>
      <i class="fa fa-facebook"></i>
      <i class="fa fa-twitter"></i>
    </div>
  </section>
  <section id="stockists" class="row">
    <h3 class="col-12">Where to buy</h3>
    <p class="col-12">Crooked is available at the following convenience stores</p>
    <div class="logo col-12 col-md-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/tesco.png" />
    </div>
    <div class="logo col-12 col-md-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/sainsburys.png" />
    </div>
    <div class="logo col-12 col-md-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/asda.png" />
    </div>
  </section>
  <section id="contact" class="row">
    <h3 class="col-12">Get in touch</h3>
    <p class="col-12">Say hello....send us a message, tell us you love us</p>
  </section>
</main>
<?php include('./footer.php'); ?>
