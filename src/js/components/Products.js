import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.render();
  }

  render() {
    const thisProduct = this;

    const generatedHTML = templates.products(thisProduct.data);
    const productsWrapper = document.querySelectorAll(select.containerOf.product);

    thisProduct.elem = utils.createDOMFromHTML(generatedHTML);
    // thisProduct.elemTwo = utils.createDOMFromHTML(generatedHTML);

    productsWrapper[0].appendChild(thisProduct.elem);
    // productsWrapper[1].appendChild(thisProduct.elemTwo);
  }
}




export default Product;