import React, { useState } from 'react';

import ProjectForm from '../../components/ProjectForm/ProjectForm';
import ProjectList from '../../components/ProjectList/ProjectList';

const Projects = (props) => {
  const [projects, setProjects] = useState([]);

  const addProjectHandler = (project) => {
    setProjects(prevIssues => [...prevIssues, project])

  }
  return (
    <>
      <p>This is Projects!</p>
      <ProjectForm onAddProject={addProjectHandler} />
      <ProjectList projectData={projects} />
    </>
  )
};

export default Projects;