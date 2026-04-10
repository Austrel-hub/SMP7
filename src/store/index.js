import { createStore } from 'vuex'

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
    async fetchProductos({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      
      // Simulamos el tiempo de espera de una API real (1 segundo)
      setTimeout(() => {
        const productosLocales = [
          {
            id: 1, title: 'Mochila Urbana Foldsack No. 1', price: 109.95, 
            category: "Ropa de Hombre", description: 'Tu mochila perfecta para el uso diario y caminatas por el bosque. Guarda tu laptop de hasta 15 pulgadas en la funda acolchada.',
            image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', rating: { rate: 3.9, count: 120 }
          },
          {
            id: 2, title: 'Camiseta Premium Slim Fit', price: 22.3, 
            category: "Ropa de Hombre", description: 'Estilo ajustado, manga larga raglán en contraste, tapeta de tres botones con cuello Henley.',
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', rating: { rate: 4.1, count: 259 }
          },
          {
            id: 3, title: 'Brazalete de Oro Leyenda Naga', price: 695, 
            category: "Joyería", description: 'De nuestra colección Leyendas, el Naga se inspiró en el mítico dragón de agua que protege las perlas del océano.',
            image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', rating: { rate: 4.6, count: 400 }
          },
          {
            id: 4, title: 'Anillo Princesa Bañado en Oro Blanco', price: 9.99, 
            category: "Joyería", description: 'Anillo clásico creado para el compromiso o aniversario. Un regalo perfecto para esa persona especial.',
            image: 'https://fakestoreapi.com/img/71yUKulUU-L._AC_UL640_QL65_ML3_.jpg', rating: { rate: 3.0, count: 400 }
          },
          {
            id: 5, title: 'Disco Duro Externo WD 2TB', price: 64, 
            category: "Electrónica", description: 'Compatibilidad con USB 3.0 y USB 2.0. Transferencias de datos rápidas para mejorar el rendimiento de la PC.',
            image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', rating: { rate: 3.3, count: 203 }
          },
          {
            id: 6, title: 'Monitor Curvo Samsung 49"', price: 999.99, 
            category: "Electrónica", description: 'Monitor curvo para juegos Super Ultra Wide de 49 pulgadas, tecnología QLED para colores realistas.',
            image: 'https://fakestoreapi.com/img/81Zt42O024L._AC_SX679_.jpg', rating: { rate: 2.2, count: 140 }
          }
        ];
        
        commit('SET_PRODUCTOS', productosLocales);
        commit('SET_LOADING', false);
      }, 1000); // 1000 ms = 1 segundo de simulación de carga
    }
  },
  getters: {
    productosFiltrados: (state) => {
      if (!state.categoriaFiltro) return state.productos
      return state.productos.filter(p => p.category === state.categoriaFiltro)
    },
    categoriasUnicas: (state) => {
      const categorias = state.productos.map(p => p.category)
      return [...new Set(categorias)]
    }
  }
})