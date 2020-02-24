import React from 'react'
import {useParams} from 'react-router-dom';

import ProjectList from '../components/ProjectList'
import { PROJECTS } from '../../dummy-data'

const UserProjects = props => {
  const userId = useParams().userId
    return (
        <>
            <button >Create New Project</button>
            <h1>Your projects</h1>
            <h2>All the projects in the database</h2>
            <ProjectList items={PROJECTS} />
        </>
    )
}

export default UserProjects
