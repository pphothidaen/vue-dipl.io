import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import Home from '@/components/Home';

Vue.use(Router);
Vue.use(Vuetify);
Vue.use(Vuex);

export default new Router({
    routes: [
        { path: '/', component: Home }
    ]
});
