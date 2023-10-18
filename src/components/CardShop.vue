<script setup>
import camera from '../assets/Maskgroup.png'
const props = defineProps({
  products: Array
})
</script>

<template>
  <div>
    <div class="card-container">
      <div class="card" v-for="product in props.products" :key="product.id">
        <div class="top-card">
          <img :src="product.image ? product.image : camera" />
        </div>
        <div class="bottom-card">
          <div class="padding-card">
            <div class="title-card">
              <span>{{ product.title }}</span>
              <p>{{ product.title.split(' ')[0] }}</p>
            </div>
            <div class="price-card" >
              <span>{{ Number(product.price).toLocaleString('ru-RU') }} ₽</span>
              <div class="basket" v-if="product.count !== '0' && product.count !== null">
                <img src="../assets/basket.png" alt="" @click="$emit('basket', product)" />
              </div>
              <div v-else class="zero-count">
              <img
                src="https://sun9-26.userapi.com/impg/J_A91KTUFS3Pa83bpCVlV-oTSv8XPQCDGt8MMQ/LKHxbe_q1ME.jpg?size=1280x720&quality=95&sign=359977b767983d138e1aee8d0107468c&c_uniq_tag=6B0CI5ScN5i_KpIJiCw9N56WiDMvInrXMhoeTi3Rnh4&type=album"
                alt=""
              />
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
  overflow: hidden;
  display: flex;
  height: 280px;
  justify-content: center;
  align-items: center;
  background-color: #bababa;
  border-radius: 10px 10px 0px 0px;
}
.zero-count {
  margin-left: auto;
  margin-top: -43.5px;
  display: flex;
  width: 120px;
}
.zero-count img {
  width: 100%;
}
.bottom-card {
  display: flex;
  padding: 20px;
}
.title-card {
  width: 240px;
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
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 62px;
}
.price-card .basket {
  cursor: pointer;
}
</style>
