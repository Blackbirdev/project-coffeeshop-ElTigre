import { select, settings, classNames } from './settings.js';
import Product from './components/Products.js';
import About from './components/About.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* change URL hash */
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

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

        thisApp.data.products = parsedResponse;

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