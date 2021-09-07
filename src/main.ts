import Vue from 'vue';
import App from './app.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faSignOutAlt,
	faSignInAlt,
	faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

library.add(faSignInAlt);
library.add(faSignOutAlt);
library.add(faUserPlus);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

export default new Vue({
	render: (h) => h(App),
}).$mount('#app');
