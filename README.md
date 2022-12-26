# universal-render-server

### Usage

Make sure that whatever build system you are using (Webpack etc) is honoring the browser field in package.json. Then import the library and use it the same way you would use the browser native https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer#readme

### Example 

import Vue from 'vue';
import { renderToString } from 'vue/server-renderer'

const app = new Vue({
  template: `<div>Hello World</div>`,
});

const renderer = createRenderer();
renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log('html', html);
  // => <div data-server-rendered="true">Hello World</div>
});