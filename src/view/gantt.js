export default class GanttChart {
  constructor(canvas, tasks) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.tasks = tasks
    this.padding = 50
    this.taskHeight = 20
    this.taskPadding = 10
    this.adjustCanvasDimensions()
    this.render()
  }

  adjustCanvasDimensions() {
    const days = this.getTotalDays()
    const width = this.padding * 2 + days * this.dayWidth()
    this.canvas.width = width

    // Adjust the canvas height to fit all tasks
    const totalTaskHeight =
      this.tasks.length * (this.taskHeight + this.taskPadding)
    const requiredHeight = totalTaskHeight + 2 * this.padding
    this.canvas.height = requiredHeight > 400 ? requiredHeight : 400
  }

  render() {
    this.clear()
    this.drawGrid()
    this.drawTasks()
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawGrid() {
    const ctx = this.context
    const height = this.canvas.height
    const days = this.getTotalDays()
    const interval = this.calculateInterval(days)

    ctx.beginPath()
    for (let i = 0; i <= days; i++) {
      const x = this.padding + i * this.dayWidth()
      ctx.moveTo(x, this.padding)
      ctx.lineTo(x, height - this.padding)
      if (i % interval === 0) {
        ctx.fillText(i, x, this.padding - 20)
      }
    }
    ctx.strokeStyle = '#eee'
    ctx.stroke()
  }

  drawTasks() {
    const ctx = this.context
    const startY = this.padding

    this.tasks.forEach((task, index) => {
      const startX = this.padding + this.dayWidth() * task.startDay
      const width = this.dayWidth() * task.duration
      const y = startY + index * (this.taskHeight + this.taskPadding)

      ctx.fillStyle = task.color || 'blue'
      ctx.fillRect(startX, y, width, this.taskHeight)
      ctx.fillStyle = 'black'
      ctx.fillText(task.name, startX + 5, y + 15)
    })
  }

  dayWidth() {
    const days = this.getTotalDays()
    const availableWidth = 800 - 2 * this.padding // Assuming the visible width is 800px
    return availableWidth / days
  }

  getTotalDays() {
    const startDays = this.tasks.map((task) => task.startDay)
    const endDays = this.tasks.map((task) => task.startDay + task.duration)
    return Math.max(...endDays) - Math.min(...startDays)
  }

  calculateInterval(days) {
    const maxLabels = Math.floor((800 - 2 * this.padding) / 50) // Assuming 50px per label
    return Math.max(1, Math.ceil(days / maxLabels))
  }
}
