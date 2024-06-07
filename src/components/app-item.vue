<template>
  <div
    class="item-container"
    @click="handleClick"
    :style="{ height: `${12 * computedVh}px`, width: `${12 * computedVh}px` }"
  >
    <div class="img">
      <van-image
        :width="`10${computedVh}px`"
        :height="`10${computedVh}px`"
        :src="BearPng"
        fit="cover"
        position="center"
      />
    </div>
    <div class="name">小眼睛生成</div>
  </div>
</template>
<script setup>
import BearPng from '../assets/appLogo/eye.png'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const computedVh = computed(() => {
  return window._vh
})
const handleClick = () => {
  console.log('clcik')
  router.push({
    path: '/app',
  })
}
</script>
<style scoped>
.item-container {
  height: 5rem;
  width: 5rem;
  /* border: 1px solid green; */
  box-sizing: border-box;
  border-radius: 0.5rem;
  z-index: 1;
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center; */
}
.img {
  position: absolute;
  top: 0;
  left: 0.5rem;
  right: 0.5rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  /* border: 1px solid black; */
  box-sizing: border-box;
  /* background-color: gray; */
}
.name {
  position: absolute;
  top: 4.5rem;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgb(0, 255, 98); */
  z-index: 10;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
</style>
