import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0};
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/marathon-list",
      name: "marathon-list",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/MarathonList.vue")
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Calendar.vue")
    }
  ]
});
