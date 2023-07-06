import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../store/storeContext';

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: string;
  };
  onEdit: (taskId: string, updatedTask: { title: string, description: string, status: string }) => void;
  onDelete: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = observer(({ task, onEdit, onDelete }) => {
  const { taskStore } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const [updatedStatus, setUpdatedStatus] = useState(task.status);

  const handleEdit = () => {
    setIsEditing(true);
    window.my_modal_5.showModal()
  };

  const handleSave = () => {
    const updatedTask = {
      title: updatedTitle,
      description: updatedDescription,
      status: updatedStatus,
    };
    onEdit(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setUpdatedTitle(task.title);
    setUpdatedDescription(task.description);
    setUpdatedStatus(task.status);
    setIsEditing(false);
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
        <form onSubmit={handleSave} method="dialog" className="modal-box grid gap-5 py-20">
          <input
            className='shadow-lg border py-2 rounded-sm px-3'
            type="text"
            placeholder="Title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <input
            className='shadow-lg border h-24 py-2 rounded-sm px-3'
            type="text"
            placeholder="Description"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <select
            className='p-2 rounded-sm shadow-lg bg-transparent'
            value={updatedStatus}
            onChange={(e) => setUpdatedStatus(e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="modal-action">
            <button type='submit' className="btn w-full bg-[#8C64FE] text-white hover:text-black">Done</button>
          </div>
        </form>
      </dialog>
    </>
  );
});

export default TaskItem;
