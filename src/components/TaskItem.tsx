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
      <div className='bg-white shadow-md p-5 rounded-lg mb-6'>
        <h3 className='text-xl font-semibold'>{task.title}</h3>
        <p className='text-gray-500'>{task.description}</p>
        <div className='flex gap-2 mt-10'>
          <div>
            <button className='border-0 bg-[#64a7fe] p-1 px-3 rounded-full text-sm text-white font-semibold' onClick={handleEdit}>Edit</button>
          </div>
          <div>
            <button className='border-0 bg-[#8C64FE] p-1 px-3 rounded-full text-sm text-white font-semibold' onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          {/* <div className="modal-action">
            <button className="btn">Close</button>
          </div> */}
        </form>
      </dialog>
    </>
  );
});

export default TaskItem;
