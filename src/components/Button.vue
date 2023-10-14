<script setup>
const props = defineProps({
  text: String
})
</script>
<template>
  <div>
    <button>{{ props.text }}</button>
  </div>
</template>
<style scoped>
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
</style>
