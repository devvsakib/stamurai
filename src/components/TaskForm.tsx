import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';
import { Instance } from 'mobx-state-tree'; // Import the Instance type
import { Task } from '../store/TaskStore'; // Import the Task type

const TaskForm: React.FC = observer(() => {
  const { taskStore } = useStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

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
    setStatus('');
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
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
});

export default TaskForm;
