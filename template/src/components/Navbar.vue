<template>
  <nav class="navbar navbar-default">
    <a class="navbar-brand" href="/"> \{{$store.state.appTitle}} [\{{$root.locale}}]</a>
    <ul class="nav navbar-nav navbar-right">
      <li>
        <router-link to="/" class="nav-item nav-link"> Home </router-link>
      </li>
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Lang<span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="#" @click="lang('en')">English</a></li>
            <li><a href="#" @click="lang('fr')">French</a></li>
            <li><a href="#" @click="lang('es')">Spanish</a></li>
        </ul>
      </li>
      <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      lang (loc) {
        this.$root.locale = loc{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
