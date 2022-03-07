import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
    clientId: '270485046976-4ae3aunmmig2u21qje2c03l5n08s0qia.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
}

Vue.use(GAuth, gauthOption)