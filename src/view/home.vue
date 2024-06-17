<template>
  <div class="container" ref="ganttRef"></div>
</template>
<script setup>
import { defineComponent, onMounted, ref } from 'vue'
import { gantt } from 'dhtmlx-gantt' // 核心模块
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css' // 样式模块
const ganttRef = ref(null)
const tasks = {
  data: [
    {
      id: 1,
      text: '任务 1',
      start_date: '2021-10-17',
      duration: 3,
      progress: 0,
    },
    {
      id: 2,
      text: '任务 2',
      start_date: '2021-10-17',
      duration: 10,
      progress: 0,
    },
    {
      id: 21,
      text: '任务 2.1',
      start_date: '2021-10-17',
      duration: 10,
      progress: 0,
      parent: 2,
    },
    {
      id: 22,
      text: '任务 2.2',
      start_date: '2021-10-17',
      duration: 10,
      progress: 0,
      parent: 2,
    },
    {
      id: 3,
      text: '任务 3',
      start_date: '2021-10-17',
      duration: 1,
      progress: 0,
    },
    {
      id: 4,
      text: '任务 4',
      start_date: '2021-10-17',
      duration: 2,
      progress: 0,
    },
  ],
  links: [],
}
onMounted(() => {
  if (ganttRef.value) {
    gantt.init(ganttRef.value) // 初始化 DOM
    // gantt.plugins({
    //   multiselect: true,
    // })
    // gantt.config.order_branch = 'marker'
    // gantt.config.order_branch_free = true
    gantt.config.show_links = false
    gantt.config.drag_progress = false
    gantt.config.duration_unit = 'year'
    gantt.config.scales = [
      // {
      //   unit: 'week',
      //   step: 1,
      //   format: function (date) {
      //     return 'Week #' + gantt.date.getWeek(date)
      //   },
      // },
      {
        unit: 'year',
        step: 1,
        format: '%Y',
        // format: function (date) {
        //   return 'Week #' + gantt.date.getWeek(date)
        // },
        // css: function (date) {
        //   if (!gantt.isWorkTime({ date: date, unit: 'day' })) {
        //     return 'weekend'
        //   }
        // },
      },
    ]
    gantt.config.open_tree_initially = true
    // gantt.plugins({
    //   tooltip: true,
    //   quick_info: false, // 快速信息框 进行隐藏
    //   // multiselect: true,// 激活多任务选择
    // })
    // gantt.templates.tooltip_text = function (start, end, task) {
    //   return (
    //     '<b>项目:</b> ' +
    //     task.text +
    //     '<br/><span>开始时间:</span> ' +
    //     gantt.templates.tooltip_date_format(start) +
    //     '<br/><span>结束时间:</span> ' +
    //     gantt.templates.tooltip_date_format(end)
    //   )
    // }
    gantt.attachEvent('onTaskDblClick', function (id, e) {
      return false
    })
    gantt.config.duration_step = 1
    gantt.config.show_grid = false
    // gantt.config.show_chart = false
    gantt.config.columns = [
      {
        name: 'text',
        label: '名称',
        tree: true,
        width: '*',
        align: 'left',
        template: function (obj) {
          return obj.text
        },
      },
    ]
    gantt.parse(tasks) // 传入 tasks
  }
})
</script>
<style scoped>
.container {
  height: 100vh;
  width: 100vw;
}
</style>
