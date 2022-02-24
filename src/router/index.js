import Vue from "vue";
import Router from "vue-router";
import hkatg from "@/pages/hkatg";
import calendar from "@/pages/calendar";
import simpleScene from "@/pages/simpleScene";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hkatg",
      component: hkatg,
    },
    // {
    //   path: '/simpleScene',
    //   name: 'simpleScene',
    //   component: simpleScene,
    // },
    // {
    //   path: '/calendar',
    //   name: 'calendar',
    //   component: calendar,
    // },
  ],
});

// WEBPACK FOOTER //
// ./src/router/index.js
