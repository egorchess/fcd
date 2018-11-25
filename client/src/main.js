import Vue from 'vue';
import App from './App.vue';
import query from './libs/query';

Vue.config.productionTip = false;
window.query = query;

new Vue({
  render: h => h(App)
}).$mount('#app');
