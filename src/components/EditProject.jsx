import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const EditProject = ({ project, onUpdateProject, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onUpdateProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='Okay'>
        <h2 className={h2Styles}>Invalid Input</h2>
        <p className={paraStyles}>
          Ooops... Looks like you forgot to enter a value.
        </p>
        <p className={paraStyles}>
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className={parentDivStyles}>
        <div>
          <Input
            type='text'
            ref={title}
            label='Title'
            defaultValue={project.title}
          />
          <Input
            ref={description}
            label='Description'
            textarea
            defaultValue={project.description}
          />
          <Input
            type='date'
            ref={dueDate}
            label='Due Date'
            defaultValue={project.dueDate}
          />
        </div>
        <menu className={menuStyles}>
          <li>
            <button className={cancelBtnStyles} onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button className={saveBtnStyles} onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
      </div>
    </>
  );
};

export default EditProject;

const parentDivStyles = 'w-[35rem] mt-16';
const menuStyles = 'flex items-center justify-end gap-4 mt-6';
const cancelBtnStyles = 'px-5 py-2 rounded-md bg-rose-800 text-stone-50';
const saveBtnStyles =
  'px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950';
const h2Styles = 'text-xl font-bold text-stone-700 my-4';
const paraStyles = 'text-stone-600 mb-4';
