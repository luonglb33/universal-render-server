if (typeof window !== 'undefined') {
  throw new Error(
    'The window object is availible. Are you trying to run the module in the Browser?'
  );
}

const { JSDOM } = require('jsdom');
const DOMParser = new JSDOM();

module.exports = DOMParser;
