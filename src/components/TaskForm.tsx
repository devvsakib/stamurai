import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';
import { Task } from '../store/TaskStore';

const TaskForm: React.FC = observer(() => {
  const { taskStore } = useStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showForm, setShowForm] = useState(false);
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
    setStatus('To Do');
    setShowForm(false);
  };

  return (
    <div>
      {
        !showForm &&
        <button className='border-0 p-2 px-4 bg-blue-400 text-white mb-5 rounded-sm bg-white/20' onClick={() => setShowForm(!showForm)}>Add Task</button>
      }
      {
        showForm &&
        <form onSubmit={handleSubmit} className='mb-10 p-10 shadow grid gap-10 max-w-sm mx-auto'>
          <input
            className='shadow-lg border py-2 rounded-sm px-3'
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className='shadow-lg border h-24 py-2 rounded-sm px-3'
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)} className='p-2 rounded-sm shadow-lg bg-transparent'>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit" className='bg-blue-400 rounded-sm text-white py-2 hover:bg-blue-500 duration-200 transition-all ease-linear'>Add Task</button>
        </form>
      }
    </div>
  );
});

export default TaskForm;

