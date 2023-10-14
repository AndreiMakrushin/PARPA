<script setup>
import camera from '../assets/Maskgroup.png'
const props = defineProps({
  basket: Array
})
</script>
<template>
  <div>
    <div class="basket-card-container">
      <transition-group name="fade">
        <div class="basket-card" v-for="(basket, index) in props.basket" :key="basket.id">
          <div class="close" @click="$emit('basket', index)">
            <img src="../assets/close.png" alt="" />
          </div>
          <div class="left-container">
            <img :src="!basket.image ? camera : basket.image" alt="" />
          </div>
          <div class="right-container">
            <div class="header-container">
              <div class="title">
                <span>{{ basket.title }}</span>
                <p>{{ basket.title.split(' ')[0] }}</p>
              </div>
              <div class="price">
                <span>{{ Number(basket.price).toLocaleString('ru-RU') }} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<style scoped>
.basket-card-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
}
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.fade-enter {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.basket-card {
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: 500px;
  height: 200px;
  margin: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}
.left-container {
  display: flex;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 200px;
  height: 200px;
  background-color: #bababa;
  justify-content: center;
  align-items: center;
}
.right-container {
  display: flex;
  padding: 20px;
}
.header-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.close {
  cursor: pointer;
  display: flex;
  position: absolute;
  margin-left: 485px;
}
.title {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.title span {
  font-size: 24px;
  line-height: 28px;
  font-weight: 400;
  color: #333333;
}
.title p {
  font-size: 14px;
  line-height: 26px;
  font-weight: 400;
  color: #333333;
}
.price span {
  font-size: 18px;
  font-weight: 400;
  color: #333333;
  line-height: 26px;
}
</style>
