import React from 'react';

import { Route } from 'react-router-dom';
import Login from './components/Login';
import Posts from './components/Posts';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import CreateFriend from './components/CreateFriend';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={Posts} />
      <PrivateRoute path="/createFriend" exact component={CreateFriend} />
    </div>
  );
}

export default App;
