<script setup>
import { computed } from 'vue'
import Card from '../components/CardShop.vue'
import { useShopStore } from '../stores/shop'

const state = useShopStore()

const showBattonAndLoader = computed(() => {
  return state.shopCatalog.length !== state.shop.length
})
const addToBasket = (product) => {
  state.basket.push(product)
}
</script>

<template>
  <div>
    <div class="store-catalog-container">
      <div class="store-catalog">
        <Card :products="state.shop" @basket="addToBasket" />
      </div>
      <div class="loader-container" v-if="state.isLoading">
        <span class="loader"></span>
      </div>
      <div class="more" v-show="showBattonAndLoader">
        <button @click="state.moreProduct" :disabled="state.isLoading">Показать больше</button>
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
.loader-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.more {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 30px;
}
button {
  width: 142px;
  height: 25px;
  font-size: 16px;
  border-radius: 4px;
  background-color: white;
  line-height: 18.75px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;
  margin-left: auto;
  box-shadow: 0px 5px 5px 1px rgb(0, 0, 0, 0.1);
  transition: 0.5s;
}
button:hover {
  transition: 0.5s;
  box-shadow: -5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  transform: translateX(5px) translateY(-5px);
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #bababa;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
