import { select } from '../js/settings.js';

class About {
  constructor() {
    const thisAbout = this;

    thisAbout.initWidgets();
  }

  initWidgets() {
    const carouselElem = document.querySelector(select.containerOf.carousel);

    new Flickity(carouselElem, { /* eslint-disable-line */
      imagesLoaded: true,
      pageDots: false,
      percentPosition: false,
      autoPlay: true,
      prevNextButtons: false,
      freeScrollFriction: 0.015,
    });
  }
}

export default About;