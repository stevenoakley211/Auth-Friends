import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'
import ProtectedRoute from './components/Protected Route'

const logOut =() =>{
  localStorage.removeItem('token')
  window.location.reload(false);
}
function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends</Link>
          <Link to="/login" onClick={logOut}>Logout</Link>
        </nav>

        <Switch>
          <ProtectedRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component ={LoginForm} />
          <Route component={LoginForm}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
