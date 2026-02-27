import formattedDate from '../utils/formatDate';
import Tasks from './Tasks';

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks
}) => {
  const { title, description, dueDate } = project;

  return (
    <div className='w-[35rem] mt-16'>
      <header className={headerStyles}>
        <div className={divStyles}>
          <h1 className={h1Styles}>{title}</h1>
          <button className={btnStyles} onClick={onDelete}>
            Delete
          </button>
        </div>
        <p className={para1Styles}>{formattedDate(dueDate)}</p>
        <p className={para2Styles}>{description}</p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;

const headerStyles = 'pb-4 mb-4 border-b-2 border-stone-300';
const divStyles = 'flex items-center justify-between';
const h1Styles = 'text-3xl font-bold text-stone-600 mb-2';
const btnStyles = 'text-stone-600 hover:text-stone-950';
const para1Styles = 'mb-4 text-stone-400';
const para2Styles = 'text-stone-600 whitespace-pre-wrap';
