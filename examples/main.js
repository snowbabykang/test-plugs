import Vue from 'vue'
import App from './App.vue'

import testPlugs from '../lib/index';
Vue.use(testPlugs);

// import { Star, Question } from './index';
// Vue.use(Star);
// Vue.use(Question);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
