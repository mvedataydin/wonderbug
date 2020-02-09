import React from 'react';

import classes from './IssueList.module.scss'

const IssueList = (props) => {
  return (
    <>
      {props.issueData.map(((issue, index) => {
        return (
          <section key={index} className={classes.IssueList}>
            <div>
              Description: {issue.description}
            </div>
            <div>
              Assignee: {issue.assignee}
            </div>
            <div>
              {issue.severity}
            </div>

            <div>
              Type: {issue.type}
            </div>
            <div>
              Status: {issue.status}
            </div>

            <div>
              Date created: {issue.created}
            </div>
          </section>
        )
      }))}
      <p>This is IssueList!</p>
    </>
  )
};

export default IssueList;