import React, { useState } from 'react';

const ProjectForm = (props) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const submitProjectHandler = (event) => {
    event.preventDefault();
    props.onAddProject(
      {
        name: projectName,
        description: projectDescription
      }
    )
  }
  return (
    <section onSubmit={submitProjectHandler}>
      <h1>Add new project</h1>
      <form>
        <div>
          <label htmlFor="project-name">Project Name</label>
          <input
            type="text"
            id="project-name"
            value={projectName}
            onChange={(event) => setProjectName(event.target.value)}
            placeholder="Enter a name for your project..."
            required
          />
        </div>
        <div>
          <label htmlFor="project-description">Project Description</label>
          <input
            type="text"
            id="project-description"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
            placeholder="Description..."
            required
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  )
}

export default ProjectForm;