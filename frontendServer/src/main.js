import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import Socket from "./store/modules/socket"

setInterval(() => {
  Socket.send(`Message Number f`)
}, 1000)



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
