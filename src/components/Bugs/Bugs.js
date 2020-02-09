import React from 'react';

import BugForm from './BugForm/BugForm';
import BugList from './BugList/BugList';
import BugSearch from './BugSearch/BugSearch';

const Bugs = (props) => {
  return (
    <>
      <p>Hello from Bugs</p>
      <BugForm />
      <BugSearch />
      <BugList />
    </>
  )
}

export default Bugs