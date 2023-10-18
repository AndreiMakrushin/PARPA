<script setup>
import Card from '../components/CardShop.vue'
import Button from '../components/Button.vue'
import Loader from '../components/Loader.vue'
import { useShopStore } from '../stores/shop'

const state = useShopStore()
</script>

<template>
  <div>
    <div class="store-catalog-container">
      <div class="store-catalog">
        <Card :products="state.shop" @basket="state.addToBasket" />
      </div>
      <Loader v-if="state.isLoading" />
      <div class="more" v-show="state.showBattonAndLoader">
        <Button text="Показать больше" @click="state.moreProduct" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.store-catalog {
  display: flex;
  width: 1440px;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
}

.more {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
