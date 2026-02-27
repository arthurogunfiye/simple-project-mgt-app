import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className={divStyles}>
      <img
        src={noProjectImage}
        alt='An empty task list'
        className={imgStyles}
      />
      <h2 className={h2Styles}>No Project Selected</h2>
      <p className={paraStyles}>
        Select a project or get started with a new one
      </p>
      <p className={btnParaStyles}>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;

const divStyles = 'mt-24 text-center w-2/3';
const h2Styles = 'text-xl font-bold text-stone-700 my-4';
const paraStyles = 'text-stone-400 mb-4';
const btnParaStyles = 'mt-8';
const imgStyles = 'size-16 object-contain mx-auto';
