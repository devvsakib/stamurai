import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';
import TaskItem from './TaskItem';

const TaskList: React.FC = observer(() => {
  const { taskStore } = useStore();

  const handleEditTask = (taskId: string) => {
    const task = taskStore.tasks.find((t) => t.id === taskId);
    if (task) {
      // const updatedTitle = prompt('Enter the updated title:', task.title);
      // const updatedDescription = prompt(
      //   'Enter the updated description:',
      //   task.description
      // );
      // const updatedStatus = prompt('Enter the updated status:', task.status);

      // if (updatedTitle && updatedDescription && updatedStatus) {
      //   const updatedTask = {
      //     ...task,
      //     title: updatedTitle,
      //     description: updatedDescription,
      //     status: updatedStatus,
      //   };
      //   taskStore.editTask(taskId, updatedTask);
      // }
    }
  };

  const handleDeleteTask = (taskId: string) => {
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
