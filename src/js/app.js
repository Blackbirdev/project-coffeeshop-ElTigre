import{select} from './settings.js';
import About from './components/About.js';

const app = {
  
  initAbout: function () {
    const thisApp = this;

    const aboutElem = document.querySelector(select.containerOf.home);
    thisApp.aboutElem = new About(aboutElem, thisApp);
  },
  init: function () {
    const thisApp = this;

    thisApp.initAbout();
  },
};

app.init();