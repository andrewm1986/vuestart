<template>
  <div class="well">
    <div class="row">
      <div class="col-sm-5 text-right">
        <img class="logo" src="../assets/logo.png">
      </div>
      <div class="col-sm-7 text-left">
        <h1>\{{$root.t('hello.msg','en')}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$root.addTranslation('hello', require('../i18n/Hello.js')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1
    color: #42b983
  .logo
    width: 80px
    height: 80px
</style>
