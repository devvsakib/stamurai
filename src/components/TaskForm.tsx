import React, { useState } from 'react';
import { useStore } from '../store/storeContext';

const TaskForm: React.FC = () => {
  const { taskStore } = useStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(),
      title,
      description,
      status: 'To Do',
    };
    taskStore.addTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Task</h2> 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
