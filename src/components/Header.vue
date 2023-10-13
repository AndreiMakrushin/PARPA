<script setup>
import { RouterLink } from 'vue-router'
import { useShopStore } from '../stores/shop';
const state = useShopStore();
</script>

<template>
  <div>
    <div class="navigation">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
        <img src="../assets/Vector.png" alt="" />
      </div>

      <nav>
        <RouterLink active-class="active" to="/">Главная</RouterLink>
        <RouterLink active-class="active" to="/about">Корзина <span v-show="state.basket != 0"> {{ state.basket.length }} </span></RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  width: 1440px;
  height: 100px;
  align-items: center;
  justify-content: space-between;
}
span{
  border-radius: 50%;
  font-size: 12px;
  color: white;
  padding: 3px;
  background-color: rgb(216, 158, 158);
}
.logo {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.logo img {
  margin-right: 20px;
}

nav a {
  color: black;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
nav a:last-child {
  margin-left: 15px;
}
.active {
  color: #ba967d;
}
</style>
