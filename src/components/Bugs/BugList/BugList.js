import React from 'react';

import classes from './BugList.module.scss'

const BugList = (props) => {
  return (
    <>
      {props.issueData.map(((issue, index) => {
        return (
          <section key={index} className={classes.BugList}>
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
      <p>This is BugList!</p>
    </>
  )
};

export default BugList;