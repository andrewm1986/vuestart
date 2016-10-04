<template>
  <div id="app" class="container text-center">
    <br />
    <navbar></navbar>
    <hr />
    <router-view></router-view>
    <p> \{{$root.t('welcome.msg')}} </p>
    <p>
      \{{$root.t('welcome.phrase1')}}
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">\{{$root.t('welcome.doc')}}</a>.
      \{{$root.t('welcome.phrase2')}}
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> \{{$root.t('welcome.and')}}
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      \{{$root.t('welcome.phrase3')}}
      <a href="https://github.com/ssouron/vuestart" target="_blank">\{{$root.t('welcome.repository')}}</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>

<script>
import Navbar from './components/Navbar'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  components: { Navbar{{#if_eq lintConfig "airbnb"}},{{/if_eq}} }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="sass">

  // Bootstrap
  $icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/';
  $link-color: #42b983;
  $brand-success: #42b983;
  @import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap';

  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  //some styling adaptations
  h1
    color: #42b983
  p
    text-align: justify
  .logo
    width: 100px
    height: 100px
</style>
