import NewTask from './NewTask';

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className={h2Styles}>Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className={paraStyles}>This project does not have any tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className={ulStyles}>
          {tasks.map(task => {
            return (
              <li key={task.id} className={liStyles}>
                <span>{task.text}</span>
                <button
                  className={btnStyles}
                  onClick={() => onDeleteTask(task.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

const h2Styles = 'text-2xl font-bold text-stone-700 mb-4';
const paraStyles = 'text-stone-800 my-4';
const ulStyles = 'p-4 mt-8 rounded-md bg-stone-100';
const liStyles = 'flex justify-between my-4';
const btnStyles =
  'text-stone-700 hover:text-red-500 bg-red-400 px-2 rounded-sm';
