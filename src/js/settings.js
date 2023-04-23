export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    products: '#template-product',
    contactWidget: '#template-contact-widget',
  },

  containerOf: {
    home: '.home-wrapper',
    products: '.products-container',
    contact: '.contact-wrapper',
    carousel: '.main-carousel',
    pages: '#pages',
  },

  nav: {
    links: '.nav-wrapper a'
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
  },

  pages: {
    active: 'active',
  },

  nav: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
  contactWidget: Handlebars.compile(document.querySelector(select.templateOf.contactWidget).innerHTML),
};