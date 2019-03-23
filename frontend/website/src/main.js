import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json';

Vue.prototype.$http = axios; //so it can be used globally by calling $http
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
    router,
}).$mount('#app')

Vue.use(VueRouter);

