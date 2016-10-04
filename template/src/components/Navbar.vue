<template>
  <nav class="navbar navbar-default">
    <a class="navbar-brand" href="/"> \{{$store.state.appTitle}} </a>[\{{$root.locale}}]
    <ul class="nav navbar-nav navbar-right">
      <li>
        <router-link to="/" class="nav-item nav-link"> Home </router-link>
      </li>
      <li>
        <div class="dropdown">
          <button class="btn btn-link dropdown-toggle" type="button" id="langMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Lang <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="langMenu">
            <li><a href="#" @click="lang('en')">English</a></li>
            <li><a href="#" @click="lang('fr')">French</a></li>
            <li><a href="#" @click="lang('es')">Spanish</a></li>
          </ul>
        </div>
      </li>
      <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
    </ul>
  </nav>
</template>

<script>
  export default {
    methods: {
      lang ('loc') {
        this.$root.locale = loc{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
