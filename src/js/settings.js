export const select = {
  templateOf: {
    products: '#template-product',
  },

  containerOf: {
    home: '.home-wrapper',
    product: '.product-wrapper',
    carousel: '.main-carousel',
    pages: '#pages',
  },

  product: {
    wrapper: '.product-card',
    name: '.product-title',
    description: '.product-description',
    roasting: '.product-roasting',
    intensity: '.product-intensity',
    image: '.product-image',
  },
};

export const classNames = {
  product: {
    rightCard: 'right',
    mostPopular: 'most-popular',
  }

};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
};