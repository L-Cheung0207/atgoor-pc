import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as commonFunction from '../commonFunction/commonFunction';

import EN from './en.js'
import TC from './tc.js'
import SC from './sc.js'

Vue.use(VueI18n)
//const locale = localStorage.getItem('locale') != null ? localStorage.getItem('locale').toUpperCase() : commonFunction.getBrowserLanguage().toLowerCase().indexOf("zh") > -1 ? 'TC':'EN';
const locale = "SC";

const fallbackLocale = 'TC';

const messages = {
  EN,
  TC,
  SC,
}
const i18n = new VueI18n({
  locale,
  fallbackLocale,
  messages
})

export default i18n



// WEBPACK FOOTER //
// ./src/language/index.js