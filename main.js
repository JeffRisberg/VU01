import Vue from 'vue'
import Vuex from 'vuex';
import store from './vuex/store'
import App from './App.vue'

Vue.use(Vuex);

const myApp = new Vue({
  store,
  template: '<App/>',
  components: { App }
});
myApp.$mount('#app');
