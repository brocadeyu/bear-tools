<template>
  <div class="list-container">
    <van-swipe class="my-swipe" :loop="false" indicator-color="white">
      <van-swipe-item
        ><div class="swipe-item">
          <appItem
            style="margin-top: 1.2rem"
            v-for="(item, index) in list.slice(0, 20)"
          /></div
      ></van-swipe-item>
      <van-swipe-item><div class="swipe-item">空</div></van-swipe-item>
      <van-swipe-item><div class="swipe-item">空</div></van-swipe-item>
      <van-swipe-item><div class="swipe-item">空</div></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import appItem from '../../../components/app-item.vue'
import EyeLogo from '../../../assets/appLogo/eye.png'
const list = [
  {
    logo: EyeLogo,
    text: '小眼睛合成',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },

  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },

  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },

  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },

  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
  {
    logo: '',
    text: '',
    name: '',
  },
]
</script>
<style scoped>
.list-container {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 3.5rem 3rem 2.5rem 3rem;
}
.my-swipe {
  width: 100%;
  height: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.swipe-item {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
}
</style>
