import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueParticles from "vue-particles";

Vue.config.productionTip = false

library.add(faUserSecret)

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueParticles);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
