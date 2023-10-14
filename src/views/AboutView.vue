<script setup>
import { useShopStore } from '../stores/shop'
import Card from '../components/CardBasket.vue'

const state = useShopStore()

const removeToBasket = (index) => {
  state.basket.splice(index, 1)
}
</script>
<template>
  <div>
    <div class="store-catalog">
          <Card :basket="state.basket" @basket="removeToBasket"/>
      </div>
  </div>
</template>

<style scoped>
  .store-catalog {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: left;
  }

</style>
