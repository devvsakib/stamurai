import { types, Instance } from 'mobx-state-tree';

const Task = types.model('Task', {
  id: types.identifier,
  title: types.string,
  description: types.string,
  status: types.string,
});

const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask(task: Instance<typeof Task>) {
      self.tasks.push(task);
    },
    editTask(taskId: string, updatedTask: Instance<typeof Task>) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        self.tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask(taskId: string) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1);
      }
    },
  }));

export default TaskStore;
