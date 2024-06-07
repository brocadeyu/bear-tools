<template>
  <div class="list-container">
    <div class="warpper">
      <van-grid
        :gutter="10"
        style="overflow: scroll"
        :icon-size="'100px'"
        :column-num="3"
      >
        <van-grid-item
          v-for="(item, index) in list"
          :key="index"
          :icon="item.logo"
          :text="item.text || '文字'"
        >
        </van-grid-item>
      </van-grid>
    </div>
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
]
</script>
<style scoped>
.warpper {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
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
}
.list-container {
  height: 100%;
  width: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
}
</style>
