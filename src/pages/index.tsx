import React from 'react';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

const Home: React.FC = () => {
  return (
    <div>
      <h1>Task Management Application</h1>
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default Home;
