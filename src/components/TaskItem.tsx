import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: string;
  };
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = observer(({ task, onEdit, onDelete }) => {
  const { taskStore } = useStore();

  const handleEdit = () => {
    onEdit(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
    taskStore.deleteTask(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});

export default TaskItem;
