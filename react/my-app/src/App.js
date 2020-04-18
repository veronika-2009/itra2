import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route extract path='/' component={Landing} />
          <div className='container'>
            <Route extract path='/profile' component={Profile} />
            <Route extract path='/register' component={Register} />
            <Route extract path='/login' component={Login} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
