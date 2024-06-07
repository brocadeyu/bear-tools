<template>
  <div class="home-container">
    <div class="logo-content">
      <appLogo></appLogo>
    </div>
    <div class="list-content"></div>
  </div>
</template>

<script setup>
import appLogo from '../page-home/components/app-logo.vue'
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
  height: 25%;
  /* background-color: green; */
}
.list-content {
  height: 75%;
  /* background-color: red; */
}
</style>
