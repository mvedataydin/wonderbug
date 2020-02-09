import React, { useState } from 'react';

import IssueForm from '../../components/IssueForm/IssueForm';
import IssueSearch from '../../components/IssueSearch/IssueSearch';
import IssueList from '../../components/IssueList/IssueList';

const Issues = (props) => {
  const [issues, setIssues] = useState([]);

  const addIssueHandler = (issue) => {
    setIssues(prevIssues => [...prevIssues, issue])
    console.log(issues)
  }

  return (
    <>
      <p>Hello from Bugs</p>
      <IssueForm onAddIssue={addIssueHandler} />
      <IssueSearch />
      <IssueList issueData={issues} />
    </>
  )
}

export default Issues;