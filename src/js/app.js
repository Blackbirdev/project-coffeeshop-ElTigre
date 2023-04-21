import { select, settings } from './settings.js';
import Product from './components/Products.js';
import About from './components/About.js';

const app = {

  initProduct: function () {
    const thisApp = this;
    console.log('thisApp.data:', thisApp.data);

    for (let productData in thisApp.data.products) {
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function () {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then(rawResponse => rawResponse.json())
      .then(parsedResponse => {
        console.log('parsedResponse', parsedResponse);

        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;

        /* execute initMenu method */
        thisApp.initProduct();
      });
  },

  initAbout: function () {
    const thisApp = this;

    const aboutElem = document.querySelector(select.containerOf.home);
    thisApp.aboutElem = new About(aboutElem, thisApp);
  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initAbout();

  },
};

app.init();