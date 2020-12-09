import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
import Cuadriculas from '../views/Cuadriculas.vue'
import Juego from '../views/Juego.vue'
import GameOver from '../views/pass.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/cuadriculas',
    name: 'Cuadriculas',
    component: Cuadriculas
  },
  {
    path: '/juego',
    name: 'Juego',
    component: Juego
  },
  {
    path: '/gameOver',
    name: 'GameOver',
    component: GameOver
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
