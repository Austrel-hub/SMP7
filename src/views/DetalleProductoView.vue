<template>
  <div class="detalle-view" v-loading="loading">
    <el-button @click="$router.push('/')" icon="ArrowLeft" class="btn-volver">Volver al catálogo</el-button>
    
    <el-card v-if="producto" class="detalle-card">
      <el-row :gutter="40">
        <el-col :xs="24" :md="10" class="image-col">
          <img :src="producto.image" :alt="producto.title" class="detalle-image">
        </el-col>
        
        <el-col :xs="24" :md="14" class="info-col">
          <el-tag class="mb-1">{{ producto.category }}</el-tag>
          <h1>{{ producto.title }}</h1>
          
          <div class="rating mb-1" v-if="producto.rating">
            <el-rate :model-value="producto.rating.rate" disabled show-score text-color="#ff9900" />
            <span class="reviews">({{ producto.rating.count }} reseñas)</span>
          </div>
          
          <h2 class="precio mb-1">${{ producto.price }}</h2>
          <p class="descripcion">{{ producto.description }}</p>
          
          <el-button type="success" size="large" icon="ShoppingCart">Añadir al Carrito</el-button>
        </el-col>
      </el-row>
    </el-card>
    
    <el-alert v-else-if="!loading" title="Producto no encontrado" type="warning" show-icon />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapState(['productos', 'loading']),
    producto() {
      return this.productos.find(p => p.id === parseInt(this.id));
    }
  },
  mounted() {
    if (this.productos.length === 0) {
      this.fetchProductos();
    }
  },
  methods: {
    ...mapActions(['fetchProductos'])
  }
}
</script>

<style scoped>
.btn-volver { margin-bottom: 1.5rem; }
.detalle-card { padding: 1rem; }
.image-col { display: flex; justify-content: center; align-items: flex-start; padding-bottom: 2rem; }
.detalle-image { max-width: 100%; max-height: 400px; object-fit: contain; }
.info-col { display: flex; flex-direction: column; align-items: flex-start; }
.mb-1 { margin-bottom: 1rem; }
h1 { margin: 0 0 1rem 0; color: #303133; font-size: 1.8rem; }
.rating { display: flex; align-items: center; gap: 10px; }
.reviews { color: #909399; font-size: 0.9rem; }
.precio { color: #F56C6C; font-size: 2.5rem; margin: 0; }
.descripcion { font-size: 1.1rem; line-height: 1.6; color: #606266; margin-bottom: 2rem; text-align: justify;}
</style>