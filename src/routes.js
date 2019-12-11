import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Member from "./components/Member.vue";

import store from "./store";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    beforeEnter(to, from, next) {
      if (store.state.token === null) {
        next();
      } else {
        next("/member");
      }
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    beforeEnter(to, from, next) {
      if (store.state.token === null) {
        next();
      } else {
        next("/member");
      }
    }
  },
  {
    path: "/member",
    name: "member",
    component: Member,
    beforeEnter(to, from, next) {
      if (store.state.username) {
        next();
      } else {
        next("/login");
      }
    }
  }
];
