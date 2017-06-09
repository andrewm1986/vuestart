import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const state = {
  count: 0,
  appTitle: '{{ name }}',
  appVersion: '{{ version }}'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

const mutations = {
  INCREMENT(state) { state.count++ }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const store = new Vuex.Store({
  state,
  mutations,
  actions{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default store{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
