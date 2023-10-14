<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div>
    <div class="main-container">
      <div class="container">
        <Header />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  max-width: 1440px;
  flex-direction: column;
}
</style>
