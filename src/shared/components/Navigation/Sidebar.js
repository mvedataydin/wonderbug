import React from 'react';
import classes from './Sidebar.module.scss';
import NavigationItems from './NavigationItems/NavigationItems';

const Sidebar = (props) => {
  return (
    <aside className={classes.Sidebar}>
      <nav>
        <NavigationItems />
      </nav>
    </aside>
  )
};

export default Sidebar;

