import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home'
import RegisterPage from './pages/Registration'
import LoginPage from './pages/Login'
import Profile from './pages/Profile'
import Results from './pages/Results'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={HomePage} exact/>
        <Route path='/register' component={RegisterPage}/>
        <Route path='/Login' component={LoginPage}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/result' component={Results}/>
        <Route path='/home' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
