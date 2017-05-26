<?php
/*
Template name: Trade Page
*/
include(get_stylesheet_directory() . '/header.php'); ?>
<div class="container-fluid ie11wrap">
<main class="container-fluid">
<div class="container">
  <section id="welcome" class="row">
    <h2 class="col-12 lede"><?php echo $layouts['copy'][$world]['lede']; ?></h2>
    <div class="col-12 introduction">
      <?php echo $layouts['copy'][$world]['introduction']; ?>
    </div>
  </section>
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
          <td>Less sugar than traditional RTDs</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="wholesale" class="row">
    <h3 class="col-12">Wholesale</h3>
    <p class="col-12">Crooked is available at the following wholesalers</p>
    <div class="logo col-12 col-md-4 offset-md-4">
      <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo/Matthew Clark.png" />
    </div>
  </section>
  <section id="products" class="row">
    <h3 class="col-12">Product</h3>
    <p class="col-12">Crooked is available in the following flavours</p>
    <div class="container">
      <div class="row can">
        <div class="col-8 col-sm-4 col-md-3 offset-md-1 image">
          <img id="dayglo_2" data-world="dayglo" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_dayglo.png" />
        </div>
        <div class="col-12 col-sm-8 col-md-7 offset-md-1 trade_info">
          <h4>Dayglo Skies</h4>
          <p>Raspberry & Lime</p>
          <p>Refreshing, sparkling, alcoholic malted soda made with natural fruit flavours, fruit juice and a lightly hopped finish. Contains MALTED BARLEY and 2% raspberry juice from concentrate. All natural, no nasties.</p>
          <p>Alc 4.7% Vol 330ml</p>
          <div class="explore-button">
            <a href="#" target="dayglo_2">Explore <br /><span>Dayglo Stage</span></a>
          </div>
        </div>
        <div class="world_info">
          <p>Now travelling to</p>
          <h3>Dayglo Skies</h3>
          <p>Raspberry & Lime</p>
          <p class="loading">Loading...</p>
        </div>
      </div>
      <div class="row can">
        <div class="col-8 col-sm-4 col-md-3 image">
          <img id="midnight_2" data-world="midnight" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_midnight.png" />
        </div>
        <div class="col-12 col-sm-7 col-md-7 offset-sm-1 trade_info">
          <h4>Midnight Stage</h4>
          <p>Blood Orange & Passionfruit</p>
          <p>Refreshing, sparkling, alcoholic malted soda made with natural fruit flavours, fruit juice and a lightly hopped finish. Contains MALTED BARLEY and 4% passionfruit juice from concentrate. All natural, no nasties.</p>
          <p>Alc 4.7% Vol 330ml</p>
          <div class="explore-button">
            <a href="#" target="midnight_2">Explore <br /><span>Midnight Stage</span></a>
          </div>
        </div>
        <div class="world_info">
          <p>Now travelling to</p>
          <h3>Midnight Stage</h3>
          <p>Blood Orange & Passionfruit</p>
          <p class="loading">Loading...</p>
        </div>
      </div>
      <div class="row can">
        <div class="col-8 col-sm-4 col-md-3 offset-sm-1 image">
          <img id="mother_2" data-world="mother" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/product/can_mother.png" />
        </div>
        <div class="col-12 col-sm-7 col-md-7 offset-md-1 trade_info">
          <h4>Mother Moon</h4>
          <p>Peach & Pomegranate</p>
          <p>Refreshing, sparkling, alcoholic malted soda made with natural fruit flavours, fruit juice and a lightly hopped finish. Contains MALTED BARLEY and 2% peach juice from concentrate. All natural, no nasties.</p>
          <p>Alc 4.7% Vol 330ml</p>
          <div class="explore-button">
            <a href="#" target="mother_2">Explore <br /><span>Mother Moon</span></a>
          </div>
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
</div>
</main>
</div>
<?php include(get_stylesheet_directory() . '/footer.php'); ?>
