<template>
  <el-card class="product-card" :body-style="{ padding: '0px' }" shadow="hover">
    <div class="image-container">
      <img :src="producto.image" :alt="producto.title" class="product-image">
    </div>
    <div class="product-info">
      <el-tag size="small" type="info" class="category-tag">{{ producto.category }}</el-tag>
      <h3 class="product-title">{{ producto.title }}</h3>
      <p class="product-price">${{ producto.price }}</p>
      
      <el-button type="primary" class="btn-detail" @click="verDetalle">
        Ver Detalles
      </el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    producto: { type: Object, required: true }
  },
  mounted() {
    console.log(`[Componente Montado]: Tarjeta generada para el producto ID: ${this.producto.id}`);
  },
  methods: {
    verDetalle() {
      this.$router.push(`/producto/${this.producto.id}`);
    }
  }
}
</script>

<style scoped>
.product-card { height: 100%; display: flex; flex-direction: column; transition: transform 0.3s; }
.product-card:hover { transform: translateY(-5px); }
.image-container { height: 200px; padding: 1rem; display: flex; justify-content: center; align-items: center; background: white; }
.product-image { max-height: 100%; max-width: 100%; object-fit: contain; }
.product-info { padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1; }
.category-tag { margin-bottom: 0.5rem; align-self: flex-start; }
.product-title { font-size: 1rem; color: #303133; margin: 0 0 1rem 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1; }
.product-price { font-size: 1.5rem; font-weight: bold; color: #F56C6C; margin-bottom: 1rem; }
.btn-detail { width: 100%; }
</style>