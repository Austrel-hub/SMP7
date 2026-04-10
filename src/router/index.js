import { createRouter, createWebHistory } from 'vue-router'
import CatalogoView from '../views/CatalogoView.vue'
import DetalleProductoView from '../views/DetalleProductoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'catalogo',
      component: CatalogoView
    },
    {
      path: '/producto/:id',
      name: 'detalle',
      component: DetalleProductoView,
      props: true
    }
  ]
})

export default router