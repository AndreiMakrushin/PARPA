<script setup>
const props = defineProps({
  products: Array
})
</script>

<template>
  <div>
    <div class="card-container">
      <div class="card" v-for="product in props.products" :key="product.id">
        <div class="top-card">
          <img :src="!product.image ? '../assets/MaskGroup.png' : product.image" />
        </div>
        <div class="bottom-card">
          <div class="padding-card">
            <div class="title-card">
              <span>{{ product.title }}</span>
              <p>{{ product.title.split(' ')[0] }}</p>
            </div>
            <div class="price-card">
              <span>{{ Number(product.price).toLocaleString('ru-RU') }} ₽</span>
              <div class="basket">
                <img src="../assets/basket.png" alt="" @click="$emit('basket', product)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-container {
  display: flex;

  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  width: 280px;
  height: 450px;
  border-radius: 10px;
  margin: 40px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}
.top-card {
  display: flex;
  height: 280px;
  justify-content: center;
  align-items: center;
  background-color: #bababa;
  border-radius: 10px 10px 0px 0px;
}
.bottom-card {
  display: flex;
  padding: 20px;
}
.title-card {
  display: flex;
  flex-direction: column;
  height: 44px;
}
.title-card span {
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
}
.title-card p {
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #333333;
}
.price-card {
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 62px;
}
.price-card .basket {
  cursor: pointer;
}
</style>
