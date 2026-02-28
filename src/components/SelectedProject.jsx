import formattedDate from '../utils/formatDate';
import Tasks from './Tasks';

const SelectedProject = ({
  project,
  onDelete,
  onEdit,
  onAddTask,
  onDeleteTask,
  tasks
}) => {
  const { title, description, dueDate } = project;

  return (
    <div className='w-full max-w-[40rem] mt-16'>
      <header className={headerStyles}>
        <div className={divStyles}>
          <h1 className={h1Styles}>{title}</h1>
        </div>
        <p className={para1Styles}>Due Date: {formattedDate(dueDate)}</p>
        <p className={para2Styles}>Project Description: {description}</p>
        <div className={actionBtnsStyles}>
          <button className={editBtnStyles} onClick={onEdit}>
            Edit
          </button>
          <button className={deleteBtnStyles} onClick={onDelete}>
            Delete
          </button>
        </div>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;

const headerStyles = 'pb-4 mb-4 border-b-2 border-stone-300';
const divStyles = 'flex items-center justify-between';
const h1Styles = 'text-3xl font-bold text-stone-600 mb-2';
const actionBtnsStyles = 'flex gap-4 mt-4';
const editBtnStyles =
  'text-stone-50 hover:text-stone-50 bg-green-600 hover:bg-green-700 px-3 py-2 rounded-md';
const deleteBtnStyles =
  'text-stone-50 hover:text-stone-50 bg-red-600 hover:bg-red-700 px-3 py-2 rounded-md';
const para1Styles = 'mb-2 text-stone-400';
const para2Styles = 'text-stone-600 whitespace-pre-wrap';
