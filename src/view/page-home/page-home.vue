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
  height: 25vh;
  /* background-color: green; */
}
.list-content {
  height: 75vh;
  /* background-color: red; */
}
</style>
