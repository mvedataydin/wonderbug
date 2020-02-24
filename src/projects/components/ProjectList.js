import React from 'react';

import ProjectItem from './ProjectItem'

const ProjectList = props => {
  return(
    <ul>
      {props.items.map((project) => (
        <ProjectItem
        key={project.id}
        id={project.id}
        name={project.name}
        description={project.description}
        creator={project.creator}
         />
      ))}
    </ul>
  )
}

export default ProjectList;