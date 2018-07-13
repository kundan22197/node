'use strict'
// import Vue from 'vue'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './components/App.vue'

var Vue = require('vue');
var bootstrap = require('bootstrap/dist/css/bootstrap.min.css');
var App = require('./components/App.vue');

new Vue({
  el: 'app',
  created: function () {
    console.log('root instance was created')
  },
  components: {App},
  methods: {}
})
