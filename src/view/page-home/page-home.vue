<template>
  <div class="home-container">
    <div class="logo-content">
      <appLogo></appLogo>
    </div>
    <div class="list-content">
      <appList></appList>
    </div>
  </div>
</template>

<script setup>
import appLogo from './components/app-logo.vue'
import appList from './components/app-list.vue'
</script>
<style scoped>
.home-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
}
.logo-content {
  height: 20%;
  /* background-color: green; */
}
.list-content {
  height: 80%;
  background-image: url('../../assets/iphone.png');
  background-size: cover; /* 确保背景图片覆盖整个 div */
  background-position: center; /* 将背景图片置于 div 的中心 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}
</style>
