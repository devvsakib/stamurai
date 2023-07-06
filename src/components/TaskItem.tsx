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
    window.my_modal_5.showModal()
  };

  const handleDelete = () => {
    onDelete(task.id);
    taskStore.deleteTask(task.id);
  };

  return (
    <>
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <div className='mt-3'>

          <button className='border-0 p-2 mr-2 px-4 bg-blue-400 text-white mb-5 rounded-sm bg-white/20' onClick={handleEdit}>Edit</button>
          <button className='border-0 p-2 px-4 bg-blue-400 text-white mb-5 rounded-sm bg-white/20' onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
});

export default TaskItem;
