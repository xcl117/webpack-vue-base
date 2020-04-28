import "@babel/polyfill";
import Vue from 'vue';
import './common.scss';

import App from './App.vue';

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
