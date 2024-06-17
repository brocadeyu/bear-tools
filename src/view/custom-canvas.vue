<template>
  <div class="page">
    <canvas class="page__canvas" ref="CanvasRef" height="300px"></canvas>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import GanttChart from './gantt.js'
const CanvasRef = ref(null)
onMounted(() => {
  const tasks = [
    { name: 'Task 1', startDay: 0, duration: 5, color: 'red' },
    { name: 'Task 2', startDay: 3, duration: 7, color: 'green' },
    { name: 'Task 3', startDay: 10, duration: 3, color: 'blue' },
    { name: 'Task 4', startDay: 15, duration: 180, color: 'purple' },
  ]
  const classi = new GanttChart(CanvasRef.value, tasks)
})
</script>
<style scoped>
.page {
  height: 100vh;
  width: 800px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  overflow-x: auto;
}

.page__canvas {
  border: 1px solid black;
}
</style>
