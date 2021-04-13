import Vue from 'vue'
import Router from 'vue-router'

 import Lobby from '@/components/Lobby'
// import Header from '@/components/Header'
import Login from '../components/Login'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path: "/login",
            name: "Login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/lobby",
            name: "Lobby",
            component: Lobby
        }
    ]
})