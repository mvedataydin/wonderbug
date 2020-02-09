import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <Sidebar />
      <main>
        {props.children}
      </main>
    </>
  )
};

export default Layout;

