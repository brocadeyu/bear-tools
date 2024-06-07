<template>
  <div class="list-container">
    <!-- <div class="warpper"> -->

    <!-- <appItem v-for="(item, index) in list"></appItem> -->
    <!-- <van-grid
        :gutter="10"
        style="overflow: scroll"
        :icon-size="'100px'"
        :column-num="3"
      >
        <van-grid-item
          to="/app"
          v-for="(item, index) in list"
          :key="index"
          :icon="item.logo"
          :text="item.text || '文字'"
        >
        </van-grid-item>
      </van-grid> -->
    <!-- </div> -->
    <van-swipe class="my-swipe" :loop="false" indicator-color="white">
      <van-swipe-item
        ><div class="swipe-item">
          <appItem
            style="margin-top: 1.2rem"
            v-for="(item, index) in list.slice(0, 24)"
          /></div
      ></van-swipe-item>
      <van-swipe-item><div class="swipe-item">222222</div></van-swipe-item>
      <van-swipe-item><div class="swipe-item">333333</div></van-swipe-item>
      <van-swipe-item><div class="swipe-item">444444</div></van-swipe-item>
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
/* .warpper {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.warpper::-webkit-scrollbar {
  -webkit-appearance: none;
}
.warpper::-webkit-scrollbar:vertical {
  width: 0.3rem;
}
.warpper::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(0, 0, 0, 0.5);
} */
.list-container {
  height: 100%;
  width: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 1rem;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: center; */
  /* align-items: flex-start; */
  /* overflow: hidden; */
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
  background-color: #39a9ed;
}
.swipe-item {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
}
</style>
