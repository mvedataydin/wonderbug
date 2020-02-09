import React from 'react';

import logo from './logo.svg';
import './App.scss';
import DashBoard from './containers/DashBoard/DashBoard';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <DashBoard />
      </Layout>
    </div>
  );
}

export default App;
