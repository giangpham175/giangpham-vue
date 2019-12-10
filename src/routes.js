import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Member from "./components/Member.vue";

import store from "./store";

export default [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
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
