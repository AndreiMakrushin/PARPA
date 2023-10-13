<script setup>
import { useShopStore } from '../stores/shop'
import Card from '../components/CardShop.vue'

const state = useShopStore()

const removeToBasket = (product) => {
  state.basket = state.basket.filter(item => item.id !== product.id)
}
</script>
<template>
  <div>
    <div class="store-catalog">
        <Card :basket="state.basket" @basket="removeToBasket"/>
      </div>
  </div>
</template>

<style></style>
