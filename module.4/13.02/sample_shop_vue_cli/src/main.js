import Vue from 'vue';
import App from './App.vue';
import store from './plugins/store.js';
import router from './plugins/router.js';
import vuetify from './plugins/vuetify.js';

new Vue({
    el: '#app',
    store,
    router,
    vuetify,
    render: h => h(App)
});