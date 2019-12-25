import Vue from 'vue'
import App from './App'
// import VueRouter from 'vue-router'
// import router from './router'
// import '@mdi/font/css/materialdesignicons.css'
import lqForm from 'lq-form'
import store from '../store'
import './axios'
import vueLqSelect from '../main'

import helper from 'vuejs-object-helper'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en'
import 'vue-select/dist/vue-select.css';

import vSelect from 'vue-select'

Vue.component('vue-select', vSelect)


Object.defineProperty(
    Vue.prototype, 
    '$helper', 
    { 
        value: helper 
    }
);
// Vue.use(VueCroppie)
Vue.use(lqForm, { store })

// Vue.use(ElementUI, {locale});

Vue.config.performance = false

Vue.use(vueLqSelect)
// Vue.use(VueRouter)

new Vue({
    store,
    render(h) {
        return h(App)
    },
    // router
}).$mount('#app')
