import React from 'react';

import './App.scss';
import UserProjects from './projects/pages/UserProjects';
import Layout from './shared/hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Layout>
        <Switch>

        <Route path="/:userId/projects" exact>
          <UserProjects />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
