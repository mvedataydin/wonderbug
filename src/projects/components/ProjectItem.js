import React from 'react'

import NavigationItem from '../../shared/components/Navigation/NavigationItems/NavigationItem/NavigationItem';

const ProjectItem = props => {
    return (
        <li>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <NavigationItem link="/projects/:pid/users">Manage Users</NavigationItem>
            <NavigationItem link="/projects/:pid">Details</NavigationItem>

        </li>
    )
}

export default ProjectItem
