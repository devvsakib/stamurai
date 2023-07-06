import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';
import TaskItem from './TaskItem';

const TaskList: React.FC = observer(() => {
  const { taskStore } = useStore();

  const handleEditTask = (taskId: string) => {
    const task = taskStore.tasks.find((t) => t.id === taskId);
    if (task) {
      // Implement the edit task functionality
      const updatedTask = { ...task, title: 'Updated Title' };
      taskStore.editTask(taskId, updatedTask);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    // Implement the delete task functionality
    taskStore.deleteTask(taskId);
  };

  return (
    <div>
      <h2>Task List</h2>
      {taskStore.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
});

export default TaskList;
