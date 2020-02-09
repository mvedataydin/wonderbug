import React, { useState } from 'react';

import classes from './IssueForm.module.scss'

const IssueForm = (props) => {
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredAssignee, setEnteredAssignee] = useState('')
  const [selectedSeverity, setSelectedSeverity] = useState('low');
  const [selectedType, setSelectedType] = useState('bug');

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIssue(
      {
        description: enteredDescription,
        assignee: enteredAssignee,
        severity: selectedSeverity,
        type: selectedType,
        status: "OPEN",
        created: new Date().toString()
      }
    )
  }

  return (
    <section className={classes.Section}>
      <h1>Add New Issue</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={enteredDescription}
            onChange={(event) => setEnteredDescription(event.target.value)}
            placeholder="Describe the issue..."
            required
          />
        </div>
        <div>
          <label htmlFor="assignee">Assigned to</label>
          <input
            type="text"
            id="assignee"
            value={enteredAssignee}
            onChange={(event) => setEnteredAssignee(event.target.value)}
            placeholder="Enter assignee..."
            required
          />
        </div>
        <div>
          <label htmlFor="severity">Severity</label>
          <select id="severity" value={selectedSeverity} onChange={(event) => setSelectedSeverity(event.target.value)}>
            <option value="low" >Low</option>
            <option value="medium">Medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
            <option value="bug" >Bug</option>
            <option value="feature">New Feature</option>
            <option value="task">Task</option>
            <option value="improvement">Improvement</option>
          </select>

        </div>
        <div>
          <label htmlFor="screenshot">Add Screenshot</label>
          <input type="file"
            id="screenshot" name="screenshot"
            accept="image/png, image/jpeg" />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  )
};

export default IssueForm;