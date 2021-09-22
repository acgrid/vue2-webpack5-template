// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './app.vue'
import { Workbox } from 'workbox-window'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import './assets/images/1.ico'

library.add(faSignInAlt)
library.add(faSignOutAlt)
library.add(faUserPlus)

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

if (process.env.NODE_ENV === 'production') {
  const wb = new Workbox('./sw.js')
  wb.register()
}

export default new Vue({
  render: (h) => h(App),
}).$mount('#app')
