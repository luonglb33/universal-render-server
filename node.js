if (typeof window !== 'undefined') {
  throw new Error(
    'The window object is availible. Are you trying to run the module in the Browser?'
  );
}

const VueServerRenderer = require('vue-server-renderer');

module.exports = VueServerRenderer;
