import { types, applySnapshot } from 'mobx-state-tree';

export const Task = types
  .model('Task', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    status: types.string,
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    setStatus(status: string) {
      self.status = status;
    },
  }));

export const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask(task: typeof Task.Type) {
      self.tasks.push(task);
    },
    editTask(taskId: string, updatedTask: typeof Task.Type) {
      const task = self.tasks.find((t) => t.id === taskId);
      if (task) {
        applySnapshot(task, updatedTask);
      }
    },    
    deleteTask(taskId: string) {
      const taskIndex = self.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1);
      }
    },
  }));
export default TaskStore;
