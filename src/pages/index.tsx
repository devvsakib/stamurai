import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';

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
