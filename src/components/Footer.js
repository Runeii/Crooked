import React, {Component} from 'react'
import './footer.scss'

class Footer extends Component {
  render () {
    return (
      <footer class="footer" itemscope itemtype="http://schema.org/Organization">
        <div class="row justify-content-center">
          <div class="footer-box col-12 col-md-6 col-lg-12">
            <h3><span itemprop="name">CrookedBevCo</span></h3>
            <span>
              <a href="http://www.instagram.com/crookedbevco" title="Crooked Beverage Co on Instagram">
                <i class="fa fa-instagram"></i>
              </a>
              <a href="http://www.facebook.com/crookedbevco" title="Crooked Beverage Co on Facebook">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="http://www.twitter.com/crookedbevco" title="Crooked Beverage Co on Twitter">
                <i class="fa fa-twitter"></i>
              </a>
            </span>
          </div>
          <div class="footer-box col-12 col-lg-6">
            <h3>Address</h3>
            <p class="footer-copy" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
              <span itemprop="streetAddress">Global Brands Ltd.</span>
              <span itemprop="postalCode">S41 7JB, UK</span>
            </p>
          </div>
          <div class="footer-box col-12 col-lg-6">
            <h3>Contact</h3>
            <p class="footer-copy">
              <span itemprop="telephone"><a href="tel:+441246216000">+44 (0) 1246 216000</a></span>
              <span class="email" itemprop="email"><a href="mailto:hello@crookedbeverageco.com">&nbsp;</a></span>
            </p>
          </div>
          <div class="footer-box col-12 credits">
            <h3>Credits</h3>
            <p class="footer-copy">
              <span class="credit">Illustrations | Lisa O'Hara</span>
              <span class="credit">Crooked Beverage Co &copy; 2017</span>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer