var app = new Vue({
  el: '#app',
  data: {
    tasks: [],
    newTask: ''
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
      // Empty out the task so the input field gets cleared
      this.newTask = '';
    }
  }
})
