import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';
import { Task } from '../store/TaskStore';

const TaskForm: React.FC = observer(() => {
  const { taskStore } = useStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do'); // Set the default value to 'To Do'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = Task.create({
      id: Math.random().toString(),
      title,
      description,
      status,
    });

    taskStore.addTask(newTask);
    setTitle('');
    setDescription('');
    setStatus('To Do'); // Reset the status to 'To Do' after submission
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
});

export default TaskForm;

