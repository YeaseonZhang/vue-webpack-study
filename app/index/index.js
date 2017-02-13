import Vue from 'Vue'
import axios from 'axios'
import Favlist from './components/Favlist'

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