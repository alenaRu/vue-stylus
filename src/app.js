import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import '../assets/app.styl';

Vue.use(Vuetify, {
  iconfont: 'fa'
});

new Vue({
          el    : '#app',
          render: h => h(App)
        });
