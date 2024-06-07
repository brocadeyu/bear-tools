<template>
  <div class="logo-container">
    <van-image width="10%" height="80%" :src="Bear" />
    <div class="logo-text">熊の工具箱</div>
  </div>
</template>
<script setup>
import Bear from '../../../assets/bear.png'
</script>
<style scoped>
.logo-container {
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0rem;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.logo-text {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
