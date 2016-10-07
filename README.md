# vuestart boilerplate v0.4

A full-featured Vue 2.0 + Webpack setup with hot-reload, lint-on-save, unit testing, CSS & SASS extraction.

This template has been build over a robust one (['webpack' from vuejs-templates](https://github.com/vuejs-templates/webpack)) designed to work for [vue-cli](https://github.com/vuejs/vue-cli), and several addins and libraries were included inside it to work out-of-the-box :
* [Vue Resource](https://github.com/vuejs/vue-resource) for Ajax and Cross domain requests to deal with APIs and Web services.
* [Vue Router](https://github.com/vuejs/vue-router) for app routing without browser reloading.
* [VueX](https://github.com/vuejs/vuex/) for application state and events store management.
* [Vue Translate](https://github.com/javisperez/vuetranslate) for internationalisation.
* [Bootstrap](http://getbootstrap.com/) for styling, in its SASS version, with components and icons.
* [Font Awesome](http://fontawesome.io/) also in SASS version, for easy-to-use static and animated icons.

## Documentation

* [For the base template](http://vuejs-templates.github.io/webpack): common questions specific to the base template about using the devellopments tools and others are answered and each part is described in greater detail.
* [For Vue 2.0](http://rc.vuejs.org/guide/): general information about how to work with Vue, not specific to this template.
* For the included addins and libraries, you can find their respective documentations at each one of the links showed above.

## Basic Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init ssouron/vuestart my-project
$ cd my-project
$ npm install
$ npm run dev
```

## What's Included

### Dev scripts

- `npm run dev` : first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build` : Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

- `npm run unit` : Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015 in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e` : End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.
    
### Vue resource

The `$http` object is available in every component, and you can use it as shown in the Vue Resource [documentation](https://github.com/vuejs/vue-resource/tree/master/docs).

### Vue router

The `<router-view>` and `<router-link>` tags are accessible from every component, and a router view has been included in the main App.vue component in the demo app, where it shows the Hello.vue component for the base route. Routes are to be defined in the `/src/router.js` file, where you can also define the router mode and other options. See Vue Router [official documentation](http://router.vuejs.org/en/index.html). Keep in mind that since version 2.0, the `v-link` attribute for `<a>` tags doesn't work anymore.

### VueX

The `$store` object is available in every component. The store configuration, states, mutations and actions are all to be defined in the `/src/store.js` file. The base rig includes `appTitle` and `appVersion` data in the state, reflecting what has been entered during the initial vue-cli setup. It also includes for exemple purpose a counter data with asynchronous incrementation implemented. See more at [VueX documentation](http://vuex.vuejs.org/en/index.html).

### Vue Translate

A `$translate` object is available within every component, and you have access to the `t(...)` function and the `v-translate` attribute, as shown in the [plugin page](https://github.com/javisperez/vuetranslate). The `locales:` object can be populated from each component, directly or by requesting an external file with a `module.exports`.

### Bootstrap

All the classes are available out-of-the-box from each of your templates. You can redefine Bootstrap SASS variables just before its importation, in the `<style>` part of the base component `/src/App.vue`. The Bootstrap components are implemented via the `bootstrap.js` library, which has required, unfortunately, to include the JQuery library into this boilerplate. Another solution exists to have bootstrap components rewritten in pure Vue.js ([VueStrap](https://github.com/yuche/vue-strap)), but at this time, it only works for Vue 1.x but not for the 2.x version. So for the moment, to use components such as modals, dropdowns, etc, please refer to the [Bootstrap documentation](http://getbootstrap.com/components/).

### Font Awesome

You can use the `<i class="fa ..."></i>` tag from where you want in your application, according to the rules described in the [Font Awesome documentation](http://fontawesome.io/).


## Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
