import Vue from 'vue';


import '../node_modules/material-icons';
import '@/assets/css/tailwind.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

export const EventBus = new Vue();



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
