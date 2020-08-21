import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {store} from './store/index'
import { VueShowdown } from 'vue-showdown'


import VueGtag from "vue-gtag";

Vue.config.productionTip = false

library.add(faUserSecret)

import KProgress from 'k-progress';
import router from './router'
Vue.component('k-progress', KProgress);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('VueShowdown', VueShowdown)

Vue.use(VueGtag, {
    config: { id: "UA-146465351-1" }
});



new Vue({
  vuetify,
  router,
    store: store,
  render: h => h(App)
}).$mount('#app')
