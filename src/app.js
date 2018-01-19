/**
 * Created by yinshipeng on 2018/1/19
 */
import Vue from 'vue'
import App from './app.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/app.css'
import router from './router'
import Commons from './commons'
import Filters from './commons/filters'
import Mixins from './commons/mixins'

Vue.use(Element)
Vue.use(Commons)
Vue.use(Filters)
Vue.mixin(Mixins)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
