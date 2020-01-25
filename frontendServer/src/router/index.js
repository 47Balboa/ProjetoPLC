import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import UserProfile from '../components/UserProfile.vue'
import UserProfile1 from '../components/UserProfile1.vue'
import TesteChat from '../components/TesteChat.vue'
import Friends from '../components/Friends.vue'
import store from '../store/modules/token';
import Utilizadores from '../components/Utilizadores.vue'
import Dummy from '../components/Dummy.vue'
import Register from '../components/Register.vue'


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
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: isAuthenticated
  },
  {
    path: '/testing',
    name: 'testing',
    component: UserProfile1,
    beforeEnter: isAuthenticated
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/dummy',
    name: 'dummy',
    component: Dummy,
    beforeEnter: isAuthenticated
  },
  {
    path: '/users',
    name: 'users',
    component: Utilizadores,
    beforeEnter: isAuthenticated
  },
  {
    path: '/friends',
    name: 'friends',
    component: Friends,
    beforeEnter: isAuthenticated
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    beforeEnter: isAuthenticated,
    component: UserProfile
  },
  {
    path: '/chat',
    name: 'chat',
    component: TesteChat,
    beforeEnter: isAuthenticated
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
