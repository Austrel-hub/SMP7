import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    productos: [],
    categoriaFiltro: '',
    loading: false,
    error: null
  },
  mutations: {
    SET_PRODUCTOS(state, productos) {
      state.productos = productos
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    },
    SET_FILTRO(state, categoria) {
      state.categoriaFiltro = categoria
    }
  },
  actions: {
    // Lección 2 y 3: Consumo de API movido a acciones
    async fetchProductos({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      try {
        // Usaremos FakeStoreAPI, una API pública excelente para e-commerce
        const response = await axios.get('https://fakestoreapi.com/products')
        commit('SET_PRODUCTOS', response.data)
      } catch (error) {
        commit('SET_ERROR', 'No se pudieron cargar los productos. Intenta más tarde.')
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  getters: {
    // Computar productos filtrados
    productosFiltrados: (state) => {
      if (!state.categoriaFiltro) return state.productos
      return state.productos.filter(p => p.category === state.categoriaFiltro)
    },
    categoriasUnicas: (state) => {
      const categorias = state.productos.map(p => p.category)
      return [...new Set(categorias)] // Devuelve un array sin duplicados
    }
  }
})