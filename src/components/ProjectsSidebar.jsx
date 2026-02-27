import Button from './Button';

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) => {
  return (
    <aside className={asideStyles}>
      <h2 className={h2Styles}>Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map(project => {
          let cssClasses = btnStyles;

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-blue-800 text-blue-200';
          } else {
            cssClasses += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;

const h2Styles = 'mb-8 font-bold uppercase md:text-xl text-stone-200';
const asideStyles =
  'w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl';
const btnStyles =
  'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';
