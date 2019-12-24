import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store/modules/token';

Vue.use(VueRouter)


// função para as rotas protegidas! basicamente so verifica se tem o token. temos que progredir para validar o token porque pode ja tar expirado
const isAuthenticated = (to, from, next) => {
  if (store.state.token != null) {
    next()
    return
  }
  next('/')
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: isAuthenticated
  }
]

const router = new VueRouter({
  routes
})

export default router
