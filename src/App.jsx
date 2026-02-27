import { useState, useEffect } from 'react';
import EditProject from './components/EditProject';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState(() => {
    let projects = [];
    let tasks = [];
    try {
      const savedProjects = localStorage.getItem('projects');
      const savedTasks = localStorage.getItem('tasks');
      if (savedProjects) projects = JSON.parse(savedProjects);
      if (savedTasks) tasks = JSON.parse(savedTasks);
    } catch {
      // Fall back to empty arrays if stored data is corrupt
    }
    return { selectedProjectId: undefined, isEditing: false, projects, tasks };
  });

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projectsState.projects));
    localStorage.setItem('tasks', JSON.stringify(projectsState.tasks));
  }, [projectsState.projects, projectsState.tasks]);

  const handleAddTask = text => {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  };

  const handleDeleteTask = id => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      };
    });
  };

  const handleSelectProject = id => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    });
  };

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      };
    });
  };

  const handleAddProject = projectData => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId
    };

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        isEditing: false,
        projects: prevState.projects.filter(
          project => project.id !== prevState.selectedProjectId
        ),
        tasks: prevState.tasks.filter(
          task => task.projectId !== prevState.selectedProjectId
        )
      };
    });
  };

  const handleStartEditProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        isEditing: true
      };
    });
  };

  const handleCancelEditProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        isEditing: false
      };
    });
  };

  const handleUpdateProject = projectData => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        isEditing: false,
        projects: prevState.projects.map(project =>
          project.id === prevState.selectedProjectId
            ? {
                ...project,
                title: projectData.title,
                description: projectData.description,
                dueDate: projectData.dueDate
              }
            : project
        )
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onEdit={handleStartEditProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(
          task => task.projectId === projectsState.selectedProjectId
        )}
    />
  );

  if (projectsState.isEditing && selectedProject) {
    content = (
      <EditProject
        project={selectedProject}
        onUpdateProject={handleUpdateProject}
        onCancel={handleCancelEditProject}
      />
    );
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
