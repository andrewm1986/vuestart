{{#if_eq build "runtime"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

// =============== Base libraries integration ==================
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// ===== Bootstrap components integration (JQuery needed) ======
window.$ = window.jQuery = require('jquery'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
require('bootstrap-sass'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// ======================= Base Component ======================
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// ======================== Vue Instance =======================
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
