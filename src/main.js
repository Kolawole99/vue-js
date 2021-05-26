import Vue from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./_router";
import store from "./_store";

import Default from "./layout/Default.vue";
import Alternative from "./layout/Alternative.vue";
import helpers from "./_helpers/index";
let { DOMAIN, USER } = helpers;

axios.defaults.baseURL = DOMAIN;
axios.defaults.headers.common["Authorization"] = USER;
// eslint-disable-next-line
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

Vue.component("Alternative-layout", Alternative);
Vue.component("Default-layout", Default);

Vue.use(axios);
Vue.use(store);
Vue.use(router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
