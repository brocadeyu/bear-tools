<template>
  <div class="home-container">
    <div class="logo-content">
      <!-- <appLogo></appLogo> -->
      <van-button type="success" @click="selectImage">选取图片</van-button>
      <van-button type="success" style="margin-left: 10px" @click="handleGen"
        >开始合成</van-button
      >
      <van-button type="success" style="margin-left: 10px" @click="handleOut"
        >导出</van-button
      >
    </div>
    <div class="tag-content">
      <img class="tag-img" :src="eye1" />
      <div class="tag-text">{{ '512' }}</div>
    </div>
    <canvas id="canvasId" style="margin-top: 30px"></canvas>
  </div>
</template>

<script setup>
import eye1 from '../../assets/appLogo/eye1.png'
import appLogo from '../page-home/components/app-logo.vue'
import * as htmlToImage from 'html-to-image'
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image'
const selectImage = async () => {
  const opt = {
    types: [
      {
        description: '图片',
        accept: {
          'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.bmp'],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: false,
  }
  const [fileHandle] = await window.showOpenFilePicker(opt)
  const fileData = await fileHandle.getFile()
  let reader = new FileReader()
  reader.onload = function (event) {
    const imageDataUrl = event.target.result
    // 在这里可以使用 imageDataUrl，比如将其绘制到画布上
    const img = new Image()
    img.src = imageDataUrl
    img.onload = function () {
      // 绘制图片到画布或者其他操作
      console.log('Image loaded.')
      const canvas = document.getElementById('canvasId')
      const ctx = canvas.getContext('2d')
      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // 绘制图片到画布上
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }

  reader.readAsDataURL(fileData)
}

const handleGen = () => {
  var node = document.getElementsByClassName('tag-content')[0]

  htmlToImage
    .toPng(node)
    .then(function (dataUrl) {
      var img = new Image()
      img.src = dataUrl
      img.onload = function () {
        // 绘制图片到画布或者其他操作
        console.log('Image loaded.')
        const canvas = document.getElementById('canvasId')
        const ctx = canvas.getContext('2d')
        // 清空画布
        // ctx.clearRect(0, 0, canvas.width, canvas.height)
        // 绘制图片到画布上
        ctx.drawImage(img, 20, 120, 60, 20)
      }
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error)
    })
}
const handleOut = () => {
  const canvas = document.getElementById('canvasId')
  const image = canvas.toDataURL('image/png')

  // 创建一个a元素
  const link = document.createElement('a')
  link.href = image
  link.download = 'canvas-image.png' // 下载文件名
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
<style scoped>
.tag-content {
  height: 50px;
  width: 100px;
  background-color: gray;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
  align-items: center;
}
.tag-img {
  height: 30px;
  width: 30px;
}
.tag-text {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 25px;
}
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
