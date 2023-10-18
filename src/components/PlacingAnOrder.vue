<script setup>
import Button from './Button.vue'
const props = defineProps({
  basket: Array,
  summ: Number
})
</script>

<template>
  <div>
    <div class="order-container">
      <div class="container">
        <div class="order">
          <h1>Ваша корзина</h1>
          <div class="basket">
            <div class="length">
              <p>Количество:</p>
              <span> {{ props.basket.length }}</span>
            </div>
            <div class="price">
              <p>Общая стоимость:</p>
              <span>{{ props.summ }} ₽</span>
            </div>
          </div>
        </div>
        <div class="buttom">
          <Button :text="'Оформить заказ'" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.order-container {
  display: flex;
  justify-content: end;
  align-items: center;
}
.order-container .container {
  color: #6a6a6a;
  border-radius: 5px;
  width: 350px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  margin: 10px;
  text-align: center;
}
.order h1 {
  font-size: 25px;
  line-height: 28px;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 1px solid #bababa;
}
.basket {
  font-weight: 400;
  font-size: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}
.length {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.price {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttom {
  margin-top: 15px;
}
</style>
