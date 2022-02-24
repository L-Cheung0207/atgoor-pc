// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import i18n from "./language";

import VCalendar from "v-calendar"; // 引入日历插件

Vue.use(VCalendar, {
  componentPrefix: "vc",
});

import "@/style.css";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  "a-scene",
  "a-assets",
  "a-sky",
  "a-camera",
  "a-cursor",
  "a-animation",
  "a-entity",
  "a-sphere",
  "a-image",
  "a-plane",
  "a-box",
];

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>",
});

// WEBPACK FOOTER //
// ./src/main.js
