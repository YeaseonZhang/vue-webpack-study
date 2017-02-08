import Vue from 'Vue'
import Favlist from './components/Favlist.vue'

// open debug
Vue.config.debug = true;

window.onload = function () {
    new Vue({
        el: '#app',
        components: {
            'my-component': Favlist
        }
    });
}