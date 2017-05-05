<!doctype html>
<?php
$worlds_file = file_get_contents("worlds.json");
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
        <link rel="stylesheet" href="assets/css/style-min.css">
    </head>
    <body class="<?php echo $world; ?>">
      <nav>
        <div class="container">
          <a href="">Product</a>
          <a href="">About</a>
          <a href="">Social</a>
          <a href="">Buy</a>
          <a href="">Contact</a>
          <a href="">Trade</a>
        </div>
      </nav>
      <header id="header" class="">
        <?php
          foreach($layouts[$world] as $id => $element) {
            if($world === 'default') {
              echo '<img src="'. $element .'" id="'. $id .'"/>';
            } else {
              echo '<img src="'. $element .'" id="'. $world . '_' . $id .'"/>';
            }
          }
      ?>
      </header>
      <main class="container">
        <section id="welcome" class="row">
          <h2 class="col-12 lede"><?php echo $layouts['copy'][$world]['lede']; ?></h2>
          <div class="col-12 introduction">
            <?php echo $layouts['copy'][$world]['introduction']; ?>
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
        <section id="contact" class="row">
          <h3 class="col-12">Get in touch</h3>
          <p class="col-12">Say hello....send us a message, tell us you love us</p>
        </section>
        <section id="footer-cans" class="row">
          <div class="can col-3 offset-md-1">
            <img id="dayglo_1" world="dayglo" src="/assets/img/product/can_dayglo.png" />
            <div class="explore-button">
              <a href="#" target="dayglo_1">Explore <br /><span>Dayglo Skies</span></a>
            </div>
          </div>
          <div class="can col-3 offset-md-1">
            <img id="midnight_1" src="/assets/img/product/can_midnight.png" />
            <div class="explore-button">
              <a href="#" target="midnight_1">Explore <br /><span>Midnight Stage</span></a>
            </div>
          </div>
          <div class="can col-3 offset-md-1">
            <img id="mother_1" src="/assets/img/product/can_mother.png" />
            <div class="explore-button">
              <a href="#" target="mother_1">Explore <br /><span>Mother Moon</span></a>
            </div>
          </div>
        </section>
        <section id="stockists" class="row">
          <h3 class="col-12">Where to buy</h3>
          <p class="col-12">Crooked is available at the following convenience stores</p>
          <div class="logo col-12 col-md-4">
            <img src="/assets/img/logo/tesco.png" />
          </div>
          <div class="logo col-12 col-md-4">
            <img src="/assets/img/logo/sainsburys.png" />
          </div>
          <div class="logo col-12 col-md-4">
            <img src="/assets/img/logo/asda.png" />
          </div>
        </section>
        <!-- Trade -->
        <section id="whydifferent" class="row">
          <h3 class="col-12">Crooked crib sheet</h3>
          <p class="col-12">The key info about our Crooked liquid</p>
          <table>
            <thead>
              <tr>
                <th></th>
                <th><h4>Crooked Beverage co</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABV</td>
                <td>4.7%</td>
              </tr>
              <tr>
                <td>Flavour</td>
                <td>Malt finish with hoppy notes</td>
              </tr>
              <tr>
                <td>Ingredients</td>
                <td>No artificial sweeteners or preservatives, all natural & flavours</td>
              </tr>
              <tr>
                <td>Sweetness</td>
                <td>Less sugar than Traditional RTDs</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section id="wholesale" class="row">
          <h3 class="col-12">Wholesale</h3>
          <p class="col-12">Crooked is available at the following wholesalers</p>
          <div class="logo col-12 col-md-4 offset-md-4">
            <img src="/assets/img/logo/Matthew Clark.png" />
          </div>
        </section>
        <section id="products" class="row">
          <h3 class="col-12">Product</h3>
          <p class="col-12">Crooked is available in the following flavours</p>
          <div class="container">
            <div class="row">
              <div class="col-3 offset-1">
                <img src="/assets/img/product/can_dayglo.png" />
              </div>
              <div class="col-7 offset-1">
                <h4>Dayglo Skies</h4>
                <p>Raspberry & Lime</p>
                <p>Refreshing, sparkling, alcoholic malted soda made with natural fruit flavours, fruit juice and a lightly hopped finish. Contains MALTED BARLEY and 2% raspberry juice from concentrate. Nothing artificial.</p>
                <p>Alc 4.7% Vol 330ml</p>
                <div class="explore-button">
                  <a href="place">Explore <br /><span>Dayglo Stage</span></a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3 offset-1">
                <img src="/assets/img/product/can_midnight.png" />
              </div>
              <div class="col-7 offset-1">
                <h4>Midnight Stage</h4>
                <p>Blood Orange & Passionfruit</p>
                <p>Refreshing, sparkling, alcoholic malted soda made with natural fruit flavours, fruit juice and a lightly hopped finish. Contains MALTED BARLEY and 4% passionfruit juice from concentrate. Nothing artificial.</p>
                <p>Alc 4.7% Vol 330ml</p>
                <div class="explore-button">
                  <a href="place">Explore <br /><span>Midnight Stage</span></a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-3 offset-1">
                <img src="/assets/img/product/can_mother.png" />
              </div>
              <div class="col-7 offset-1">
                <h4>Mother Moon</h4>
                <p>Peach & Pomegranate</p>
                <p>Refreshing, sparkling, alcoholic malted soda made with natural fruit flavours, fruit juice and a lightly hopped finish. Contains MALTED BARLEY and 2% peach juice from concentrate. Nothing artificial.</p>
                <p>Alc 4.7% Vol 330ml</p>
                <div class="explore-button">
                  <a href="place">Explore <br /><span>Mother Moon</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="container-fluid" itemscope itemtype="http://schema.org/Organization">
        <div class="footer-box">
          <h3><span itemprop="name">CrookedBevCo</span></h3>
          <i class="fa fa-facebook"></i>
          <i class="fa fa-twitter"></i>
          <i class="fa fa-instagram"></i>
        </div>
        <div class="footer-box">
          <h3>Address</h3>
          <p class="footer-copy" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <span itemprop="streetAddress">Global Brands Ltd.</span><br />
            <span itemprop="postalCode">S41 7JB, UK</span>
          </p>
        </div>
        <div class="footer-box">
          <h3>Contact</h3>
          <p class="footer-copy">
            <span itemprop="telephone"><a href="tel:+441246245999">+44 (0) 1246 245999</a></span><br />
            <span itemprop="email"><a href="mailto:hello@crookedbeverageco.com">hello@crookedbeverageco.com</a></span>
          </p>
        </div>
        <div class="footer-box">
          <h3>Credits</h3>
          <p class="footer-copy">
            Illustrations | Lisa O'Hara<br />
            Crooked Beverage Co &copy; 2017
          </p>
        </div>
      </footer>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
      <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-3.1.1.min.js"><\/script>')</script>
      <script src="assets/js/scripts-min.js"></script>
      <script id="__bs_script__">//<![CDATA[
  document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.6'><\/script>".replace("HOST", location.hostname));
//]]></script>
    </body>
</html>
