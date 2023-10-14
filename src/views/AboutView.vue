<script setup>
import { useShopStore } from '../stores/shop'
import Card from '../components/CardBasket.vue'
import PlacingAnOrder from '../components/PlacingAnOrder.vue'

const state = useShopStore()

const removeToBasket = (index) => {
  state.basket.splice(index, 1)
}
</script>
<template>
  <div>
    <div class="store-catalog" v-if="state.basket.length !== 0">
      <Card :basket="state.basket" @basket="removeToBasket" />
      <div class="placing-order">
        <PlacingAnOrder :basket="state.basket" />
      </div>
    </div>
    <div class="basket-null" v-else>
      <img src="https://pekar29.ru/assets/images/empty_cart.png.webp?v=1594380644" alt="">
    </div>
  </div>
</template>

<style scoped>
.store-catalog {
  display: flex;
  justify-content: space-between;
}

.placing-order {
  flex-grow: 1;
}

.basket-null {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
