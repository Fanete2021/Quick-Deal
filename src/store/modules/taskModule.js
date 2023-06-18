const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const taskModule = {
  state: {
    tasks: savedTasks,
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, task) {
      state.tasks = state.tasks.filter(t => t.id !== task.id);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    changeTask(state, task) {
      state.tasks = state.tasks.map(t => {
        if (t.id === task.id) {
          return task;
        }

        return t;
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  namespace: true
};