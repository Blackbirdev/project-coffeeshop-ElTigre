import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor(element) {
    const thisContact = this;

    thisContact.render(element);
  }

  render(element) {
    const thisContact = this;

    const generatedHTML = templates.contactWidget();
    const generatedDom = utils.createDOMFromHTML(generatedHTML);
    const contactWrapper = document.querySelector(select.containerOf.contact);

    thisContact.dom = element;
    contactWrapper.appendChild(generatedDom);
  }
}

export default Contact;