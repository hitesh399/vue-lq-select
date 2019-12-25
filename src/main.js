
import { lqOptions } from './defaultOptions'
import Select from './components/Select'
import Form from './components/Form'

export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install(Vue, options = {}) {
        lqOptions.merge(options)
        Vue.component('vue-lq-select', Select)
        Vue.component('v-lq-from', Form)
    }
}