import React from 'react';

import BugForm from './BugForm/BugForm';
import BugList from './BugList/BugList';
import BugSearch from './BugSearch/BugSearch';

const Bugs = (props) => {

  const addIssueHandler = (issue) => {
    console.log(issue)
  }

  return (
    <>
      <p>Hello from Bugs</p>
      <BugForm onAddIssue={addIssueHandler} />
      <BugSearch />
      <BugList />
    </>
  )
}

export default Bugs