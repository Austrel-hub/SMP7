<template>
  <div class="catalogo-container">
    <div class="header-section">
      <h2>Catálogo de Productos</h2>
      
      <el-select v-model="filtroSeleccionado" placeholder="Filtrar por categoría" clearable @change="aplicarFiltro">
        <el-option v-for="cat in categoriasUnicas" :key="cat" :label="cat" :value="cat" />
      </el-select>
    </div>

    <div v-if="loading" class="loading-state" v-loading="loading" element-loading-text="Cargando productos..."></div>
    
    <el-alert v-else-if="error" :title="error" type="error" show-icon />

    <el-row :gutter="20" v-else>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="prod in productosFiltrados" :key="prod.id" class="mb-20">
        <ProductCard :producto="prod" />
      </el-col>
    </el-row>
    
    <el-empty v-if="!loading && !error && productosFiltrados.length === 0" description="No hay productos en esta categoría" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return { filtroSeleccionado: '' }
  },
  computed: {
    ...mapState(['loading', 'error', 'categoriaFiltro']),
    ...mapGetters(['productosFiltrados', 'categoriasUnicas'])
  },
  mounted() {
    this.fetchProductos();
    this.filtroSeleccionado = this.categoriaFiltro;
  },
  methods: {
    ...mapActions(['fetchProductos']),
    ...mapMutations(['SET_FILTRO']),
    aplicarFiltro(valor) {
      this.SET_FILTRO(valor || '');
    }
  }
}
</script>

<style scoped>
.header-section { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;}
.header-section h2 { margin: 0; color: #303133; }
.loading-state { height: 300px; width: 100%; }
.mb-20 { margin-bottom: 20px; }
</style>