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

  const renderTasksByStatus = (status: string) => {
    const tasks = taskStore.tasks.filter((task) => task.status === status);

    return (
      <div className='bg-[#F6F5F8] p-5 rounded-lg'>
        <h2 className='mb-5 font-semibold'>{status} <span className='badge shadow'>{tasks.length}</span></h2>
        <div>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className='mb-10'>
      <h2 className='text-xl mt-10 border-b-2 border-orange-300 pb-2 mb-10'>Task List</h2>
      <div className='grid grid-cols-3 gap-10'>
        {renderTasksByStatus('To Do')}
        {renderTasksByStatus('In Progress')}
        {renderTasksByStatus('Completed')}
      </div>
    </div>
  );
});

export default TaskList;
