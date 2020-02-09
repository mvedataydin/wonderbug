import React, { useState } from 'react';

import BugForm from './BugForm/BugForm';
import BugList from './BugList/BugList';
import BugSearch from './BugSearch/BugSearch';

const Bugs = (props) => {
  const [issues, setIssues] = useState([]);

  const addIssueHandler = (issue) => {
    setIssues(prevIssues => [...prevIssues, issue])
    console.log(issues)
  }

  return (
    <>
      <p>Hello from Bugs</p>
      <BugForm onAddIssue={addIssueHandler} />
      <BugSearch />
      <BugList issueData={issues} />
    </>
  )
}

export default Bugs