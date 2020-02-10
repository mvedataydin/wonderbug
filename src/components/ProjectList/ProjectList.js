import React from 'react';

const ProjectList = (props) => {
  return (
    <>
      <>
        {props.projectData.map(((project, index) => {
          return (
            <section key={index} className={null}>
              <div>
                Name: {project.name}
              </div>
              <div>
                Description: {project.description}
              </div>

            </section>
          )
        }))}
        <p>This is ProjectList!</p>
      </>
    </>
  )
}

export default ProjectList;