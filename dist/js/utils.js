// eslint-disable-next-line no-unused-vars
/* global Handlebars, dataSource */

const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function (htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

export default utils;