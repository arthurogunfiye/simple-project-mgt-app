import { useState } from 'react';

const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = event => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') return;
    onAddTask(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className={divStyles}>
      <input
        type='text'
        className={inputStyles}
        value={enteredTask}
        onChange={handleChange}
      />
      <button className={btnStyles} onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
};

export default NewTask;

const divStyles = 'flex items-center gap-4';
const inputStyles = 'w-64 px-2 py-1 rounded-sm bg-stone-200';
const btnStyles =
  'text-stone-700 hover:text-stone-950 bg-blue-400 px-2 py-1 rounded-sm';
