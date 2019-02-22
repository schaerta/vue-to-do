var app = new Vue({
    el: '#app',
    data: {
    tasks: [
        { description: "Brush teeth", completed: false, show: true },
        { description: "Go to dentist", completed: true, show: true }
    ],
    newTask: '',
    showCompleted: true,
    showNotCompleted: true
  },

  methods: {
      addTask() {
          this.tasks.push(
              { description: this.newTask, completed: false }
          );
          // Empty out the task so the input field gets cleared
          this.newTask = '';
      },
      filterOpen() {
          for (let i=0; i < this.tasks.length; i++){
              if (this.tasks[i].completed) {
                  this.tasks[i].show = false;
              }
          }
      },
      filterCompleted() {
          for (let i=0; i < this.tasks.length; i++){
              if (!this.tasks[i].completed) {
                  this.tasks[i].show = false;
              }
          }
      },
      showAllTasks() {
          for (let i=0; i < this.tasks.length; i++){
              this.tasks[i].show = true;
          }
      }
  },

  computed: {
      incompleteTasks() {
          return this.tasks.filter(task => !task.completed);
      }
  }
})
