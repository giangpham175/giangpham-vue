import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueToastr from "vue-toastr";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueToastr);
Vue.use(VueSweetalert2);

import App from "./App.vue";
import store from "./store.js";
import routes from "./routes.js";

import filters from "./filters.js";
// add global filter
for (var filter in filters) {
  if (filters.hasOwnProperty(filter)) {
    Vue.filter(filter, filters[filter]);
  }
}

new Vue({
  store: new Vuex.Store(store),
  router: new VueRouter({ mode: "history", routes: routes }),
  render: h => h(App)
}).$mount("#app");
