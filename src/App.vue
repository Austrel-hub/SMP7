<template>
  <el-container class="app-layout">
    <el-header class="app-header">
      <div class="logo">
        <el-icon><Shop /></el-icon> TechStore Nova
      </div>
      <nav class="nav-links">
        <router-link to="/">Ir al Catálogo</router-link>
      </nav>
    </el-header>

    <el-main class="app-main">
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
body { margin: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f5f7fa; }
.app-layout { min-height: 100vh; }
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.05);
  padding: 0 2rem;
}
.logo { font-size: 1.5rem; font-weight: bold; color: #409EFF; display: flex; align-items: center; gap: 8px;}
.nav-links a { text-decoration: none; color: #606266; font-weight: 600; transition: color 0.3s; }
.nav-links a:hover, .nav-links a.router-link-active { color: #409EFF; }
.app-main { max-width: 1200px; margin: 0 auto; width: 100%; padding: 2rem; }
</style>