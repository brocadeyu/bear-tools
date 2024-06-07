<template>
  <div class="home-container">
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
  background-color: gray;
}
.logo-content {
  height: 5%;
  /* background-color: green; */
}
.list-content {
  height: 100%;
  background-image: url('../../assets/iphone.png');
  background-size: 100% 100%; /* 确保背景图片覆盖整个 div */
  background-position: 0 0; /* 将背景图片置于 div 的中心 */
  background-repeat: no-repeat; /* 防止背景图片重复 */
}
</style>
