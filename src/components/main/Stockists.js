import React, { Component } from 'react'
import asda from 'assets/img/logo/asda.png'
import morrisons from 'assets/img/logo/morrisons.png'
import headOfSteam from 'assets/img/logo/headofsteam.png'
import sainsburys from 'assets/img/logo/sainsburys.png'

import './stockists.scss'

class Stockists extends Component {
  render () {
    return (
      <section class="stockists">
        <h3 class="stockists__heading">Where to buy</h3>
        <p class="stockists__text">Crooked is available to buy from the following retailers, as well as many awesome and intriguing bars and venues. If your favourite bar doesn’t stock us yet, tell them to!</p>
        <div class="stockists__logo">
          <a href="http://www.sainsburys.co.uk/webapp/wcs/stores/servlet/SearchDisplayView?msg=&langId=44&storeId=10151&krypto=E1g1hsYoDk4X3XjnfKQiI%2FDKY6KXSU2Mh7q3jVf7CFwP0CPSk4GApR5tn1JAorqEDX88Y2D63STODgFe4ODR2XvXihAdCKdktDceqO0ZgoWOIMv97zeYeG1JQcZa4vKLY7sEwe%2FhkBwMWqBCwj9tChG2iDC%2BFgphZtPiMwfsZJ%2BqSozj7ZP%2Fzp8bwJfNXvNiauNj6S6MNUmyNtzGQY46VhXtb9WK9VjY7gbSWvMrQKfs2OarmxEBJa7xvhpen6HyO35pk9pzQVE49ph89k%2BeyrfUObWzmzZKKy3%2F4P3ZsxBF%2FYDBu6DUFm2ICNtFJrtH&ddkey=http%3ASearchDisplayView#langId=44&storeId=10151&catalogId=10123&categoryId=&parent_category_rn=&top_category=&pageSize=36&orderBy=RELEVANCE&searchTerm=crooked%20&beginIndex=0&hideFilters=true&categoryFacetId1=">
            <img src={sainsburys} alt="Sainsbury's logo" />
          </a>
        </div>
        <div class="stockists__logo">
          <a href="https://groceries.asda.com/search/crooked">
            <img src={asda} alt="Asda logo" />
          </a>
        </div>
        <div class="stockists__logo">
          <img src={morrisons} alt="Morrisons logo" />
        </div>
        <div class="stockists__logo">
          <img src={headOfSteam} alt="Head of Steam logo" />
        </div>
      </section>
    )
  }
}
export default Stockists