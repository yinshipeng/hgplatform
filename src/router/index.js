/**
 * Created by yinshipeng on 2018/1/19
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginRouter from './login.router'

Vue.use(VueRouter)

const routes = [
    ...LoginRouter
]

const router = new VueRouter({
    mode: 'history',
    routes
})




export default router
