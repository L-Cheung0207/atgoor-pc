// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import i18n from "./language";
console.log(i18n);

import VCalendar from "v-calendar"; // 引入日历插件

import * as Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";
Vue.prototype.$Cesium = Cesium;
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

new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>",
});
